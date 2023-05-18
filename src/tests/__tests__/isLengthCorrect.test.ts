import { isLengthCorrect } from '../index'

describe('isLengthCorrect', () => {
    test('returns correct result for string within range', () => {
        const result = isLengthCorrect('Hello', 1, 5)
        expect(result).toEqual({ passed: true, length: 5 })
    })

    test('returns correct result for string shorter than range', () => {
        const result = isLengthCorrect('Hi', 3, 5)
        expect(result).toEqual({ passed: false, length: 2 })
    })

    test('returns correct result for string longer than range', () => {
        const result = isLengthCorrect('Hello World', 1, 5)
        expect(result).toEqual({ passed: false, length: 11 })
    })

    test('returns correct result for empty string', () => {
        const result = isLengthCorrect('', 1, 5)
        expect(result).toEqual({ passed: false, length: 0 })
    })

    test('returns correct result for string with exactly minimum length', () => {
        const result = isLengthCorrect('Hi', 2, 5)
        expect(result).toEqual({ passed: true, length: 2 })
    })

    test('returns correct result for string with exactly maximum length', () => {
        const result = isLengthCorrect('Hello', 1, 5)
        expect(result).toEqual({ passed: true, length: 5 })
    })
})
