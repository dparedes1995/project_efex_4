import { render, fireEvent, screen } from '@testing-library/react';
import AutocorrectTextarea from './AutocorrectTextarea';

test('autocorrects words based on the corrections object', () => {
    const corrections = { 'realy': 'really', 'wierd': 'weird' };

    // Renderizar el componente sin destructuring
    render(<AutocorrectTextarea corrections={corrections} />);

    // Utilizar screen.getByTestId en lugar de destructuring de getByTestId
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: 'This is realy ' } });
    expect(textarea.value).toBe('This is really ');

    fireEvent.change(textarea, { target: { value: 'Something wierd ' } });
    expect(textarea.value).toBe('Something weird ');
});
