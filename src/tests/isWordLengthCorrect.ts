export function isWordLengthCorrect(string: string, min: number, max: number) {
    const words = string.split(' ')

    return {
        passed: words.length >= min && words.length <= max,
        length: words.length,
    }
}
