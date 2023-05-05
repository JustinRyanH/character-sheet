import { describe, it, expect } from "vitest";
import { render, screen, within } from '@testing-library/react';
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
        const attributes = screen.getByLabelText('Attributes');
        const attrScreen = within(attributes);
        expect(attrScreen.getByLabelText('Strength')).toBeInTheDocument();
        expect(attrScreen.getByLabelText('Dexterity')).toBeInTheDocument();
        expect(attrScreen.getByLabelText('Constitution')).toBeInTheDocument();
        expect(attrScreen.getByLabelText('Intelligence')).toBeInTheDocument();
        expect(attrScreen.getByLabelText('Wisdom')).toBeInTheDocument();
        expect(attrScreen.getByLabelText('Charisma')).toBeInTheDocument();
    });

    it('renders proficiency bonus', () => {
        render(<App />);
        expect(screen.getByLabelText('Proficiency Bonus')).toBeInTheDocument();
    });

    it('renders saving throws', () => {
        render(<App />);
        const savingThrows = screen.getByLabelText('Saving Throws');
        const saveScreen = within(savingThrows);
        expect(saveScreen.getByLabelText('Strength')).toBeInTheDocument();
        expect(saveScreen.getByLabelText('Dexterity')).toBeInTheDocument();
        expect(saveScreen.getByLabelText('Constitution')).toBeInTheDocument();
        expect(saveScreen.getByLabelText('Intelligence')).toBeInTheDocument();
        expect(saveScreen.getByLabelText('Wisdom')).toBeInTheDocument();
        expect(saveScreen.getByLabelText('Charisma')).toBeInTheDocument();
    });

    it('renders skills', () => {
        render(<App />);
        const skills = screen.getByLabelText('Skills');
        const skillScreen = within(skills);
        expect(skillScreen.getByLabelText('Acrobatics')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Animal Handling')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Arcana')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Athletics')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Deception')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('History')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Insight')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Intimidation')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Investigation')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Medicine')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Nature')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Perception')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Performance')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Persuasion')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Religion')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Sleight of Hand')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Stealth')).toBeInTheDocument();
        expect(skillScreen.getByLabelText('Survival')).toBeInTheDocument();
    });

    it('renders health', () => {
        render(<App />);
        const combat = screen.getByLabelText('Combat Stats');
        const combatScreen = within(combat);
        expect(combatScreen.getByLabelText('Armor Class')).toBeInTheDocument();
        expect(combatScreen.getByLabelText('Initiative')).toBeInTheDocument();
        expect(combatScreen.getByLabelText('Speed')).toBeInTheDocument();
        expect(combatScreen.getByLabelText('Hit Point Maximum')).toBeInTheDocument();
        expect(combatScreen.getByLabelText('Current Hit Points')).toBeInTheDocument();
        expect(combatScreen.getByLabelText('Temporary Hit Points')).toBeInTheDocument();
        expect(combatScreen.getByLabelText('Hit Dice')).toBeInTheDocument();
        expect(combatScreen.getByLabelText('Death Saves')).toBeInTheDocument();
    });
});
