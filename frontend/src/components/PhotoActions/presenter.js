import React from 'react';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const PhotoActions = props => (
    <div className={styles.actions}>
        <div className={styles.icons}>
            <span className={styles.icon} onClick={props.handleHeartClick}>
               {props.isLiked ? (
                 <Ionicon icon='ios-heart' fontSize='28px' color='#eb4859' />
               ) : (
                 <Ionicon icon='ios-heart-outline' fontSize='28px' color='black' />
               )}
            </span>
            <span className={styles.icon}>
                <Ionicon icon='ios-text-outline' fontSize='28px' color='black' />
            </span>
        </div>
        <span className={styles.likes} onClick={props.openLikes}>
          {props.number} {" "}
          {props.number === 1 ? ('like') : ('likes')}
         </span>
    </div>
);

export default PhotoActions;