import { CheerioAPI } from 'cheerio'

export interface IExternalLinksLength {
    passed: boolean
    details: {
        length: number
    }
    reason?: 'too_short'
    min: number
}

export function externalLinksLength($: CheerioAPI): IExternalLinksLength {
    const length = $('a[href^="http"]').length

    const passed = length > 0

    return {
        passed,
        details: {
            length,
        },
        ...(!passed ? { reason: 'too_short' } : {}),
        min: 1,
    }
}
