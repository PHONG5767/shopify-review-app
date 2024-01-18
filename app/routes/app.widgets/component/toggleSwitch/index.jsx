import { useState } from 'react';
import styled, { css } from 'styled-components';

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;

  ${props => props.checked && css`
    ${Slider} {
        background-color: #2c6ecb;
    }

    ${SliderRound} {
        transform: translateX(16px);
    }
  `}
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
`;

const SliderRound = styled.span`
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  transform: translateX(0);
`;

const ToggleSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(v => !v);
    };

    return (
        <SwitchLabel checked={checked}>
            <SwitchInput type="checkbox" onChange={handleChange} />
            <Slider />
            <SliderRound />
        </SwitchLabel>
    );
};

export default ToggleSwitch;

