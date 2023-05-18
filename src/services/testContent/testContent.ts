import { CheerioAPI } from 'cheerio'
import { IContent } from '../../interfaces/content'
import { isWordLengthCorrect } from '../../tests'

export function testContent(content: IContent, $: CheerioAPI) {
    return {
        isWordLengthCorrect: isWordLengthCorrect($.text(), 300, 100000),
    }
}
