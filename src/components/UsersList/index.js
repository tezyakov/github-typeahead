import React from 'react';

import UsersListRow from '../UsersListRow'

import styles from './styles.module.scss';

const UsersList = (props) => (
  <div className={styles.usersList}>
    {props.users && props.users.map(user => 
      <UsersListRow 
        key={user.id} 
        login={user.login}
        avatar={user.avatar_url}
        url={user.html_url}
      />
    )}
    <div className={styles.message}>
      {!props.data && !props.error && 'Loading...'}
      {props.error && props.users && !props.users.length && 'Oops, looks like an error happened'}
      {props.data && props.users && !props.users.length && 'No data :('}
    </div>
  </div>
)

export default UsersList;