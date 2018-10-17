import React from 'react';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

export const LoginForm = props => (
    <div>
        <form>
            <input type='text' placeholder='전화번호, 사용자 이름 또는 이메일' />
            <input type='password' placeholder='비밀번호' />
            <input type='submit' value='로그인' />
        </form>
        <span>또는</span>
        <span>
            <Ionicon icon='logo-facebook' fontSize='20px' color='#385185' />
            Facebook으로 로그인
        </span>
        <span>비밀번호를 잊으셨나요?</span>
    </div>
)

export const SignupForm = props => (
    <div>
        <h3>Sign up to see photos and videos from your friends.</h3>
        <button>
            <Ionicon icon='logo-facebook' fontSize='20px' color='white' />
            with facebbok
        </button>
        <span>또는</span>
        <form>
            <input type='email' placeholder="휴다폰 번호 또는 이메일 주소" />
            <input type='text' placeholder='성명' />
            <input type='text' placeholder='사용자 이름' />
            <input type='password' placeholder='비밀번호' />
            <input type='submit' value='가입' />
        </form>
        <p>
            가입하면 MarcusGram의 <span>약관, 데이터정책</span> 및 <span>쿠키 정책에 동의하게 됩니다.</span>
        </p>
    </div>
)