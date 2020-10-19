import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_ARTBOARDS } from '../../graphql/data';
import View from './view';

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

  return View({
    loading,
    data,
    showDetails,
    currentArtboard,
    artBoardOnClick,
    artBoardOnClose,
    indexOnChange,
  });
};

export default Artboards;
