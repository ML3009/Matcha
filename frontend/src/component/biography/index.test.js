import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Biography from './';

beforeAll(() => {
    window.alert = jest.fn();
})

test('Test click biography link', async () => {
    render(
        <MemoryRouter>
            <Biography />
        </MemoryRouter>
    )
    const biographyLink = screen.getByRole('link');
    fireEvent.click(biographyLink);
    expect(window.alert).toHaveBeenCalledWith('You want to see his biography, right?');
})