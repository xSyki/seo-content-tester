import { isWordLengthCorrect } from '../index'

describe('isWordLengthCorrect', () => {
    test('returns correct result for string with word count within range', () => {
        const result = isWordLengthCorrect('Hello there friend', 1, 5)
        expect(result).toEqual({
            passed: true,
            details: { length: 3 },
            reason: undefined,
            min: 1,
            max: 5,
        })
    })

    test('returns correct result for string with word count less than range', () => {
        const result = isWordLengthCorrect('Hi there', 3, 5)
        expect(result).toEqual({
            passed: false,
            details: { length: 2 },
            reason: 'too_short',
            min: 3,
            max: 5,
        })
    })

    test('returns correct result for string with word count more than range', () => {
        const result = isWordLengthCorrect(
            'Hello there friend, how are you?',
            1,
            5
        )
        expect(result).toEqual({
            passed: false,
            details: { length: 6 },
            reason: 'too_long',
            min: 1,
            max: 5,
        })
    })

    test('returns correct result for empty string', () => {
        const result = isWordLengthCorrect('', 1, 5)
        expect(result).toEqual({
            passed: false,
            details: { length: 0 },
            reason: 'too_short',
            min: 1,
            max: 5,
        })
    })

    test('returns correct result for string with exactly minimum word count', () => {
        const result = isWordLengthCorrect('Hi there', 2, 5)
        expect(result).toEqual({
            passed: true,
            details: { length: 2 },
            reason: undefined,
            min: 2,
            max: 5,
        })
    })

    test('returns correct result for string with exactly maximum word count', () => {
        const result = isWordLengthCorrect('Hello there friend', 1, 3)
        expect(result).toEqual({
            passed: true,
            details: { length: 3 },
            reason: undefined,
            min: 1,
            max: 3,
        })
    })
})
