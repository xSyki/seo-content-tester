export function isWordLengthCorrect(string: string, min: number, max: number) {
    if (!string) {
        return {
            passed: false,
            length: 0,
        }
    }

    const words = string.split(' ')

    return {
        passed: words.length >= min && words.length <= max,
        length: words.length,
    }
}
