import User from './user';

type PhraseStatus = 'pending_approval' | 'published' | 'denied';

class Phrase {
    constructor(data: Partial<Phrase>){
        (<any>Object).assign(this, data);
        if(data.created_at)this.created_at = new Date(data.created_at.toString());
        if(data.suggested_by && typeof data.suggested_by !== 'string')this.suggested_by = new User(data.suggested_by);
    }

    public id?: Number
    public status?: PhraseStatus
    public views?: Number
    public phrase!: String
    public info?: String
    public clip?: String
    public video?: String
    public video_start?: Number
    public video_end?: Number
    public suggested_by?: User | string /* handle @user */ | object

    public created_at?: Date | string

    get text(){
        return this.phrase;
    }
}

export default Phrase;