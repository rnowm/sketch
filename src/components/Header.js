import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SketchIcon from '../assets/images/sketch-logo.svg';
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

export const Header = ({ children, logo, titleLeft }) => (
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
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.bool,
  titleLeft: PropTypes.string,
  title: PropTypes.string,
  marginRight: PropTypes.string,
};
