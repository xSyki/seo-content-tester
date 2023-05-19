export interface IIsWordLengthCorrect {
    passed: boolean
    details: {
        length: number
    }
    reason?: 'too_long' | 'too_short'
    min: number
    max: number
}

export function isWordLengthCorrect(
    string: string,
    min: number,
    max: number
): IIsWordLengthCorrect {
    if (!string) {
        return {
            passed: false,
            details: {
                length: 0,
            },
            reason: 'too_short',
            min,
            max,
        }
    }

    const words = string.split(' ')

    const isTooLong = words.length > max
    const isTooShort = words.length < min

    const passed = !isTooLong && !isTooShort

    return {
        passed,
        details: {
            length: words.length,
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
        min,
        max,
    }
}
