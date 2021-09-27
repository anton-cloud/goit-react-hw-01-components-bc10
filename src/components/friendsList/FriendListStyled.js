import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  margin-top: 50px;

.item {
  width: 250px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0;
  border: 2px solid  #FDD9B5;
  border-radius: 10px;
  align-items: center;
  display: flex;
}

.status {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px
}

.status_active {
  background-color: green;
}

.status_noActive {
  background-color: red;
}

.avatar {
  height: 48px;
  margin: 0 5px
}

.name {
  font-weight: 500;
  margin: 0 5px 
}
`