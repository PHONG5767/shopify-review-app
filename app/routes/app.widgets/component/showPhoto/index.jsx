import styled from "styled-components";
import React from "react";
import ModalCustomerReviews from "./modalCustomerReview";
import { useWatch } from "react-hook-form";
import {
    Button,
    Modal,
    LegacyStack,
    TextContainer,
    Frame,
} from '@shopify/polaris';
import { useState, useCallback } from 'react';

const ImgCover = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px -10px 0;
`
const ImgContainer = styled.div`
    cursor: pointer;
    margin: 0 10px;
    width: calc(20% - 20px);
    position: relative;
`
const Img = styled.img.attrs((props) => ({
    src: props.src
}))`
    border-radius: 8px;
    display: block;
    max-width: 100%;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 1;
    height: 100%;
`
const OverlayImg = styled.div`
    color: #fff;
    position: absolute;
    padding: 0 10px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,.7);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:30px;
`
export default function CustomerReviews({ customerReview }) {
    const starColor = useWatch({
        name: "starColor",
      });
      const DisabledStar = useWatch({
        name: "DisabledStar",
      });
    const reviewsWithImages = customerReview.filter(review => review.image !== null && review.image !== undefined);
    const shouldShowOverlay = reviewsWithImages.length > 5;
    const displayedImages = shouldShowOverlay ? reviewsWithImages.slice(0, 5) : reviewsWithImages;
    const lastImageIndex = displayedImages.length - 1;

    const [active, setActive] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [singleReview, setSingleReview] = useState(true)

    const handleImageClick = (review, index) => {
        if (index === lastImageIndex) {
            setSingleReview(false)
            setActive(true);
            setSelectedReview(review);
        } else {
            setSingleReview(true)
            setActive(true);
            setSelectedReview(review);

        }
    };

    const closeModal = () => {
        setActive(false);
        setSelectedReview(null);
    };

    return (
        <ImgCover>
            {displayedImages.map((review, index) => (
                <ImgContainer key={index} onClick={() => handleImageClick(review, index)}>
                    <Img src={review.image} alt={`Customer photo ${index + 1}`} />
                    {shouldShowOverlay && index === lastImageIndex && (
                        <OverlayImg>{reviewsWithImages.length - 5}+</OverlayImg>
                    )}
                </ImgContainer>
            ))}
            {active && selectedReview && (
                <ModalCustomerReviews
                    starColor={starColor}
                    DisabledStar={DisabledStar}
                    singleReview={singleReview}
                    review={selectedReview}
                    active={active}
                    closeModal={closeModal}
                    reviewsWithImages={reviewsWithImages}
                />
            )}
        </ImgCover>
    );
}
