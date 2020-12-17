import React from 'react';

import styles from './styles.module.scss';

const Input = (props) => (
  <input 
    className={styles.input}
    type="text" 
    placeholder="Enter a username..."
    value={props.value} 
    onChange={(e) => {
      props.setLoading(true);
      props.setSearchValue(e.target.value);
      props.debouncedSearch(e.target.value);
    }}
  />
)
  
export default Input;