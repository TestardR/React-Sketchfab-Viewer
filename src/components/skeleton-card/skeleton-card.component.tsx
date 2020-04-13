import React from 'react';
import SkeletonCardStyles from './skeleton-card.styles';

const SketelonCard = () => {
  return (
    <SkeletonCardStyles>
      <div className="card">
        <div className="image"></div>

        <div className="content">
          <div className="avatar"></div>
          <div>
            <div className="name">Name</div>
            <div className="username">Username</div>
          </div>
        </div>

        <div className="info">
          <div className="group">
            <div className="item">Comment</div>
            <div className="item">View</div>
          </div>
          <div className="thumb"></div>
        </div>

      </div>
    </SkeletonCardStyles>
  );
};

export default SketelonCard;
