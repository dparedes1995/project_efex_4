import {CorrectionsMap} from "../types/autocorrect";

export interface UseAutocorrectProps {
    corrections: CorrectionsMap;
    onChange?: (value: string) => void;
}
