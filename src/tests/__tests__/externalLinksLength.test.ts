import { externalLinksLength } from '../index'
import { load } from 'cheerio'

describe('externalLinksLength', () => {
    test('returns correct result when there are no external links', () => {
        const $ = load('<a href="/internal">Internal Link</a>')

        const result = externalLinksLength($)
        expect(result).toEqual({
            passed: false,
            details: {
                length: 0,
            },
            reason: 'too_short',
            min: 1,
        })
    })

    test('returns correct result when there is at least one external link', () => {
        const $ = load('<a href="http://external.com">External Link</a>')

        const result = externalLinksLength($)
        expect(result).toEqual({
            passed: true,
            details: {
                length: 1,
            },
            min: 1,
        })
    })

    test('returns correct result when there are more than one external links', () => {
        const $ = load(`
            <a href="http://external.com">External Link</a>
            <a href="https://another-external.com">Another External Link</a>
        `)

        const result = externalLinksLength($)
        expect(result).toEqual({
            passed: true,
            details: {
                length: 2,
            },
            min: 1,
        })
    })
})
