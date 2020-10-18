import React from 'react';
import { Image } from './Image';

const Thumbnail = ({ index, artboard, artBoardOnClick }) => {
  return (
    <div>
      <Image alt={artboard.name} src={artboard.files[0].thumbnails[0].url} />
      <p>{artboard.name}</p>
    </div>
  );
};

export default Thumbnail;
