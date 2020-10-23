import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ARTBOARDS } from '../../graphql/data';

import View from './view';

const ArtboardDetails = () => {
  const { loading, data } = useQuery(GET_ARTBOARDS);
  let { index } = useParams();
  index = parseInt(index);

  const [currentArtboard, setCurrentArtboard] = useState({});
  const [totalArtboards, setTotalArtboards] = useState(0);
  const [newIndex, setNewIndex] = useState(index);

  useEffect(() => {
    updateArtboard(index);
  }, [data]);

  const updateArtboard = (i) => {
    const allArtboards = data?.share?.version?.document?.artboards?.entries;
    if (allArtboards && i) {
      setCurrentArtboard(allArtboards[i - 1]);
      setTotalArtboards(allArtboards.length);
      setNewIndex(i);
    }
  };

  return View({
    loading,
    index: newIndex,
    currentArtboard,
    totalArtboards,
    updateArtboard,
  });
};

export default ArtboardDetails;
