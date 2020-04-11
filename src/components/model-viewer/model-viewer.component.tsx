import React, { useRef, useEffect } from 'react';
import useViewer from '../../hooks/useViewer';

const MoldelViewer = ({ location }: any) => {
  const { state } = location;
  const { uid } = state;
  const { iframeRef } = useViewer(uid);

  return (
    <div>
      model viewer
      <iframe src="" ref={iframeRef}></iframe>
    </div>
  );
};

export default MoldelViewer;
