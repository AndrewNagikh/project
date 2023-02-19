import { render, screen } from '@testing-library/react';
// import React from 'react';
import { AppButtons, ThemeButton } from './AppButtons';

describe('classNames', () => {
    test('button', () => {
        render(<AppButtons>TEST</AppButtons>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('button witch clear theme', () => {
        render(<AppButtons theme={ThemeButton.CLEAR}>TEST</AppButtons>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug();
    });
});
