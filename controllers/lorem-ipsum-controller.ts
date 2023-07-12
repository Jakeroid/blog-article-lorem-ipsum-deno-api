import { LoremIpsum } from 'npm:lorem-ipsum@2.0.8';

export class LoremIpsumController {

    public static getParagraphs(ctx): void {
        const count = ctx.params.count ? parseInt(ctx.params.count) : 3;
        const lorem = new LoremIpsum();
        ctx.response.body = lorem.generateParagraphs(count);
    }

    public static getSentences(ctx): void {
        const count = ctx.params.count ? parseInt(ctx.params.count)  : 3;
        const lorem = new LoremIpsum();
        ctx.response.body = lorem.generateSentences(count);
    }

    public static getWords(ctx): void {
        const count = ctx.params.count ? parseInt(ctx.params.count)  : 3;
        const lorem = new LoremIpsum();
        ctx.response.body = lorem.generateWords(count);
    }
}