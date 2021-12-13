import * as React from 'react';
import { genStyle } from './utils/common';
import { IMAGE_TO_SAVE } from './utils/constants';

const ImagesToSave = (props) => {
  const { imagesToSave } = props;
  return (
    <div className="ImagesToSave">
      {imagesToSave.map((imageToSave) => (
        <img
          className={imageToSave.active ? 'active' : ''}
          style={genStyle(imageToSave.style, IMAGE_TO_SAVE)}
          alt=""
          src={imageToSave.src}
          key={imageToSave.id}
        />
      ))}
    </div>
  );
};
export default ImagesToSave;
