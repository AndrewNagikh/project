import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWitchTranslation } from 'shared/lib/tetsts/renderWitchTranslation/renderWitchTranslation';
import { SideBar } from './SideBar';

describe('SideBar.test Test', () => {
    test('SideBar.test case#1', () => {
        renderWitchTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('SideBar.test to be collapsed', () => {
        renderWitchTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
