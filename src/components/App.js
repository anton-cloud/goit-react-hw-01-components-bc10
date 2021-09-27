import React from "react";
import Profile from "./profile/Profile";
import data from '../data';
import Statistics from "./statistics/Statistics";
import FriendsList from "./friendsList/FriendsList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
;


const App = () => {
  return (
    <>
      <Profile  
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}/>
      <Statistics title="Upload stats" stats={data.statistical}/>
      <FriendsList friends={data.friends}/>
      <TransactionHistory items={data.transactions}/>
    </>
  );
}

export default App;