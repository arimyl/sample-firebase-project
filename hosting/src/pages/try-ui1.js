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
import { ChatSample } from './firestore';

const db = firebase.firestore();

export class AuthTry extends React.Component {
    render() {
        const {state, props} = this;

        if (state.user) {
            return (
            <div>
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
                    </div>
                    </main>
                    </React.Fragment>
                </div>
                <div>
                    <Button css={css`
                        margin-top: 32px;
                        background-color: grey;
                    `} onClick={this.signout}>サインアウト</Button>
                </div>
            </div>
            );
            
        } else {
            return (
                <div css={css`
                    position: relative;
                `}>
                    <div>
                        <TextField label='E-mail' type='text' name='email' onChange={e =>this.setState({email: e.target.value})} />
                        <label>　</label>
                        <TextField label='Password' type='Password' name='Password' onChange={e => this.setState({password: e.target.value})} />
                    </div>
                    <Button css={css`
                        margin-top: 32px;
                        background-color: grey;
                    `} onClick={this.signin}>サインイン</Button>
                </div>
            );
        }
    }

    state = {
        email: '',
        password: '',
        user: null,
        notice: '',
    };
    
    unsubscribe = null;

    signin = async () =>{
        const {state} = this;
        console.log("log in");
        try{
            await firebase.auth().signInWithEmailAndPassword(state.email, state.password);
        } catch (e){
            console.log(e);
            this.notice = "間違えてます。";
            console.log(this.notice);
        }
    }
    signout = async () =>{
        console.log("sign out");
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
        <Bar />
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

class Try1 extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div css={css`
                    position: static;
                    absolute;
                    top: 1000;
                    left: 30;
                `}>
                    {/* <Bar /> */}
                </div>
                <div css={css`
                    margin: 32px auto 0 auto;
                    // margin-top: 32px;
                    max-width: 800px;
                    // position: static;
                    // padding: 30px 0px 0px 30px;
                `}>
                <ChatSample />
                </div>
                
                
            </React.Fragment>
        );
    }
}

// export  class Try2 extends React.Component {

//     render () {
//         return (
//             <div>
//                 <Bar />    
//                 <div css={css`
//                 padding: 16px 8px;
//                 `}>
//                 <div css={css`
//                     display: flex;
//                 `}>
//                     <div css={css`
//                         width: 100%;
//                         margin: 0 8px;
//                     `}>
//                         <TextField fullWidth variant="outlined" label={Bar.SimpleSelect} value={this.state.textform1} onChange={this.onTextform1Change} />
//                     </div>
//                     <div css={css`
//                         width: 100%;
//                         margin: 0 8px;
//                     `}>
//                         <TextField fullWidth variant="outlined" label="textform2" value={this.state.textform2} onChange={this.onTextform2Change} />
//                     </div>     
//                 </div>
//                 <div css={css`
//                     width: 100%;
//                     text-align: right;
//                     padding: 16px 16px 0 0;
//                 `}>
//                     <Button variant="contained" color="secondary">送信</Button>
//                 </div>       
//                 </div>
//             </div>    
//         );
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             textform1: "textform1",
//             textform2: "textform2"
//         };
//     }
    
//     onTextform1Change = e => {
//         this.setState({textform1: e.target.value})
//     }
//     onTextform2Change = e => {
//         this.setState({textform2: e.target.value})
//     }

//     translate = async() => {
//         console.log(this.state.textform1);
//     }
// }
export default page(withTheme(Page));
    
    

// export default () => (<div>aaa</div>);