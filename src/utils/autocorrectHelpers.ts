import { CorrectionsMap } from '../types/autocorrect';

export const autocorrectText = (inputText: string, corrections: CorrectionsMap): string => {
    const wordBoundaryRegex = /(\b\w+)$/;
    const match = inputText.slice(0, -1).match(wordBoundaryRegex);

    if (match) {
        const lastWord = match[1];
        const correction = corrections[lastWord];

        if (correction) {
            return inputText.slice(0, match.index) + correction + inputText.slice(-1);
        }
    }
    return inputText;
};
