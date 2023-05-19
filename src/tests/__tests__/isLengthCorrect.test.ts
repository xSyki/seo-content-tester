import { isLengthCorrect } from '../index'

describe('isLengthCorrect', () => {
    test('returns correct result for string within range', () => {
        const result = isLengthCorrect('Hello', 1, 5)
        expect(result).toEqual({
            passed: true,
            details: { length: 5 },
            min: 1,
            max: 5,
        })
    })

    test('returns correct result for string shorter than range', () => {
        const result = isLengthCorrect('Hi', 3, 5)
        expect(result).toEqual({
            passed: false,
            details: { length: 2 },
            reason: 'too_short',
            min: 3,
            max: 5,
        })
    })

    test('returns correct result for string longer than range', () => {
        const result = isLengthCorrect('Hello World', 1, 5)
        expect(result).toEqual({
            passed: false,
            details: { length: 11 },
            reason: 'too_long',
            min: 1,
            max: 5,
        })
    })

    test('returns correct result for empty string', () => {
        const result = isLengthCorrect('', 1, 5)
        expect(result).toEqual({
            passed: false,
            details: { length: 0 },
            reason: 'too_short',
            min: 1,
            max: 5,
        })
    })

    test('returns correct result for string with exactly minimum length', () => {
        const result = isLengthCorrect('Hi', 2, 5)
        expect(result).toEqual({
            passed: true,
            details: { length: 2 },
            min: 2,
            max: 5,
        })
    })

    test('returns correct result for string with exactly maximum length', () => {
        const result = isLengthCorrect('Hello', 1, 5)
        expect(result).toEqual({
            passed: true,
            details: { length: 5 },
            min: 1,
            max: 5,
        })
    })
})
