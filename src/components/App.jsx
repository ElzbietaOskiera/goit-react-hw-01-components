import { Profile } from 'components/Profile/Profile';
import user from '../files/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../files/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from '../files/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../files/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
