import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react';
import { GET_ARTBOARDS } from '../graphql/data';
import Thumbnail from '../components/Thumbnail';
import { MainWrapper, Content } from '../components/Layout';
import { Header } from '../components/Header';
import { Column, Grid } from '../components/Layout';
import { Spinner } from '../components/Spinner';

const Artboards = () => {
  const { loading, data } = useQuery(GET_ARTBOARDS);
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
                    <Thumbnail key={index} {...{ index, artboard }} />
                  ),
                )}
              </Grid>
            </Column>
          )}
        </Content>
      </MainWrapper>
    </Fragment>
  );
};

export default Artboards;
