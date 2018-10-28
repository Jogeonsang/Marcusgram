import React from "react";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserRow from 'components/UserRow';

const Explore = props => {
  if (props.loading) {
    return <LoadingExplore />;
  } else if (props.userList) {
      return <RenderExplore {...props} />
  }
};

const LoadingExplore = props => (
  <div className={styles.explore}>
    <Loading />
  </div>
);

const RenderExplore = props => (
    <div className={styles.explore}>
        {props.userList.map(user => (
        <UserRow big={true} user={user} key={user.id} />
        ))}
    </div>
)

export default Explore;