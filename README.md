## FrasesValen JS wrapper
---
> **Links:** [📕 Api Docs](https://frasesvalen.antonioma.com/api) | [🔐 Get a token](https://frasesvalen.antonioma.com/account/dev) | [👨‍💻 Test server](https://frasesvalen-test.antonioma.com/account/dev)

> ## ⚠ To test things [use the test server](#use-a-different-server).

## Get a phrase
```js
const { FrasesValen } = require('./dist/index');
const fv = new FrasesValen();

// Get a random phrase
fv.getPhrase().then(console.log);
// Get phrase by id
fv.getPhrase(1).then(console.log);
```
## Create a phrase (suggest)
```js
const { FrasesValen, Phrase } = require('./dist/index');
const fv = new FrasesValen('0|hEtDgFZZfk2c8aRrADT8HF9Yu3qDJqmgCnzG86NVsvFLjKqhVJqp4natdYeYhqgW'); //To use this endpoint you need a token.

let phrase = new Phrase({phrase: 'example'});
fv.createPhrase(phrase);
```

## Get current authenticated user
> This endpoint is useful to test if your token is valid.
```js
const { FrasesValen } = require('./dist/index');
const fv = new FrasesValen('0|hEtDgFZZfk2c8aRrADT8HF9Yu3qDJqmgCnzG86NVsvFLjKqhVJqp4natdYeYhqgW'); //To use this endpoint you need a token.

fv.getMe().then(console.log);
```

## Use a different server
```js
const { FrasesValen } = require('./dist/index');
const fv = new FrasesValen('0|hEtDgFZZfk2c8aRrADT8HF9Yu3qDJqmgCnzG86NVsvFLjKqhVJqp4natdYeYhqgW', {baseURL: 'https://frasesvalen-test.antonioma.com/api/'}); // This is the url of the test server, you can test everything you want on there.
```
> [🔑 Get a token on the test server](https://frasesvalen-test.antonioma.com/account/dev)