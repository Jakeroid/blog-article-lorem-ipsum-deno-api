// import Router class
import {Router} from 'https://deno.land/x/oak/mod.ts';
import {LoremIpsumController} from '../controllers/lorem-ipsum-controller.ts';

// create new class that extends Router class
export class LoremIpsumRouter extends Router {

    // create constructor and init routes
    constructor() {
        super();
        this.get("/lorem-ipsum/paragraphs/:count?", LoremIpsumController.getParagraphs);
        this.get("/lorem-ipsum/sentences/:count?", LoremIpsumController.getSentences);
        this.get("/lorem-ipsum/words/:count?", LoremIpsumController.getWords);
    }
}