import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table `
 margin: 0 auto; 
 margin-top: 40px; 
 width: 400px;

 tr:nth-child(odd) {
  background-color: #FDD9B5;
 }

 tr:nth-child(even){
   background-color: #C5D0E6;
 }

 th {
   background-color: lightgrey;;
 }

 td{
  padding: 5px 0;
  text-align: center;
 }
`