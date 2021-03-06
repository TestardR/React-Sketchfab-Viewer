import React from 'react';
import CommentIcon from '../icons/comment-icon/comment-icon.component';
import ViewIcon from '../icons/view-icon/view-icon.component';
import ThumbButton from '../thumb/thumb-button/thumb-button.component';
import ModelItemInfoStyles from './model-item-info.styles';

interface IProps {
  commentCount: number;
  viewCount: number;
  styles?: boolean;
}

const ModelItemInfo: React.FC<IProps> = ({
  commentCount,
  viewCount,
  styles,
}) => {
  return (
    <ModelItemInfoStyles>
        <div className={styles ? 'styled-info' : 'info'}>
          <div className="group">
            <div className="item">
              <CommentIcon />
              {commentCount}
            </div>
            <div className="item">
              <ViewIcon />
              {viewCount}
            </div>
          </div>
          <ThumbButton styles={styles} />
        </div>
    </ModelItemInfoStyles>
  );
};

export default ModelItemInfo;
