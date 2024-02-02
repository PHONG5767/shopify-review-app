import styled from "styled-components";
import { SingRatingStar } from "../startRating";
import { useWatch } from "react-hook-form";
const Bgcolorprocess = styled.div`
  position: relative;
  background-color: ${props => props.DisabledStar};
  height: ${props => props.processHeight};
  margin-right: 8px;
  color: ${props => props.textColor};
  font-size: ${props => props.fontSizeRating};
  max-width:100px;
  margin-left:8px;
  width: ${props => props.processWidth};
  border-radius: 4px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: ${props => props.starColor}; 
    width:${props => props.ratingWidth};
    border-radius: 4px;
  }
`;
export default function ProcessRating({ customerReview, totalReview }) {
    const numberReview1 = customerReview.filter(review => review.rating === 1).length;
    const numberReview2 = customerReview.filter(review => review.rating === 2).length;
    const numberReview3 = customerReview.filter(review => review.rating === 3).length;
    const numberReview4 = customerReview.filter(review => review.rating === 4).length;
    const numberReview5 = customerReview.filter(review => review.rating === 5).length;
    const starColor = useWatch({
        name: "starColor",
    });
    const DisabledStar = useWatch({
        name: "DisabledStar",
    });
    const processWidth = useWatch({
        name: "processWidth",
    });
    const processHeight = useWatch({
        name: "processHeight",
    });
    const textColor = useWatch({
        name: "textColor",
    });
    const fontSizeRating = useWatch({
        name:"fontSizeRating"
    })
    return (
        <div style={{color: textColor,fontSize:fontSizeRating}}>
            <div className="flex min-w-40 flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="mr-1 font-bold">5</div>
                    <SingRatingStar starColor={starColor} size={"20px"} />
                </div>
                <Bgcolorprocess starColor={starColor} processHeight={processHeight} processWidth={processWidth} DisabledStar={DisabledStar} ratingWidth={`${numberReview5 / totalReview * 100}%`}></Bgcolorprocess>
                <div className="font-bold">({numberReview5})</div>
            </div>
            <div className="flex min-w-40 flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="mr-1 font-bold">4</div>
                    <SingRatingStar starColor={starColor} size={"20px"} />
                </div>
                <Bgcolorprocess starColor={starColor} processHeight={processHeight} processWidth={processWidth} DisabledStar={DisabledStar} ratingWidth={`${numberReview4 / totalReview * 100}%`}></Bgcolorprocess>
                <div className="font-bold">({numberReview4})</div>
            </div>
            <div className="flex min-w-40 flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="mr-1 font-bold">3</div>
                    <SingRatingStar starColor={starColor} size={"20px"} />
                </div>
                <Bgcolorprocess starColor={starColor} processHeight={processHeight} processWidth={processWidth} DisabledStar={DisabledStar} ratingWidth={`${numberReview3 / totalReview * 100}%`}></Bgcolorprocess>
                <div className="font-bold">({numberReview3})</div>
            </div>
            <div className="flex min-w-40 flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="mr-1 font-bold">2</div>
                    <SingRatingStar starColor={starColor} size={"20px"} />
                </div>
                <Bgcolorprocess starColor={starColor} processHeight={processHeight} processWidth={processWidth} DisabledStar={DisabledStar} ratingWidth={`${numberReview2 / totalReview * 100}%`}></Bgcolorprocess>
                <div className="font-bold">({numberReview2})</div>
            </div>
            <div className="flex min-w-40 flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="mr-1 font-bold">1</div>
                    <SingRatingStar starColor={starColor} size={"20px"} />
                </div>
                <Bgcolorprocess starColor={starColor} processHeight={processHeight} processWidth={processWidth} DisabledStar={DisabledStar} ratingWidth={`${numberReview1 / totalReview * 100}%`}></Bgcolorprocess>
                <div className="font-bold">({numberReview1})</div>
            </div>
        </div>
    )
}