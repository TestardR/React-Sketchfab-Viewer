import React from 'react';
import CommentIcon from '../comment-icon/comment-icon.component';
import ViewIcon from '../view-icon/view-icon.component';
import ThumbButton from '../thumb/thumb-button/thumb-button.component';
import ModelItemInfoStyles from './model-item-info.styles';

interface IProps {
  commentCount: number;
  viewCount: number;
  styles?: string;
}

const ModelItemInfo: React.FC<IProps> = ({
  commentCount,
  viewCount,
  styles,
}) => {
  return (
    <ModelItemInfoStyles>
        <div className="info">
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
          <ThumbButton />
        </div>
    </ModelItemInfoStyles>
  );
};

export default ModelItemInfo;
