import { CheerioAPI } from 'cheerio'
import { IContent } from '../../interfaces/content'
import {
    h1Length,
    internalLinksLength,
    isWordLengthCorrect,
    subHeadingsLength,
} from '../../tests'
import { IContentTests } from '../../interfaces/contentTests'
import { externalLinksLength } from '../../tests/externalLinksLength'

export function testContent(content: IContent, $: CheerioAPI): IContentTests {
    return {
        isWordLengthCorrect: isWordLengthCorrect($.text(), 300, 100000),
        h1Length: h1Length($),
        subHeadingsLength: subHeadingsLength($),
        externalLinksLength: externalLinksLength($),
        internalLinksLength: internalLinksLength($),
    }
}
