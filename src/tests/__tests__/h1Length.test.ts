import { h1Length } from '../index'
import { load } from 'cheerio'

describe('h1Length', () => {
    test('returns correct result when there are no h1 elements', () => {
        const fakeCheerio = load('')

        const result = h1Length(fakeCheerio)
        expect(result).toEqual({
            passed: false,
            details: {
                length: 0,
            },
            reason: 'too_short',
            min: 1,
        })
    })

    test('returns correct result when there is exactly one h1 element', () => {
        const fakeCheerio = load('<h1>Test</h1>')

        const result = h1Length(fakeCheerio)
        expect(result).toEqual({
            passed: true,
            details: {
                length: 1,
            },
            min: 1,
        })
    })

    test('returns correct result when there are more than one h1 elements', () => {
        const fakeCheerio = load('<h1>Test</h1><h1>Test</h1>')

        const result = h1Length(fakeCheerio)
        expect(result).toEqual({
            passed: false,
            details: {
                length: 2,
            },
            reason: 'too_long',
            min: 1,
        })
    })
})
