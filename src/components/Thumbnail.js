import React from 'react';
import { Column, Row } from './Layout';
import { Label } from './Typography';
import { Image } from './Image';

const Thumbnail = ({ index, artboard, artBoardOnClick }) => {
  return (
    <Column center marginAll className="pointer">
      <Column fit center middle>
        <Image alt={artboard.name} src={artboard.files[0].thumbnails[0].url} />
      </Column>
      <Row marginTop>
        <Label small color="gray" fade="0.7">
          {artboard.name}
        </Label>
      </Row>
    </Column>
  );
};

export default Thumbnail;
