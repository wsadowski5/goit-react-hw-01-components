import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../components/Statistics/data.json';

import { Friendlist } from './Friends/FriendsList.jsx';
import friends from '../components/Friends/friends.json';

import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from '../components/Transactions/transactions.json'

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <Friendlist friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};


