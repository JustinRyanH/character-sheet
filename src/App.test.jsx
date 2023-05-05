import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders the app', () => {
        render(<App />);
        expect(screen.getByLabelText('Character Name')).toBeInTheDocument();
    });
});
