import { useState } from 'react';
import { UseAutocorrectProps } from '../interfaces/UseAutocorrectProps';
import { autocorrectText } from '../utils/autocorrectHelpers';

export const useAutocorrect = ({ corrections, onChange }: UseAutocorrectProps) => {
    const [text, setText] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        const lastChar = inputValue.slice(-1);
        
        if (lastChar === " " || lastChar === "\n") {
            const correctedValue = autocorrectText(inputValue, corrections);
            setText(correctedValue);
            onChange && onChange(correctedValue);
        } else {
            setText(inputValue);
            onChange && onChange(inputValue);
        }
    };

    return { text, handleChange };
};
