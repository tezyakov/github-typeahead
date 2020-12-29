import React from 'react';

import Input from '../../components/Input/Input';
import UsersList from '../../components/UsersList/UsersList';
import Layout from '../../components/Layout/Layout'
import { debounce } from '../../utils';

const Typeahead = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [data, setData] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const usersEndpoint = `https://api.github.com/search/users?q=`;

  const debouncedSearch = React.useRef(
    debounce(async (searchValue) => {
      setError(false);
      const response = await fetch(`${usersEndpoint}${searchValue}`);

      if (response.status >= 400 && response.status <= 499) {
        setError(true);
      }
      const result = await response.json();
      setData(result)
      setLoading(false);
    }, 500)
  ).current;

  let users = [];
  if (data) { users = data.items };

  return (
    <Layout>
      <Input 
        setSearchValue={setSearchValue}
        setLoading={setLoading}
        debouncedSearch={debouncedSearch}
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
    </Layout>
  );
}

export default Typeahead;
