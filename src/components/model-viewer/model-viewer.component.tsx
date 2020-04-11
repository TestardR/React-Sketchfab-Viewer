import React, { useRef, useEffect } from 'react';
// @ts-ignore
import Sketchfab from '@sketchfab/viewer-api';

const MoldelViewer = ({ location }: any) => {
  const { state } = location;

  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const { uid } = state;
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
  }, [iframeRef]);

  return (
    <div>
      model viewer
      <iframe src="" ref={iframeRef}></iframe>
    </div>
  );
};

export default MoldelViewer;
