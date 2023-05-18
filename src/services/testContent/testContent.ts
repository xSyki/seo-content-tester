import { IContent } from '../../interfaces/content'
import { isWordLengthCorrect } from '../../tests'

export function testContent(content: IContent) {
    return {
        isWordLengthCorrect: isWordLengthCorrect(content.content, 300, 100000),
    }
}
