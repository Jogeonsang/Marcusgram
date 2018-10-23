import React from 'react';
import styles from './styles.scss';

const TimeStamp = props => (
    <span className={styles.time}>{props.time}</span>
)

export default TimeStamp;