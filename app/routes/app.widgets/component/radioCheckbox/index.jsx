import React, { useState, useCallback } from 'react';
import { Box, Card, Text, RadioButton } from '@shopify/polaris';

export default function HeadLayoutTemplate() {
    const [selectedOption, setSelectedOption] = useState('regular');
    const [imageSrc, setImageSrc] = useState({
        regular: 'https://cdn.vstar.app/static/images/webp/display/regular-header-active.webp', 
        streamlined: 'https://cdn.vstar.app/static/images/webp/display/streamlined-header.webp', 
    });

    const handleChange = useCallback(
        (newOption) => {
            setSelectedOption(newOption);
            if (newOption === 'regular') {
                setImageSrc({ regular: 'https://cdn.vstar.app/static/images/webp/display/regular-header-active.webp', streamlined: 'https://cdn.vstar.app/static/images/webp/display/streamlined-header.webp' }); 
            } else if (newOption === 'streamlined') {
                setImageSrc({ regular: 'https://cdn.vstar.app/static/images/webp/display/regular-header.webp', streamlined: 'https://cdn.vstar.app/static/images/webp/display/streamlined-header-active.webp' }); 
            }
        },
        [],
    );

    return (
        <div>
            <Text as="h2" variant="headingSm">
                Head layout
            </Text>
            <div className='flex flex-row'>
                <Box paddingBlock="200" width='50%' >
                    <img width="123" height="40" src={imageSrc.regular} alt="regular" onClick={() => handleChange('regular')} className='cursor-pointer'/>
                    <RadioButton
                        label="Regular"
                        id="regular"
                        name="headLayout"
                        checked={selectedOption === 'regular'}
                        onChange={() => handleChange('regular')}
                    />
                </Box>
                <Box paddingBlockStart="200" width='50%'>
                    <img width="123" height="40" src={imageSrc.streamlined} alt="Streamlined" onClick={() => handleChange('streamlined')} className='cursor-pointer'/>
                    <RadioButton
                        label="Streamlined"
                        id="streamlined"
                        name="headLayout"
                        checked={selectedOption === 'streamlined'}
                        onChange={() => handleChange('streamlined')}
                    />
                </Box>
            </div>
        </div>
    );
}
