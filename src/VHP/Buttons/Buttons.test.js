import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TextButton } from './TextButton';
import { ImageButton } from './ImageButton';
import { ActionRow } from './ActionRow';

/**
 * Test render of all buttons
 */
test('buttons render on app load', () => {
    render(
        <div>
            <TextButton text = "TextButton"/>
            <ImageButton text = "ImageButton"/>
            <ActionRow 
                data = {[
                    {text:"ActionRow A"},
                    {text:"ActionRow B"}
                ]}
            />
        </div>
    );
  
    //Check for buttons
    const textButtonNode = screen.getByText('TextButton')
    expect(textButtonNode).toBeInTheDocument();
    const imageButtonNode = screen.getByText('ImageButton')
    expect(imageButtonNode).toBeInTheDocument();

    const actionRowANode = screen.getByText('ActionRow A')
    expect(actionRowANode).toBeInTheDocument();
    const actionRowBNode = screen.getByText('ActionRow B')
    expect(actionRowBNode).toBeInTheDocument();
});