import { render, screen, fireEvent } from '@testing-library/react';
import Like from './';

beforeAll(() => {
    window.alert = jest.fn();
});

test('Test click like button', async () => {
    render(
        <Like></Like>
    )
    const likeButton = screen.getByRole('button');
    fireEvent.click(likeButton);
    expect(window.alert).toHaveBeenCalledWith('You liked this person!');
})