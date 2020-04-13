import styled from 'styled-components';

const SkeletonCardStyles = styled.div`
  .card {
    width: 280px;
    height: 85%;
    margin: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding-bottom: 1rem;
    border-bottom: 4px solid white;
    background-color: #d3d3d3;
  }

  .image {
    width: 100%;
    height: 140px;
    background-color: #d3d3d3;
  }

  .content {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
  }

  .avatar {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    margin-right: 0.8rem;
    background-color: white;
  }

  .name {
    background-color: white;
    color: white;
    width: 10rem;
    font-size: 1rem;
  }

  .username {
    background-color: white;
    margin-top: 0.2rem;
    width: 8rem;
    color: white;
    font-size: 0.8rem;
  }

  .info {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .group {
    display: flex;
    color: white;
    background-color: white;
  }

  .item {
    display: flex;
    width: 2rem;
    height: 0.8rem;
    padding: 10px;
  }

  .thumb {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    background-color: white;
    border-radius: 50%;
  }
`;

export default SkeletonCardStyles;
