import styled from 'styled-components';

const ThumbButtonStyles = styled.div`
  .button {
    border: none;
    background: none;
    user-select: none;
    outline: 0;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  .button:hover {
    cursor: pointer;
  }
`;

export default ThumbButtonStyles;
