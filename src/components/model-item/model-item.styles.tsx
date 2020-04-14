import styled from 'styled-components';

const ModelItemStyles = styled.div`
  .card {
    width: 250px;
    height: 83%;
    @media screen and (min-width: 768px) {
      width: 280px;
      height: 85%;
    }
    margin: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    overflow: hidden;
    padding-bottom: 1rem;
    border-bottom: 4px solid #1AAAD9;
  }

  .group {
    position: relative;
  }

  .group .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease-in;
    background-color: #1aaad9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay:hover {
    opacity: 0.3;
  }

  .link {
    width: 100%;
    text-decoration: none;
  }

  .image {
    width: 100%;
    height: 140px;
  }

  .logo {
    height: 50%;
  }
`;

export default ModelItemStyles;
