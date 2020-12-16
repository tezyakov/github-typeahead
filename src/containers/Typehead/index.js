import React from 'react';
import useSWR from 'swr';

import Input from '../../components/Input';
import UsersList from '../../components/UsersList';

import styles from './styles.module.scss';

const Typeahead = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const changeSearchValue = (value) => setSearchValue(value);

  const usersEndpoint = `https://api.github.com/search/users?q=${searchValue}`;

  const getData = async () => {
    let response = await fetch(usersEndpoint);

    if (response.status >= 400 && response.status <= 499) {
      throw new Error('Error', await response.json());
    }

    return await response.json();
  };

  let users = [];
  const { data, error } = useSWR(searchValue ? usersEndpoint : null, getData);
  if (data) { users = data.items };

  return (
    <div className={styles.app}>
      <Input 
        changeSearchValue={changeSearchValue} 
        value={searchValue}
      />
      {!!searchValue.length && (
        <UsersList
          users={users}
          data={data}
          error={error}
        />
      )}
    </div>
  );
}

export default Typeahead;
