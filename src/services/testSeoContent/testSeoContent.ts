import { IContent } from '../../interfaces/content'
import { IResults } from '../../interfaces/results'
import { testContent } from '../testContent/testContent'
import { testDescription } from '../testDescription/testDescription'
import { testSlug } from '../testSlug/testSlug'
import { testTitle } from '../testTitle/testTitle'
import showdown from 'showdown'
import { load } from 'cheerio'
import { ContentTypeEnum } from '../../interfaces/contentType'

const converter = new showdown.Converter()

export const testSeoContent = (content: IContent) => {
    const html =
        content.contentType === ContentTypeEnum.HTML
            ? content.content
            : converter.makeHtml(content.content)

    const $ = load(html)

    const results: IResults = {
        title: testTitle(content),
        slug: testSlug(content),
        description: testDescription(content),
        content: testContent(content, $),
    }

    return results
}
