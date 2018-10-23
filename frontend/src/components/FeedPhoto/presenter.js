import React from 'react';
import styles from './styles.scss';
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';

const FeedPhoto = props => {
    return (
    <div className={styles.feedPhoto}>
      <header className={styles.header}>
          <img
            src={props.creator.profile_image || require("images/noPhoto.png")}
            alt={props.creator.username}
            className={styles.image}
          />
          <div className={styles.headerColumn}> 
              <span className={styles.creator}>{props.creator.username}</span>
              <span className={styles.location}>{props.location}</span>
          </div>
      </header>
      <img src={props.file} alt={props.location} />
      <div className={styles.meta}>
          <PhotoActions number={props.like_count}/>
          <PhotoComments 
            caption={props.caption}
            creator={props.creator.username}
            comments={props.id}
          />
          <TimeStamp time={props.natural_time} />
          <CommentBox />
      </div>
    </div>
    );
};

export default FeedPhoto;