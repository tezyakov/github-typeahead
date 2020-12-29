import React from 'react';

import UsersListRow from '../UsersListRow/UsersListRow'

import styles from './styles.module.scss';

const UsersList = (props) => {
  const { data, error, loading } = props;
  const { items } = data;

  return (
    <div className={styles.usersList}>
      {items && !loading && items.map(user => 
        <UsersListRow 
          key={user.id} 
          login={user.login}
          avatar={user.avatar_url}
          url={user.html_url}
        />
      )}
      <div className={styles.message}>
        {loading && !error && 'Loading...'}
        {error && 'Oops, looks like an error happened'}
        {data && items && !items.length && !error && !loading && 'No data :('}
      </div>
    </div>
  )
}

export default UsersList;