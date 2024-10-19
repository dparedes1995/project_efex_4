import React from 'react';
import {AutocorrectTextareaProps} from "../interfaces/AutocorrectTextareaProps";
import {useAutocorrect} from "../hooks/useAutocorrect";

const AutocorrectTextarea: React.FC<AutocorrectTextareaProps> = ({ corrections }) => {
    const { text, handleChange } = useAutocorrect({ corrections });

    return (
        <div>
            <textarea
                data-testid="textarea"
                value={text}
                onChange={handleChange}
                rows={10}
                cols={50}
                placeholder="Escribe aquí..."
            />
        </div>
    );
};

export default AutocorrectTextarea;
