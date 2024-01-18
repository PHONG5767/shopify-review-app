import { Page, Layout, LegacyCard, Text,Icon} from '@shopify/polaris';
import ToggleSwitch from './component/toggleSwitch';
import HeadLayoutTemplate from './component/radioCheckbox/index';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { StarIcon } from "@shopify/polaris-icons";

const StickyReviewWidget = styled.div`
position: sticky;
top: 0;
width: 100%;
height: 4rem;
margin-bottom: 1rem;
padding: 1rem;
border-bottom: 1px solid #ddd;
z-index: 99;
background-color: #fff;
font-weight: 600;
font-size: 16px;
`

export default function Widget() {
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
    <Page fullWidth>
      <Layout>
        <Layout.Section variant="oneThird">
          <StickyReviewWidget>Review widget</StickyReviewWidget>
          <LegacyCard sectioned>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <Text as="h2" variant="headingSm">
                  Activate Review Widget</Text>
                <p>Display customer reviews at the bottom of the product page.</p>
              </div>
              <ToggleSwitch selectedOption={selectedOption} imageSrc={imageSrc} handleChange={handleChange} />
            </div>
          </LegacyCard>
          <LegacyCard sectioned>
            <div>
              <HeadLayoutTemplate />
            </div>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
          <StickyReviewWidget>Example</StickyReviewWidget>
          <LegacyCard sectioned>
            <Text as="h2" variant="headingSm">
              Customer Reviews
            </Text>
            <div className='text-4xl font-bold' style={{ color: "#cc8a27" }}>
              4.8
            </div>
            <div className='flex flex-row'>
              <Icon
                source={StarIcon}
                tone="base"
              /><Icon
                source={StarIcon}
                tone="base"
              /><Icon
                source={StarIcon}
                tone="base"
              /><Icon
                source={StarIcon}
                tone="base"
              /><Icon
                source={StarIcon}
                tone="base"
              />
            </div>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}