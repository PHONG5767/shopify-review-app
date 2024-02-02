import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const StyledColorInputWrapper = styled.div`
  height: 1.5em;
  width: 1.5em;
  overflow: hidden;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  position: relative;
`;
const Input = styled.input`
position: absolute;
height: 4em;
width: 4em;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
overflow: hidden;
border: none;
margin: 0;
padding: 0;
`

export default function ColorPicker({ register, nameColor }) {
  const uniqueId = uuidv4();
  return (
    <StyledColorInputWrapper>
      <Input
        type="color"
        id={uniqueId}
        {...register(nameColor)}
      />
    </StyledColorInputWrapper>

  );
}
