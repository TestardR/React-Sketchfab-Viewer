import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
/* import Sketchfab from '@sketchfab/viewer-api'; */

import ModelItemStyles from './model-item.styles';

interface IProps {
  result: {
    name: string;
    thumbnails: {
      images: { url: string }[];
    };
    uid: string;
  };
}

const ModelItem: React.FC<IProps> = ({ result }) => {
  const iframeRef = useRef(null);

/*   useEffect(() => {
    if (iframeRef.current) {
      const { uid } = result;
      const iframe = iframeRef.current;
      const client = new Sketchfab('1.7.1', iframe);

      client.init(uid, {
        success: function onSuccess(api: any) {
          api.start();
          api.addEventListener('viewerready', function () {
            console.log('Viewer is ready');
          });
        },
        error: function onError() {
          console.log('Viewer error');
        },
      });
    }
  }, [iframeRef]); */

  return (
    <ModelItemStyles>
      <div className="card">
        <button
          onClick={() => {
            console.log('clicked')
          }}
        >
          {result.thumbnails.images && (
            <img src={result.thumbnails.images[1].url} className="image" />
          )}
        </button>
        <div>{result.name}</div>
      </div>
    </ModelItemStyles>
  );
};

export default ModelItem;
