import React from 'react';

import { debounce } from '../../utils';

const useTypeahead = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const usersEndpoint = `https://api.github.com/search/users?q=`;

  const debouncedSearch = React.useRef(
    debounce(async (searchValue) => {
      setError(false);

      if (searchValue) {
        const response = await fetch(`${usersEndpoint}${searchValue}`);

        if (response.status >= 400 && response.status <= 499) {
          setError(true);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      }
    }, 500)
  ).current;

  return {
    data,
    error,
    loading,
    setLoading,
    searchValue,
    setSearchValue,
    debouncedSearch,
  };
};

export default useTypeahead;
