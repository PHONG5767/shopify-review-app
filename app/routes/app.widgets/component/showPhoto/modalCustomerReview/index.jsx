import React from "react";
import { Modal, LegacyStack, TextContainer, Frame } from '@shopify/polaris';
import ReviewItem from "./reviewItem";
import AllImgReview from "./allReviewImg";

export default function ModalCustomerReviews({ review, active, closeModal,singleReview,reviewsWithImages,starColor,DisabledStar}) {
    return (
        <Modal
            size="large"
            open={active}
            onClose={closeModal}
            title={`Xem tất cả ảnh`}
            primaryAction={{
                content: 'Close',
                onAction: closeModal,
            }}
        >
            <Modal.Section>
            {singleReview ? (
                  <ReviewItem review={review} />
              ) : (
                  <AllImgReview starColor={starColor} DisabledStar={DisabledStar} reviewsWithImages={reviewsWithImages}
                  />
              )}
            </Modal.Section>
        </Modal>
    );
}
