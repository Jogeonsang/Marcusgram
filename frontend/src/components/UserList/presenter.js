import React from 'react';
import styles from './styles.scss';
import Loading from 'components/Loading';
import IonIcon from 'react-ionicons';

const UserList = props => (
    <div className={styles.container}>
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{props.title}</h4>
          <span onClick={props.closeLikes}>
            <IonIcon icon="md-close" fontSize="20px" color="black" />
          </span>
        </header>
        <div className={styles.content}>{props.loading ? <Loading /> : null}</div>
      </div>
    </div>
  );

export default UserList;