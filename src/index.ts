import axios, { AxiosInstance } from 'axios';
import Phrase from './types/phrase';
import User from './types/user';

interface constructorOptions {
    baseURL?: string // baseURL is used for example to specify the test server instead of prod
}

class FrasesValenApi {
    constructor(token: string, opts?: constructorOptions) {
        this.token = token;

        this.baseURL = opts?.baseURL ? opts?.baseURL : 'https://frasesvalen.antonioma.com/api';

        this.axios = axios.create({
            baseURL: this.baseURL,
            headers: token ? { Authorization: "Bearer " + this.token } : {}
        });
    }

    public token: string;
    public baseURL: string;
    public axios: AxiosInstance;

    async getPhrase(id?: Number){
        return new Phrase(await this.axios.get(`phrase/${id ? id : 'random'}`).then(r => r.data));
    }

    async createPhrase(phrase: Partial<Phrase>){
        if(!this.token) throw('You need to provide a token in order to use the /phrases/create endpoint.');

        return await this.axios.post('phrases/create', phrase).then(r => r.data)
    }

    async getMe(){
        if(!this.token) throw('You need to provide a token in order to use the /user endpoint.');

        return await this.axios.get('user').then(r => r.data)
    }
}

export { FrasesValenApi, Phrase, User };