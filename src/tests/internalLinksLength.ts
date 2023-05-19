import { CheerioAPI } from 'cheerio'

export interface IInternalLinksLength {
    passed: boolean
    details: {
        length: number
    }
    reason?: 'too_short'
    min: number
}

export function internalLinksLength($: CheerioAPI): IInternalLinksLength {
    const length = $('a[href^="#"], a[href^="/"]').length

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
