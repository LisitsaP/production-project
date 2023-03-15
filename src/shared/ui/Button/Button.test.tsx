import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
    test('test render', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
