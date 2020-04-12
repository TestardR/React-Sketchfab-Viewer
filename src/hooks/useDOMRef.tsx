import { useCallback, useState } from 'react';

interface INode {
  dataset: {
    refkey: string;
  };
}

const useDOMRef = () => {
  const [DOMRef, setRefState] = useState({});

  const setRef = useCallback((node: INode) => {
    setRefState((prevRefState) => ({
      ...prevRefState,
      [node.dataset.refkey]: node,
    }));
  }, []);

  return [DOMRef, setRef];
};

export default useDOMRef;
