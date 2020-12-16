import React from 'react';

import styles from './styles.module.scss';

const UsersListRow = (props) => (
  <div key={props.login} className={styles.usersListRowContainer}>
    <div className={styles.usersListRowItem} onClick={() => window.open(props.url, "_blank")}>
      <img src={props.avatar} alt="no pic" style={{ maxHeight: '36px', maxWidth: '36px' }} />
      {props.login}
    </div>
  </div>
)

export default UsersListRow;