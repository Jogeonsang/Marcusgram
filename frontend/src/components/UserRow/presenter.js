import React from "react";
import styles from "./styles.scss";

const UserRow = props => (
  <div className={styles.container}>
    <div className={styles.column}>
      <img
        src={props.user.profile_image || require("images/noPhoto.png")}
        alt={props.user.username}
        className={props.big ? styles.bigAvatar : styles.avatar}
      />
      <div className={styles.user}>
        <span className={styles.username}>{props.user.username}</span>
        <span className={styles.name}>{props.user.name}</span>
      </div>
    </div>
    <span className={styles.column}>
      <button className={styles.button} onClick={props.handleClick}>
        {props.user.following ? "Unfollow" : "Follow"}
      </button>
    </span>
  </div>
);

export default UserRow;