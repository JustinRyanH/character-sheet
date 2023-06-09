import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { Attribute } from "./Attribute.jsx";

describe('Attribute', () => {
    it('updates the modifier from the Attribute Value', () => {
        render(<Attribute label="Strength" value={10} />);

        expect(screen.getByLabelText('Strength')).toHaveValue('10');
    });

    it('displays the modifier from the incoming value', () => {
        render(<Attribute label="Strength" value={12} />);

        expect(screen.getByLabelText('Strength')).toHaveValue('12');
        expect(screen.getByLabelText('Strength Modifier')).toHaveTextContent('+1');
    });

    it('displays the negative when value is less than 0', () => {
        render(<Attribute label="Strength" value={8} />);

        expect(screen.getByLabelText('Strength')).toHaveValue('8');
        expect(screen.getByLabelText('Strength Modifier')).toHaveTextContent('-1');
    });

    it('displays the negative when value is less than 0', () => {
        render(<Attribute label="Strength" value={10} />);

        expect(screen.getByLabelText('Strength')).toHaveValue('10');
        expect(screen.getByLabelText('Strength Modifier')).toHaveTextContent(/^0/);
    });
});
