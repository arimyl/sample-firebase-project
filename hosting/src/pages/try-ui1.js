import React from "react";
import { css } from "@emotion/core";
import Bar from "./Simple-Bar";

import { Link } from "gatsby";
import page from 'common/page';
import breakpoints from 'common/breakpoints';
import { withTheme } from '@material-ui/styles';

import { Router } from "@reach/router";
import firebase from 'common/firebase';
import NoSSR from 'components/NoSSR';
import { navigate } from "gatsby";
import { CircularProgress } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';


const db = firebase.firestore();

class AuthTry extends React.Component {
    render() {
        const {state, props} = this;

        if (state.user) {
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
                        <TextField label='E-mail' type='text' name='email' onChange={e =>this.setState({email: e.target.value})} />
                        <TextField label='Password' type='Password' name='Password' onChange={e => this.setState({Password: e.target.value})} />
                    </div>
                    <Button onClick={this.signin}>サインイン</Button>
                </div>
            );
        }
    }

    state = {
        email: '',
        Password: '',
        user: null,
    };
    
    unsubscribe = null;

    signin = async () =>{
        const {state} = this;

        try{
            await firebase.auth().signInWithEmailAndPassword(state.email, state.password);
        } catch (e){
            console.log(e);
        }
    }
    signout = async () =>{
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.log(e);
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

// class App extends React.Component {
//     constructor(props) {
//         super(props) {
//             this.state = {

//             }
//         }
//     }
//     this.toggleTheme = () => {

//     }
// }


const Page = ({ theme }) => {

    return (
    <div>
        <Try1 />
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
              <AuthTry><h1>サインイン済みの画面</h1></AuthTry>
            </div>
          </div>
        </main>
      </React.Fragment>
    </div>
    );
  };

export  class Try1 extends React.Component {

    render () {
        return (
            <div>
                <Bar />    
                <div css={css`
                padding: 16px 8px;
                `}>
                <div css={css`
                    display: flex;
                `}>
                    <div css={css`
                        width: 100%;
                        margin: 0 8px;
                    `}>
                        <TextField fullWidth variant="outlined" label={Bar.SimpleSelect} value={this.state.textform1} onChange={this.onTextform1Change} />
                    </div>
                    <div css={css`
                        width: 100%;
                        margin: 0 8px;
                    `}>
                        <TextField fullWidth variant="outlined" label="textform2" value={this.state.textform2} onChange={this.onTextform2Change} />
                    </div>     
                </div>
                <div css={css`
                    width: 100%;
                    text-align: right;
                    padding: 16px 16px 0 0;
                `}>
                    <Button variant="contained" color="secondary">送信</Button>
                </div>       
                </div>
            </div>    
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            textform1: "textform1",
            textform2: "textform2"
        };
    }
    
    onTextform1Change = e => {
        this.setState({textform1: e.target.value})
    }
    onTextform2Change = e => {
        this.setState({textform2: e.target.value})
    }

    translate = async() => {
        console.log(this.state.textform1);
    }
}
export default page(withTheme(Page));
    
    

// export default () => (<div>aaa</div>);