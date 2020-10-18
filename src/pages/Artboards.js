import { useQuery } from '@apollo/client';
import React, { Fragment, useState } from 'react';
import { GET_ARTBOARDS } from '../graphql/data';
import Thumbnail from '../components/Thumbnail';
import { MainWrapper, Content } from '../components/Layout';
import { Header } from '../components/Header';
import { Column, Grid } from '../components/Layout';
import { Spinner } from '../components/Spinner';
import ArtboardDetails from './ArtboardDetails';

const Artboards = () => {
  const { loading, data } = useQuery(GET_ARTBOARDS);
  const [showDetails, toggleDetails] = useState(false);
  const [currentArtboard, setCurrentArtboard] = useState({});

  const artBoardOnClick = (data, index) => {
    setCurrentArtboard({ data, index });
    toggleDetails(true);
  };

  const artBoardOnClose = () => {
    toggleDetails(false);
  };

  const indexOnChange = (index) => {
    setCurrentArtboard({
      data: data.share.version.document.artboards.entries[index - 1],
      index: index - 1,
    });
  };

  return (
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
};

export default Artboards;
