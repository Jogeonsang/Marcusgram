import React from "react";
import styles from "./styles.scss";
import Loading from "components/Loading";

const Feed = props => {
  if (props.loading) {
    return <LoadingFeed />;
  }
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);


export default Feed;