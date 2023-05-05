import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders Character Header', () => {
        render(<App />);
        expect(screen.getByLabelText('Character Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Class')).toBeInTheDocument();
        expect(screen.getByLabelText('Level')).toBeInTheDocument();
        expect(screen.getByLabelText('Background')).toBeInTheDocument();
        expect(screen.getByLabelText('Player Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Race')).toBeInTheDocument();
        expect(screen.getByLabelText('Alignment')).toBeInTheDocument();
        expect(screen.getByLabelText('Experience Points')).toBeInTheDocument();
    });

    it('renders Attributes', () => {
        render(<App />);
        expect(screen.getByLabelText('Strength')).toBeInTheDocument();
        expect(screen.getByLabelText('Dexterity')).toBeInTheDocument();
        expect(screen.getByLabelText('Constitution')).toBeInTheDocument();
        expect(screen.getByLabelText('Intelligence')).toBeInTheDocument();
        expect(screen.getByLabelText('Wisdom')).toBeInTheDocument();
        expect(screen.getByLabelText('Charisma')).toBeInTheDocument();
    });
});
