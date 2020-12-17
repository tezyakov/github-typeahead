import React from 'react';

import Input from '../../components/Input';
import UsersList from '../../components/UsersList';

import styles from './styles.module.scss';

const Typeahead = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [data, setData] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const usersEndpoint = `https://api.github.com/search/users?q=${searchValue}`;

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(false);

      const response = await fetch(usersEndpoint);
  
      if (response.status >= 400 && response.status <= 499) {
        setError(true);
      }

      const result = await response.json();

      setData(result)
      setLoading(false);
    };
    getData();
  }, [usersEndpoint])

  const changeSearchValue = (value) => setSearchValue(value);

  let users = [];
  if (data) { users = data.items };

  return (
    <div className={styles.typeahead}>
      <Input 
        changeSearchValue={changeSearchValue} 
        value={searchValue}
      />
      {!!searchValue.length && (
        <UsersList
          users={users}
          data={data}
          error={error} 
          loading={loading}
        />
      )}
    </div>
  );
}

export default Typeahead;
