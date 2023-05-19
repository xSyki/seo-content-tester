import { internalLinksLength } from '../index' // replace with your actual file path
import { load } from 'cheerio'

describe('internalLinksLength', () => {
    test('returns correct result when there are no internal links', () => {
        const $ = load('<a href="http://external.com">External Link</a>')

        const result = internalLinksLength($)
        expect(result).toEqual({
            passed: false,
            details: {
                length: 0,
            },
            reason: 'too_short',
            min: 1,
        })
    })

    test('returns correct result when there is at least one internal link', () => {
        const $ = load('<a href="#internal">Internal Link</a>')

        const result = internalLinksLength($)
        expect(result).toEqual({
            passed: true,
            details: {
                length: 1,
            },
            min: 1,
        })
    })

    test('returns correct result when there are more than one internal links', () => {
        const $ = load(`
            <a href="/internal1">Internal Link 1</a>
            <a href="#internal2">Internal Link 2</a>
        `)

        const result = internalLinksLength($)
        expect(result).toEqual({
            passed: true,
            details: {
                length: 2,
            },
            min: 1,
        })
    })
})
