import React from 'react';
import ThumbTotalStyles from './thumb-total.styles';

interface RefObject<T> {
  readonly current: T;
}

interface IProps {
  countTotal: number;
  setRef: any | RefObject<HTMLSpanElement>;
}

const ThumbTotal: React.FC<IProps> = ({ countTotal, setRef }) => {
  return (
    <ThumbTotalStyles>
      <span className="total" data-refkey="countTotalRef" ref={setRef}>
        {countTotal}
      </span>
    </ThumbTotalStyles>
  );
};

export default ThumbTotal;
