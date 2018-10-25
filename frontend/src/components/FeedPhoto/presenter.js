import React from 'react';
import styles from './styles.scss';
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';
import UserList from 'components/UserList';

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
          <PhotoActions 
            number={props.like_count} 
            isLiked={props.is_liked} 
            photoId={props.id}
            openLikes={props.openLikes}
          />
          <PhotoComments
            caption={props.caption}
            creator={props.creator.username}
            comments={props.comments}
        />
          <TimeStamp time={props.natural_time} />
          <CommentBox photoId={props.id}/>
      </div>
      {props.seeingLikes && <UserList title={"Likes"} closeLikes={props.closeLikes} />}
    </div>
    );
};

export default FeedPhoto;