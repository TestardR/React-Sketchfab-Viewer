import styled from 'styled-components';

const ModelItemStyles = styled.div`
  .card {
    width: 270px;
    height: 250px;
    margin: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    overflow: hidden;
  }

  .primary-group {
    position: relative;
  }

  .primary-group .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease-in;
    background-color: #1AAAD9;
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

  .content {
    display: flex;
    padding: 10px;

    .image {
      width: 10%;
      height: 10%;
      padding-right: 5px;
    }

    .name {
    }

  }

  .logo {
    height: 50%;
    /* padding-right: 0.5rem;
    @media screen and (min-width: 600px) {
      width: 50px;
    } */
  }

  .info {
    padding: 10px;
    display: flex;
  }
`;

export default ModelItemStyles;
