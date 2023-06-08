import styles from './buttoncontainer.module.css';
import React from 'react';

const ButtonContainer = (props: { children: React.ReactNode; size: 'normal' | 'large'; color: 'default' | 'red' }) => {
    let pad = '';
    switch (props.size) {
        case 'normal':
            pad = styles.normal;
            break;
        case 'large':
            pad = styles.large;
            break;
        default:
            pad = '';
            break;
    }

    let color = '';
    switch (props.color) {
        case 'default':
            color = styles.default_color;
            break;
        case 'red':
            color = styles.red;
            break;
        default:
            color = '';
            break;
    }

    return <span className={styles.main + ' ' + pad + ' ' + color}>{props.children}</span>;
};

export default ButtonContainer;
