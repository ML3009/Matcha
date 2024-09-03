import { render, screen, fireEvent } from '@testing-library/react';
import Dislike from './';

beforeAll(() => {
    window.alert = jest.fn();
})

test('Test click dislike button', async () => {
    render(
        <Dislike></Dislike>
    )
    const dislikeButton = screen.getByRole('button');
    fireEvent.click(dislikeButton);
    expect(window.alert).toHaveBeenCalledWith('You disliked this person!');
})