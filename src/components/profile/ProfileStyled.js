import styled from 'styled-components';

export const ProfileStyled = styled.div`

background-color: #FDD9B5;
border-radius: 10px;
width: 250px;
margin: 0 auto;

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

.avatar {
  padding: 10px;
  border-radius: 50%;
  width: 100px;
  background-color: white;
}

.name {
  font-weight: 700;
}

.tag, .location, .label  {
  font-weight: 500;
  color: grey;
}

.stats {
  border-top: 1px solid black;
  display: flex;
  list-style: none;
  height: 50px;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  background-color: #C5D0E6;


}

.stats li {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  flex-basis: 30%;

  &:not(:last-child) {
  border-right: 1px solid black;
}
}
`