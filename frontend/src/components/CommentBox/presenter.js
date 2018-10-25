import React from "react";
import Textarea from 'react-textarea-autosize';
import styles from "./styles.scss";
 const CommentBox = props => (
  <form className={styles.commentBox}>
    <Textarea 
      className={styles.input}
      placeholder={("Add a comment...")}
      onChange={props.handleInputChange}
      value={props.comment}
      onKeyPress={props.handleKeyPress}
    />
  </form>
);

 export default CommentBox;