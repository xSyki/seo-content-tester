import { subHeadingsLength } from '../index'

import { load } from 'cheerio'

describe('subHeading', () => {
    test('returns correct result when there are no h2 elements', () => {
        const $ = load('')

        const result = subHeadingsLength($)
        expect(result).toEqual({
            passed: false,
            details: {
                length: 0,
            },
            reason: 'too_short',
            min: 1,
        })
    })

    test('returns correct result when there is at least one h2 element', () => {
        const $ = load('<h2>Test</h2>')

        const result = subHeadingsLength($)
        expect(result).toEqual({
            passed: true,
            details: {
                length: 1,
            },
            reason: undefined,
            min: 1,
        })
    })
})
