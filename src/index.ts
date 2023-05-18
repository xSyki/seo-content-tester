import { IContent } from './interfaces/content'
import { IResults } from './interfaces/results'
import { testContent } from './services/testContent/testContent'
import { testDescription } from './services/testDescription/testDescription'
import { testSlug } from './services/testSlug/testSlug'
import { testTitle } from './services/testTitle/testTitle'

export const testSeoContent = (content: IContent) => {
    const results: IResults = {
        title: testTitle(content),
        slug: testSlug(content),
        description: testDescription(content),
        content: testContent(content),
    }

    return results
}
