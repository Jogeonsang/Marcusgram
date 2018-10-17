import React from "react";
import styles from "./styles.scss";
import { LoginForm, SignupForm } from 'components/AuthForms';

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/auth_phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={styles.column}>
    <div className={`${styles.whiteBox} ${styles.formBox}`}>
        {props.action === 'login' && <LoginForm />}
        {props.action === 'signup' && <SignupForm />}
    </div>
      <div className={styles.whiteBox}>
      {props.action === 'login' && (<p>
                  계정이 없으신가요? {" "}
                  <span
                    className={styles.changeLink}
                    onClick={props.changeAction}
                  >
                    가입하기
                  </span>
                </p>)}
        {props.action === 'signup' && (<p>
                  계정이 있으신가요? {" "}
                  <span
                    className={styles.changeLink}
                    onClick={props.changeAction}
                  >
                    로그인
                  </span>
                </p>)}
      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
        <div className={styles.appstores}>
          <img
            src={require("images/appstore.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/playstore.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);
export default Auth;