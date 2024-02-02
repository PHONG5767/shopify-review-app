import styled from "styled-components";
import RatingStart from "../../../startRating";

const Img = styled.img.attrs((props) => ({
    src: props.src
}))`
    width: 114px;
    height: 114px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 5px;
`
const GalleryTab = styled.ul`
    display: flex;
    justify-content: center;
    margin: unset;
`
const GalleryContent = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    margin: 30px -6px 0;
    padding: unset;
    justify-content: center;
`
const GaleryContainer = styled.li`
    cursor: pointer;
    margin: 0 6px 30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`

export default function AllImgReview({ reviewsWithImages,starColor,DisabledStar }) {
    const stars = [1, 2, 3, 4, 5]
    return (
        <div className="flex flex-col items-center">
            <GalleryTab>
                {
                    stars.map((star) => (
                        <li key={star}>{star}</li>
                    ))
                }
            </GalleryTab>
            <GalleryContent>
                {reviewsWithImages.map((reviewsWithImage, index) => (
                    <GaleryContainer>
                        <Img src={reviewsWithImage.image} alt={reviewsWithImage.customer_id} />
                        <RatingStart starColor={starColor} DisabledStar={DisabledStar} size="15px" rating={reviewsWithImage.rating} />
                    </GaleryContainer>
                ))}
            </GalleryContent>
        </div>
    )
}