import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SketchIcon from '../assets/images/sketch-logo.svg';
import CloseIcon from '../assets/images/close.svg';
import PrevIcon from '../assets/images/arrow-left.svg';
import NextIcon from '../assets/images/arrow-right.svg';
import SeparatorIcon from '../assets/images/separator.svg';

import { Label } from './Typography';
import { Button } from './Button';
import { Row } from './Layout';

const HeaderWrapper = styled.header`
  width: 100%;
  top: 0px;
  z-index: 60;
  position: fixed;
  background: red;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  height: 64px;
  width: 100%;
  padding: 0px 8px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const Separator = styled.span`
  display: flex;
  align-self: center;
  height: 4rem;
  width: 1px;
  margin: 0px 4px;
  background-image: url(${SeparatorIcon});
`;

export const Header = ({ children, logo, titleLeft, title, marginRight }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Row middle>
        {logo && (
          <Row middle>
            <a href="https://www.sketch.com">
              <Button icon={SketchIcon} alt="Sketch logo" />
            </a>
            <Separator />
          </Row>
        )}
        {children}
        {titleLeft && (
          <Row paddingLeft="10">
            <Label semibold>{titleLeft}</Label>
          </Row>
        )}
      </Row>
      {title && (
        <Row paddingX="10" truncate>
          <Label semibold truncate>
            {title}
          </Label>
        </Row>
      )}
      {marginRight && <Row marginRight={marginRight} show="mobileXL" />}
    </HeaderContainer>
  </HeaderWrapper>
);

export const Controls = ({ current, max, onClose, indexOnChange }) => {
  const _onPrevious = () => {
    if (current > 1) {
      indexOnChange(current - 1);
    }
  };

  const _onNext = () => {
    if (current < max) {
      indexOnChange(current + 1);
    }
  };

  return (
    <Row middle style={{ width: '200px' }}>
      <Button icon={CloseIcon} alt="close" onClick={() => onClose()} />
      <Separator />
      {current === 1 ? (
        <Row paddingRight="48" />
      ) : (
        <Button icon={PrevIcon} alt="previous" onClick={() => _onPrevious()} />
      )}
      <Label small color="gray" fade="0.6">
        {current} / {max}
      </Label>
      {current === max ? (
        <Row paddingRight="48" />
      ) : (
        <Button icon={NextIcon} alt="next" onClick={() => _onNext()} />
      )}
    </Row>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.bool,
  titleLeft: PropTypes.string,
  title: PropTypes.string,
  marginRight: PropTypes.string,
};

Controls.propTypes = {
  current: PropTypes.number,
  max: PropTypes.number,
  onClose: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
};
