import React from 'react';
import styles from './styles.scss';

const PhotoComments = props => (
  <div className={styles.comments}>
      <ul className={styles.list}>
          <Comment username={props.creator} comment={props.caption} />
          {props.comments.map(comment => (
              <Comment
                  username={comment.creator.username}
                  comment={comment.message}
                  key={comment.id}
              />
          ))}
      </ul>
  </div>
);
  
const Comment = props => (
  <li className={styles.comment}>
    <span className={styles.username}>{props.username}</span>{" "}
    <span className={styles.message}>{props.comment}</span>
  </li>
);
  
export default PhotoComments;