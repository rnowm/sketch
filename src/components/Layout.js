import styled from 'styled-components';
import { Color, getTxtColorByBkg, device } from '../utils/variables';

const defaultPadding = 20;

const setPadding = (padding) =>
  padding.toString().length && padding !== true ? padding : defaultPadding;

export const Common = styled.div`
  ${(props) =>
    props.fixed &&
    `
    position: fixed;
`};
  display: inline-flex;
  color: ${(props) =>
    props.color ? Color(props.color) : getTxtColorByBkg(props.bkg, props.fade)};
  ${(props) =>
    props.bkg && `background-color: ${Color(props.bkg, props.fade)}`};
  ${(props) =>
    props.border &&
    `border: ${props.borderSize || 1}px solid ${Color(
      props.border,
      props.borderFade ? props.borderFade : props.fade ? props.fade : 'default',
    )}`};
  ${(props) => props.radius && `border-radius: ${props.radius}px;`};
  ${(props) => props.paddingAll && `padding:${setPadding(props.paddingAll)}px`}
  ${(props) =>
    props.paddingTop && `padding-top:${setPadding(props.paddingTop)}px`};
  ${(props) =>
    props.paddingLeft && `padding-left:${setPadding(props.paddingLeft)}px`};
  ${(props) =>
    props.paddingRight && `padding-right:${setPadding(props.paddingRight)}px`};
  ${(props) =>
    props.paddingBottom &&
    `padding-bottom:${setPadding(props.paddingBottom)}px`};
  ${(props) =>
    props.paddingX &&
    `padding-left:${setPadding(props.paddingX)}px; 
    padding-right:${setPadding(props.paddingX)}px;`};
  ${(props) =>
    props.paddingY &&
    `padding-top:${setPadding(props.paddingY)}px; 
    padding-bottom:${setPadding(props.paddingY)}px;`};
  ${(props) => props.marginAll && `margin:${setPadding(props.marginAll)}px`};
  ${(props) =>
    props.marginTop && `margin-top:${setPadding(props.marginTop)}px`};
  ${(props) =>
    props.marginLeft && `margin-left:${setPadding(props.marginLeft)}px`};
  ${(props) =>
    props.marginRight && `margin-right:${setPadding(props.marginRight)}px`};
  ${(props) =>
    props.marginBottom && `margin-bottom:${setPadding(props.marginBottom)}px`};
  ${(props) =>
    props.marginX &&
    `margin-left:${setPadding(props.marginX)}px; margin-right:${setPadding(
      props.marginX,
    )}px;`};
  ${(props) =>
    props.marginY &&
    `margin-top:${setPadding(props.marginY)}px; margin-bottom:${setPadding(
      props.marginY,
    )}px;`};
  ${(props) => props.flex && `flex: ${props.flex};`};
  ${(props) => props.multiline && `flex-wrap: wrap`};

  ${(props) =>
    props.hide &&
    `
    @media ${device[props.hide]} {
      display: none;
    }
  `};

  ${(props) =>
    props.show &&
    `
    display: none;
    @media ${device[props.show]} {
      display: flex;
    }
  `};

  ${(props) =>
    props.bkgImage &&
    `
    background-size: cover;
    background-image: url(${props.bkgImage});
  `};

  &.hover {
    cursor: pointer;
  }
`;

export const Row = styled(Common)`
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  ${(props) => props.expand && `width: 100%`};
  ${(props) => props.fit && `flex: 1 1 auto`};
  ${(props) => props.noFlex && `flex: 0 1 auto`};
  ${(props) => props.noShrink && `flex-shrink: 0`};
  ${(props) => props.top && 'align-items: flex-start'};
  ${(props) => props.middle && 'align-items: center'};
  ${(props) => props.bottom && 'align-items: flex-end'};
  ${(props) => props.left && 'justify-content: flex-start'};
  ${(props) => props.center && 'justify-content: center'};
  ${(props) => props.right && 'justify-content: flex-end'};
  ${(props) => props.spaceBetween && 'justify-content: space-between'};
  ${(props) =>
    props.truncate &&
    `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `};
`;

export const Column = styled(Common)`
  flex-direction: column;
  ${(props) => props.fit && 'flex: 1 1 auto;'};
  ${(props) => props.expand && 'min-height: 100vh'};
  ${(props) => props.top && 'justify-content: flex-start'};
  ${(props) => props.middle && 'justify-content: center'};
  ${(props) => props.bottom && 'justify-content: flex-end'};
  ${(props) => props.left && 'align-items: flex-start'};
  ${(props) => props.center && 'align-items: center'};
  ${(props) => props.right && 'align-items: flex-end'};
  ${(props) => props.stretch && 'width: 100%'};
`;

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  min-width: 320px;
`;

export const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  overflow: auto;
  background-color: ${Color('gray', 0.2)};
`;

export const FixedWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 64px;
  padding-bottom: 40px;
  margin: 0 auto;
  min-height: 100vh;
  max-width: ${device.desktop};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-gap: ${defaultPadding};

  @media ${device.mobileL} {
    grid-template-columns: 50% 50%;
  }
  @media ${device.tablet} {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
  @media ${device.laptop} {
    grid-template-columns: 25% 25% 25% 25%;
  }
  @media ${device.laptopL} {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
`;
