import { CheerioAPI } from 'cheerio'

export interface IH1Length {
    passed: boolean
    details: {
        length: number
    }
    reason?: 'too_long' | 'too_short'
    min: number
}

export function h1Length($: CheerioAPI): IH1Length {
    const length = $('h1').length
    const isTooLong = length > 1
    const isTooShort = length < 1
    const passed = length > 0 && length < 2

    return {
        passed,
        details: {
            length,
        },
        ...(!passed
            ? {
                  reason: isTooLong
                      ? 'too_long'
                      : isTooShort
                      ? 'too_short'
                      : undefined,
              }
            : {}),
        min: 1,
    }
}
