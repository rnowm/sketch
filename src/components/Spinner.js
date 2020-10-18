import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Color } from '../utils/variables';

export const Spinner = (props) => (
  <SpinnerWrapper {...props}>
    <div>
      <span />
      <span />
      <span />
    </div>
  </SpinnerWrapper>
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => (props.small ? '18px' : '36px')};
  height: ${(props) => (props.small ? '18px' : '36px')};

  span {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => (props.small ? '18px' : '36px')};
    height: ${(props) => (props.small ? '18px' : '36px')};
    margin: ${(props) => (props.small ? '2px' : '4px')};
    border-radius: 50%;
    ${(props) =>
      props.color ? Color(props.color, props.fade) : Color('sketch')};
    border: ${(props) => (props.small ? '2px' : '4px')} solid;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: transparent;
    border-top-color: ${(props) =>
      props.color ? Color(props.color, props.fade) : Color('sketch')};
  }
  span:nth-child(1) {
    animation-delay: -0.45s;
  }
  span:nth-child(2) {
    animation-delay: -0.3s;
  }
  span:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
