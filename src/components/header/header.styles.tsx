import styled from 'styled-components';

const HeaderStyles = styled.div`
  .header {
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 15px 15px 15px;
  }

  .image {
    width: 50px;
    padding-right: 0.8rem;
  }

  .title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #1aaad9;
  }
`;

export default HeaderStyles;
