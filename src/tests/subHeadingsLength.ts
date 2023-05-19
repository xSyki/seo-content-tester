import { CheerioAPI } from 'cheerio'

export interface ISubHeadingsLength {
    passed: boolean
    details: {
        length: number
    }
    reason?: 'too_short'
    min: number
}

export function subHeadingsLength($: CheerioAPI): ISubHeadingsLength {
    const length = $('h2').length
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
