import styled from "styled-components";
import RatingStart from "../../../startRating";

const Img = styled.img.attrs((props) => ({
    src: props.src
}))`
    border-radius: 8px;
    max-height: 96%;
    margin: 0 auto;
    width: unset !important;
`
export default function ReviewItem({ review }) {
    return (
        <div className="flex flex-row w-full h-80">
            <div className="w-5/12 flex justify-center items-center">
                <Img src={review.image} alt={review.customer_id} />
            </div>
            <div className="w-7/12 flex flex-col justify-start items-start text-base ml-5">
                <div className="font-bold">
                    {review.customer_name}
                </div>
                <div className="mt-2">
                    <RatingStart
                        size='small'
                        rating={review.rating}
                    />
                </div>
                <div className="leading-5 mt-2">
                    {review.content}
                </div>
            </div>
        </div>
    )
}