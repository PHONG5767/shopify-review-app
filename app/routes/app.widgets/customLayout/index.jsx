import styled from "styled-components";
import { useWatch, useController } from "react-hook-form";
import { Select } from '@shopify/polaris';

const StyledRating = styled.div`
    font-size : ${props => props.fontSize};
    color : ${props => props.ratingColor};
    font-weight:bold;
`
const StyledSelect = styled.div`
    width:100%;
    .Polaris-Labelled--hidden{
        width:100%
        }
        select{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            padding: 10px;
        }
`
export function ReviewSummary({ rating }) {
    const ratingColor = useWatch({
        name: "ratingColor",
    });
    const fontSize = useWatch({
        name: "fontSize",
    });
    return (
        <StyledRating ratingColor={ratingColor} fontSize={fontSize}>
            {rating}
        </StyledRating>)
}

export function Selected({ options, name, ...rest }) {
    const { field } = useController({
        name
    })

    return (
        <StyledSelect>
            <Select {...field} {...rest}
                labelInline
                options={options} />
        </StyledSelect>
    );
}
