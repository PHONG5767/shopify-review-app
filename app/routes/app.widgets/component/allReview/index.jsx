import RatingStart from "../startRating"
import styled from "styled-components"
import { useWatch } from "react-hook-form"
const Img = styled.img.attrs((props) => ({
    src: props.src
}))`
    width: 114px;
    height: 114px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`
const GaleryContainer = styled.div`
    cursor: pointer;
    display:flex;
    flex-direction:row;
`
export default function AllRereview({ customerReview}) {
    const starColor = useWatch({
        name: "starColor",
      });
      const DisabledStar = useWatch({
        name: "DisabledStar",
      });
    return (
        <div className="flex flex-col justify-start mt-3 text-base">
            <div>
                {
                    customerReview.map((review) => (
                        <ul className="border-b mb-2 pb-2">
                            <li className="font-bold">{review.customer_name}</li>
                            <li><RatingStart rating={review.rating} size='20px'/></li>
                            <li>{review.content}</li>
                            <li className="flex flex-row">
                            {review.image ? (
                                <GaleryContainer>
                                    <Img src={review.image} alt="" />
                                </GaleryContainer>
                            ): null}
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}