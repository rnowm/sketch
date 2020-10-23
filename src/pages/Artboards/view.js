import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../../components/Thumbnail';
import { MainWrapper, Content } from '../../components/Layout';
import { Header } from '../../components/Header';
import { Column, Grid } from '../../components/Layout';
import { Spinner } from '../../components/Spinner';

const View = ({ loading, allArtboards }) => (
  <Fragment>
    <MainWrapper>
      <Header logo titleLeft="Artboards" />
      <Content>
        {loading ? (
          <Column middle fit>
            <Spinner />
          </Column>
        ) : (
          <Column>
            <Grid>
              {allArtboards?.map((artboard, index) => (
                <Thumbnail key={index} {...{ index, artboard }} />
              ))}
            </Grid>
          </Column>
        )}
      </Content>
    </MainWrapper>
  </Fragment>
);

export default View;

View.propTypes = {
  loading: PropTypes.bool,
  allArtboards: PropTypes.array,
};
