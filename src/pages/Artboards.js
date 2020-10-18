import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react';
import { GET_ARTBOARDS } from '../graphql/data';
import Thumbnail from '../components/Thumbnail';

const Artboards = () => {
  const { loading, data } = useQuery(GET_ARTBOARDS);

  return (
    <Fragment>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {data?.share?.version?.document?.artboards?.entries?.map(
            (artboard, index) => (
              <Thumbnail key={index} {...{ index, artboard }} />
            ),
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Artboards;
