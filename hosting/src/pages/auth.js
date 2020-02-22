import React from "react";
import { Link } from "gatsby";
import page from 'common/page';
import { css } from '@emotion/core';
import breakpoints from 'common/breakpoints';
import { withTheme } from '@material-ui/styles';

import { Router } from "@reach/router";
import firebase from 'common/firebase';
import NoSSR from 'components/NoSSR';
import { navigate } from "gatsby";
import { CircularProgress } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';

const db = firebase.firestore();

class AuthSample extends React.Component {
  render() {

    const { state, props } = this;

    if (state.user) {
    // if (null) {
      return (
        <div>
          <Button onClick={this.signout}>サインアウト</Button>
          <div>{props.children}</div>
        </div>
      );
    } else {
      return (
        <div css={css`
          position: relative;
        `}>
          <div>
            <TextField label='E-mail' type='text' name='email' onChange={e => this.setState({email: e.target.value})} />
          </div>
          <div>
            <TextField label='Password' type='password' name='password' onChange={e => this.setState({password: e.target.value})} />
          </div>
          <Button onClick={this.signin}>サインイン</Button>
        </div>
      );
    }
  }

  state = {
    email: '',
    password: '',
    user: null,
  };

  unsubscribe = null;

  signin = async () => {
    const { state } = this;
    try {
      console.log("log in");
      console.log(state.email);
      console.log(state.password);
      await firebase.auth().signInWithEmailAndPassword(state.email, state.password);
        // await db.collection("account")
        // .where("email","==",state.email)
        // .get()
        // .then(doc => {
        //   if(!doc.exists) {
        //     console.log("No such document!")
        //   }else{
        //     console.log("Document data:", doc.data());
        //     state.user = doc.data("userName");
        
        
        // .onSnapshot(querySnapshot => {
        //   const user = querySnapshot.userName;
      
      // console.log(state.user); 
      //   const unsub = db.collection("account").onSnapshot(() => {});
      // unsub();
        
    } catch (e) {
      console.log(e);
    }
  }

  signout = async () => {
    try {
      console.log("sign out");
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
      // pass
    }
  }

  async componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  async componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}


const Page = ({ theme }) => {

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <div css={css`
          margin: 0 auto;
          max-width: ${breakpoints.lg.maxWidth};
        `}>
          <div css={css`
            padding: 32px;
          `}>
            <AuthSample><h1>サインイン済みの画面</h1></AuthSample>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
