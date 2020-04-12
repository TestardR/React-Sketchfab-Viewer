import React from 'react';
import ThumbCountSyles from './thumb-count.styles';

interface RefObject<T> {
  readonly current: T;
}

interface IProps {
  count: number;
  setRef: any | RefObject<HTMLSpanElement>;
}

const ThumbCount: React.FC<IProps> = ({ count, setRef }) => {
  return (
    <ThumbCountSyles>
      <span className="count" data-refkey="countRef"  ref={setRef}>
        + {count}
      </span>
    </ThumbCountSyles>
  );
};

export default ThumbCount;
