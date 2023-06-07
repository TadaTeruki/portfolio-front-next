import React from 'react';
import styles from './searchbox.module.css';

const SearchBox = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default SearchBox;
