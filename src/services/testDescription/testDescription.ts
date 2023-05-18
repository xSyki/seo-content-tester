import { IContent } from '../../interfaces/content'
import { isLengthCorrect } from '../../tests'

export function testDescription(content: IContent) {
    return {
        isLengthCorrect: isLengthCorrect(content.description, 120, 320),
    }
}
