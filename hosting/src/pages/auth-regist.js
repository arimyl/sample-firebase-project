import React from "react";
import page from 'common/page';
import { css } from '@emotion/core';
import breakpoints from 'common/breakpoints';
import { withTheme } from '@material-ui/styles';
import firebase from 'common/firebase';
import { TextField, Button } from '@material-ui/core';




class AuthRegist extends React.Component {
  
  render() {
    
    const { state, props } = this;
  
  const registUser = firebase.auth().createUserWithEmailAndPassword(state.email, state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
  });
    // if (state.user) {
    // if (null) {
    //   return (
    //     <div>
    //       <Button onClick={this.signout}>サインアウト</Button>
    //       <div>{props.children}</div>
    //     </div>
    //   );
    // } else {
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
          <Button css={css`
            background-color: blue; 
            round:20%; 
            color: white;
          `} onClick={this.registUser}>新規登録</Button>
          {/* <Button onClick={this.signin}>サインイン</Button> */}
        </div>
      );
    // }
  }

  state = {
    email: '',
    password: '',
    user: null,
  };

  unsubscribe = null;

  // signin = async () => {
  //   const { state } = this;
  //   console.log(emali,password,state.emali,state.password, state.user);
  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(state.email, state.password)

  //   } catch (e) {
  //     console.log(e);
  //     // email: ary pass: abcde
  //   }
  // }

  // signout = async () => {
  //   console.log(user);
  //   try {
  //     console.log("sign out");
  //     await firebase.auth().signOut();
  //   } catch (e) {
  //     console.log(e);
  //     user=null;
  //     // pass
  //   }
  // }

  // async componentDidMount() {
  //   this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   });
  // }

  // async componentWillUnmount() {
  //   if (this.unsubscribe) {
  //     this.unsubscribe();
  //   }
  // }
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
            <AuthRegist><h1>サインイン済みの画面</h1></AuthRegist>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
