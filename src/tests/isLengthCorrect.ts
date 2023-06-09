export interface IIsLengthCorrect {
    passed: boolean
    details: {
        length: number
    }
    reason?: 'too_long' | 'too_short'
    min: number
    max: number
}

export function isLengthCorrect(
    string: string,
    min: number,
    max: number
): IIsLengthCorrect {
    const isTooLong = string.length > max
    const isTooShort = string.length < min

    const passed = !isTooLong && !isTooShort

    return {
        passed,
        details: {
            length: string.length,
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
