import styled from 'styled-components';

const UserInfoStyles = styled.div`
  .content {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
  }

  .avatar {
    width: 15%;
    height: 15%;
    border-radius: 50%;
    margin-right: 0.8rem;
  }

  .styled-avatar {
    width: 5%;
    height: 5%;
    border-radius: 50%;
    margin-right: 0.8rem;
  }

  .name {
    color: black;
    font-size: 1rem;
  }

  .username {
    color: black;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export default UserInfoStyles;
