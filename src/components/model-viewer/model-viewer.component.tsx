import React from 'react';
import useViewer from '../../hooks/useViewer';
import ModelViewerStyles from './model-viewer.styles';
import ModelItemInfo from '../model-item-info/model-item-info.component';
import UserInfo from '../user-info/user-info.component';

interface IProps {
  location: {
    state: {
      name: string;
      uid: string;
      user: {
        avatar: {
          images: any[];
        };
        username: string;
      };
      commentCount: number;
      viewCount: number;
    };
  };
}

const MoldelViewer: React.FC<IProps> = ({ location }) => {
  const { state } = location;
  const {
    uid,
    name,
    commentCount,
    viewCount,
    user: { avatar, username },
  } = state;
  const { iframeRef } = useViewer(uid);

  return (
    <ModelViewerStyles>
      <div className="container">
        <div className="iframe-container">
          <iframe src="" ref={iframeRef}></iframe>
          <UserInfo
            styles={true}
            avatar={avatar}
            name={name}
            username={username}
          />
          <ModelItemInfo
            styles={true}
            commentCount={commentCount}
            viewCount={viewCount}
          />
        </div>
      </div>
    </ModelViewerStyles>
  );
};

export default MoldelViewer;
