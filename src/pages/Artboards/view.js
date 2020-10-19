import React, { Fragment } from 'react';
import Thumbnail from '../../components/Thumbnail';
import { MainWrapper, Content } from '../../components/Layout';
import { Header } from '../../components/Header';
import { Column, Grid } from '../../components/Layout';
import { Spinner } from '../../components/Spinner';
import ArtboardDetails from '../ArtboardDetails';

const View = ({
  loading,
  data,
  showDetails,
  currentArtboard,
  artBoardOnClick,
  artBoardOnClose,
  indexOnChange,
}) => (
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
              {data?.share?.version?.document?.artboards?.entries?.map(
                (artboard, index) => (
                  <Thumbnail
                    key={index}
                    {...{ index, artboard, artBoardOnClick }}
                  />
                ),
              )}
            </Grid>
          </Column>
        )}
      </Content>
    </MainWrapper>
    {showDetails && (
      <ArtboardDetails
        hide={artBoardOnClose}
        artboard={currentArtboard}
        totalArtboards={
          data?.share?.version?.document?.artboards?.entries?.length || 0
        }
        indexOnChange={indexOnChange}
      />
    )}
  </Fragment>
);

export default View;
