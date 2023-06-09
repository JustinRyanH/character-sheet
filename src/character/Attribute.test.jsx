import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { Attribute } from "./Attribute.jsx";

describe('Attribute', () => {
    it('updates the modifier from the Attribute Value', () => {
        render(<Attribute label="Strength" value={10} />);

        expect(screen.getByLabelText('Strength')).toHaveValue('10');
    });
});
