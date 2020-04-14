import React, { useState } from 'react';
import ThumbButtonStyles from './thumb-button.styles';
import ThumbIcon from '../thumb-icon/thumb-icon.component';
import ThumbCount from '../thumb-count/thumb-count.component';
import ThumbTotal from '../thumb-total/thumb-total.component';
import useClapAnimation from '../../../hooks/useThumbAnimation';
import useDOMRef from '../../../hooks/useDOMRef';

interface IProps {
  styles?: boolean;
}

const initialState = {
  count: 0,
  countTotal: 267,
  isClicked: false,
};

const ThumbButton: React.FC<IProps> = ({ styles }) => {
  const MAXIMUM_USER_CLAP = 20;
  const [thumbState, setThumbState] = useState(initialState);
  const { count, countTotal, isClicked } = thumbState;

  // @ts-ignore
  const [{ thumbRef, countRef, countTotalRef }, setRef] = useDOMRef();

  const animationTimeline = useClapAnimation({
    thumbEl: thumbRef,
    countEl: countRef,
    countTotalEl: countTotalRef,
  });

  const handleClapClick = () => {
    animationTimeline.replay();
    setThumbState((prevState) => ({
      isClicked: true,
      count: Math.min(count + 1, MAXIMUM_USER_CLAP),
      countTotal:
        count < MAXIMUM_USER_CLAP
          ? prevState.countTotal + 1
          : prevState.countTotal,
    }));
  };

  return (
    <ThumbButtonStyles>
      <button
        className="button"
        // @ts-ignore
        ref={setRef}
        data-refkey="thumbRef"
        onClick={handleClapClick}
      >
        <ThumbIcon isClicked={isClicked} styles={styles} />
        <ThumbCount count={count} setRef={setRef} styles={styles} />
        <ThumbTotal countTotal={countTotal} setRef={setRef} />
      </button>
    </ThumbButtonStyles>
  );
};

export default ThumbButton;
