import React, { Fragment, useState } from 'react';
import _ from 'lodash';

import SketelonCard from './skeleton-card.component';

interface IProps {
  n: number;
}

const SkeletonCardContainer: React.FC<IProps> = ({ n }) => {
  return (
    <Fragment>
      {_.times(n, (i) => (
        <SketelonCard key={i} />
      ))}
      <SketelonCard />
    </Fragment>
  );
};

export default SkeletonCardContainer;
