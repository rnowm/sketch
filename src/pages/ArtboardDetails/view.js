import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '../../components/Image';
import { Spinner } from '../../components/Spinner';
import { Header, Controls } from '../../components/Header';
import { MainWrapper, Content, Column } from '../../components/Layout';

const View = ({
  index,
  loading,
  currentArtboard,
  totalArtboards,
  updateArtboard,
}) => (
  <MainWrapper>
    <Header title={currentArtboard.name || 'Artboard'} marginRight="200">
      {totalArtboards !== 0 && (
        <Controls
          current={index}
          max={totalArtboards}
          onClose="/"
          indexOnChange={updateArtboard}
        ></Controls>
      )}
    </Header>
    <Content>
      {loading ? (
        <Column middle fit>
          <Spinner />
        </Column>
      ) : (
        <Column middle fit marginTop="24">
          {currentArtboard.name && (
            <Image
              large
              alt={currentArtboard.name}
              src={currentArtboard.files[0].url}
            />
          )}
        </Column>
      )}
    </Content>
  </MainWrapper>
);

export default View;

View.propTypes = {
  index: PropTypes.number,
  currentArtboard: PropTypes.object,
  totalArtboards: PropTypes.string,
  updateArtboard: PropTypes.func,
};
