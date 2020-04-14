import styled from 'styled-components';

const ModelsPageStyles = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 600px) {
      padding: 0px 10rem;
      align-items: flex-start;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
  }

  .title {
    padding-top: 0.5rem;
    font-size: 1.3rem;
    @media screen and (min-width: 600px) {
      padding: 1.5rem;
      font-size: 30px;
      align-items: flex-start;
    }
  }
`;

export default ModelsPageStyles;
