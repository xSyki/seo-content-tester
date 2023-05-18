import { IContent } from './interfaces/content'
import { IResults } from './interfaces/results'
import { testContent } from './services/testContent/testContent'
import { testDescription } from './services/testDescription/testDescription'
import { testSlug } from './services/testSlug/testSlug'
import { testTitle } from './services/testTitle/testTitle'
import showdown from 'showdown'
import { load } from 'cheerio'

const converter = new showdown.Converter()

export const testSeoContent = (content: IContent) => {
    const html =
        content.contentType === 'html'
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
