import { IContent } from '../../interfaces/content'
import { isLengthCorrect } from '../../tests'

export function testSlug(content: IContent) {
    return {
        isLengthCorrect: isLengthCorrect(content.slug, 0, 40),
    }
}
