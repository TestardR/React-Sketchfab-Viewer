import styled, { css } from 'styled-components';

const baseIconStyles = css`
  width: 35px;
  fill: none;
  stroke-width: 20px;
`;

const ThumbIconStyles = styled.div`
  .icon {
    ${baseIconStyles}
    stroke: #1aaad9;
  }

  .viewer-icon {
    ${baseIconStyles}
    stroke: #FDBF02;
  }

  .checked {
    fill: #1aaad9;
    stroke: #fff;
    stroke-width: 1px;
  }

  .viewer-checked {
    fill: #fdbf02;
    stroke: #fff;
    stroke-width: 1px;
  }
`;

export default ThumbIconStyles;
