import React from 'react';
import useViewer from '../../hooks/useViewer';
import ModelViewerStyles from './model-viewer.styles';
import ModelItemInfo from '../model-item-info/model-item-info.component';

interface IProps {
  location: {
    state: {
      uid: string;
      commentCount: number;
      viewCount: number;
    };
  };
}

const MoldelViewer: React.FC<IProps> = ({ location }) => {
  const { state } = location;
  const { uid, commentCount, viewCount } = state;
  const { iframeRef } = useViewer(uid);

  return (
    <ModelViewerStyles>
      <div className="container">
        <div className="iframe-container">
          <iframe src="" ref={iframeRef}></iframe>
          <ModelItemInfo commentCount={commentCount} viewCount={viewCount} styles={true} />
        </div>
      </div>
    </ModelViewerStyles>
  );
};

export default MoldelViewer;
