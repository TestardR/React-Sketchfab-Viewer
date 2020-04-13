import styled from 'styled-components';

const ModelViewerStyles = styled.div`
  .container {
    margin-top: 1rem;
    padding-bottom: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .iframe-container {
    width: 80%;
    height: 150px;
    @media screen and (min-width: 768px) {
      height: 500px;
    }
    @media screen and (min-width: 1024px) {
      height: 700px;
    }
  }

  .iframe-container iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
`;

export default ModelViewerStyles;
