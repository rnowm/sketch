import { useQuery } from '@apollo/client';
import { GET_ARTBOARDS } from '../../graphql/data';
import View from './view';

const Artboards = () => {
  const { loading, data } = useQuery(GET_ARTBOARDS);

  return View({
    loading,
    allArtboards: data?.share?.version?.document?.artboards?.entries || [],
  });
};

export default Artboards;
