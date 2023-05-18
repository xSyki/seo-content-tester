import { IContent } from '../../interfaces/content'
import { isLengthCorrect } from '../../tests'

export function testTitle(content: IContent) {
    return {
        isLengthCorrect: isLengthCorrect(content.title, 46, 70),
    }
}
