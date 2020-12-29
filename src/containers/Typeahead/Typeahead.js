import React from 'react';

import useTypeahead from './UseTypeahead';
import Input from '../../components/Input/Input';
import UsersList from '../../components/UsersList/UsersList';
import Layout from '../../components/Layout/Layout'

const Typeahead = () => {
  const { 
    data,
    error,
    loading,
    setLoading,
    searchValue,
    setSearchValue,
    debouncedSearch, 
  } = useTypeahead();
  
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
          data={data}
          error={error} 
          loading={loading}
        />
      )}
    </Layout>
  );
}

export default Typeahead;
