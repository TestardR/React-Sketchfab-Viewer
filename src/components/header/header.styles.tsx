import styled from 'styled-components';

const HeaderStyles = styled.div`
  .header {
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 10px 10px 10px 10px;
    @media screen and (min-width: 600px) {
      padding: 15px 15px 15px 15px;
    }
  }

  .link {
    text-decoration: none;
  }

  .image {
    width: 30px;
    padding-right: 0.5rem;
    @media screen and (min-width: 600px) {
      width: 50px;
    }
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #1aaad9;
    @media screen and (min-width: 600px) {
      font-size: 1.8rem;
    }
  }
`;

export default HeaderStyles;
