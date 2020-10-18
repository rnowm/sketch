import React from 'react';

import { Image } from '../components/Image';
import { Header, Controls } from '../components/Header';
import {
  FixedWrapper,
  MainWrapper,
  Content,
  Column,
} from '../components/Layout';

const ArtboardDetails = ({ hide, artboard, totalArtboards, indexOnChange }) => (
  <FixedWrapper>
    <MainWrapper>
      <Header title={artboard.data.name || 'Artboard'} marginRight="200">
        <Controls
          current={artboard.index + 1}
          max={totalArtboards}
          onClose={hide}
          indexOnChange={indexOnChange}
        ></Controls>
      </Header>
      <Content>
        <Column middle fit marginTop="24">
          {artboard.data.files[0]?.url && (
            <Image
              large
              alt={artboard.data.name}
              src={artboard.data.files[0].url}
            />
          )}
        </Column>
      </Content>
    </MainWrapper>
  </FixedWrapper>
);

export default ArtboardDetails;
