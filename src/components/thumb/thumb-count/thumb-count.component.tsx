import React from 'react';
import ThumbCountSyles from './thumb-count.styles';

interface RefObject<T> {
  readonly current: T;
}

interface IProps {
  count: number;
  setRef: any | RefObject<HTMLSpanElement>;
  styles?: boolean;
}

const ThumbCount: React.FC<IProps> = ({ count, setRef, styles }) => {
  return (
    <ThumbCountSyles>
      <span className={`count ${styles && 'styled'}`} data-refkey="countRef"  ref={setRef}>
        + {count}
      </span>
    </ThumbCountSyles>
  );
};

export default ThumbCount;
