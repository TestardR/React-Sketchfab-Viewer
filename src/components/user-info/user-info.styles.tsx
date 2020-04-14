import styled, { css } from 'styled-components';

const baseAvatarStyles = css`
  border-radius: 50%;
  margin-right: 0.8rem;
`;

const UserInfoStyles = styled.div`
  .content {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
  }

  .avatar {
    ${baseAvatarStyles}
    width: 15%;
    height: 15%;
  }

  .small-avatar {
    ${baseAvatarStyles}
    width: 40px;
    height: 40px;
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
