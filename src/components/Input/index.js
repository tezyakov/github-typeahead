import React from 'react';

import styles from './styles.module.scss';

const Input = (props) => (
  <input 
    className={styles.input}
    type="text" 
    placeholder="Enter a username..."
    value={props.value} 
    onChange={(e) => props.changeSearchValue(e.target.value)} 
  />
)
  
export default Input;