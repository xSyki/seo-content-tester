export function isLengthCorrect(string: string, min: number, max: number) {
    return {
        passed: string.length >= min && string.length <= max,
        length: string.length,
    }
}
