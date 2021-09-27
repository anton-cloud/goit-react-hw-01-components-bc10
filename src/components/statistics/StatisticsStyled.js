import styled from 'styled-components';

export const StatisticsStyled =styled.section `

  border-radius: 10px;
  width: 250px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  background-color: #FDD9B5;

  .title {
    margin: 0px;
    padding: 20px 0px;
  }

  .statList{
    border-top: 1px solid black;
    list-style: none;
    display: flex;
    height: 60px;
    background-color: #C5D0E6;
    padding: 0;
    margin: 0;

  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 20%;

    &:not(:last-child) {
    border-right: 1px solid black;
  }
  }


` 