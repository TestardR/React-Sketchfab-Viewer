import React, { Fragment, memo } from 'react';
import _ from 'lodash';

import SketelonCard from './skeleton-card.component';

interface IProps {
  n: number;
}

const SkeletonCardContainer: React.FC<IProps> = memo(({ n }) => {
  return (
    <Fragment>
      {_.times(n, (i) => (
        <SketelonCard key={i} />
      ))}
      <SketelonCard />
    </Fragment>
  );
});

export default SkeletonCardContainer;
