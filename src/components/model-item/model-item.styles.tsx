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

  .data {
    padding: 10px;
    display: flex;
  }
`;

export default ModelItemStyles;
