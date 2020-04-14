import styled, { css } from 'styled-components';

const baseModelInfoStyles = css`
  display: flex;
  align-items: center;
`;

const ModelItemInfoStyles = styled.div`
  .info {
    padding: 0.5rem 1rem;
    justify-content: space-between;
    ${baseModelInfoStyles}
  }

  .styled-info {
    padding: 0rem 1rem 5rem;
    justify-content: space-between;
    ${baseModelInfoStyles}
  }

  .group {
    display: flex;
    color: lightgray;
  }

  .item {
    display: flex;
    padding-right: 10px;
  }
`;

export default ModelItemInfoStyles;
