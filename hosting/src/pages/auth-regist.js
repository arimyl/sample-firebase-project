import React from "react";
import page from 'common/page';
import { css } from '@emotion/core';
import breakpoints from 'common/breakpoints';
import { withTheme } from '@material-ui/styles';
import firebase from 'common/firebase';
import { TextField, Button } from '@material-ui/core';
import {Link} from "gatsby";

// const userRegist = () => {
//   const [num,setNum ] = setState(null);
//   const [userName,setUserName ] = setState("");
//   const [nicName,setNicName ] = setState("");

//   React.useEffect(() => {
//     const t = new Date();
//     const today = new Date(t.getFullYear(), t.getMonth(), t.getDate());

//     return db.collection("account")
//       // .where("from", "==", "1")
//       // .where("to", "==", "2")
//       // .orderBy("name")
//       .where("createdAt", ">=", today)
//       .orderBy("createdAt", "desc")
//       .limit(10)
//       .onSnapshot(snapshot => setMessages(snapshot.docs));
//     }, []);
  
//     const send = async () => {
//       try {
//         const { data } = await axios.get(process.env.TRANSLATE_API_ENDPOINT, {
//           params: {
//             text: message
//           }
//         });
  
//         await db.collection("messages").add({
//           from: name,
//           message,
//           translated: data.translated,
//           createdAt: new Date(),
//           // date,
//           // time,
//         });
//       } catch (e) {
//         console.log(e);
//         // pass
//       }
//     }

// }


export class AuthRegist extends React.Component {
  render() {
    
    const { state, props } = this;
  
    if (state.user) {
    // if (null) {
      return (
        <div>
          <Button onClick={this.signout}>サインアウト</Button>
          <div>{props.children}</div>
          <Button component={Link} to="/login" size="large" variant="outlined">翻訳トークへ</Button>
        </div>
      );
    } else {
    // } else if(state.user==null && state.email && state.password) {
      return (
        <div css={css`
          position: relative;
        `}>
          <div>
            <TextField label='E-mail' type='text' name='email' onChange={e => this.validationCheck(e.target.value,e.target.name,state)} />
          </div>
          <div>
            <TextField label='Password' type='password' name='password' onChange={e => this.validationCheck(e.target.value,e.target.type,state)} />
          </div>
          <Button css={css`
            margin-top: 10px;
            background-color: blue; 
            round:30%; 
            color: white;
          `} onClick={this.registUser}>新規登録</Button>
          <div css={css`
           position: relative;
           font-size: 32px;
           color: blue; 
          `}
          label='TextOutput' type='text' name='textout' onChange={e => this.setState({textout:e.target.value})}>{state.textout}</div>
        </div>
      );
    }
  }

  state = {
    email: '',
    password: '',
    user: null,
    textout: 'Welcome to Hogen-translate.',
  };

  unsubscribe = null;

  validationCheck(value,type,validationstate) {
    // const value = e.target.value;

    try{
      const check1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
      const check01 =/^\S+@\S+\.\S+$/;
      const check2 = /^\d{3}-?\d{4}$/;
      const check = /^[a-zA-Z0-9]+$/;

      if(type=='email') {
        this.setState({email: value});
        const pattern = new RegExp(check01);
        if(pattern.test(value)) {
          this.setState({textout:"This is a correct e-mail address."});
          console.log("check完了！");
          console.log(value);
          console.log(type);
  
        }else{
          this.setState({textout:"You can't use this e-mail address."});
          console.log("check失敗。");
          console.log(value);
          console.log(type);
        }
        
      }else if(type=='password') {
        this.setState({password: value});
        const pattern = new RegExp(check);
        if(pattern.test(value)) {
          if(value.length<=5){
            this.setState({textout:"You can't regist user, because password length isn't correct. It need more 6 strings."});
          }else{
  
          this.setState({textout:"You can use this password."});
          console.log("check完了！");
          console.log(value);
          console.log(type);
          }
        }else{
          this.setState({textout:"You can use alphabets and numbers."});
          console.log("check失敗。");
          console.log(value);
          console.log(type);
        }
      }

    }catch(e){
      console.log(e);
    }
  };
  
  registUser = async () => {
    const {state} = this;
    var checkNum = 0;

    try{
      state.textout="";
      if (state.user==null) {
        state.textout="";
        // if(state.email=="*"+"@example.com"){

        if(state.password.length<=5){
          this.setState({textout:"You can't regist user, because password length isn't correct. It need more 6 strings."});
        }else{
        await firebase.auth().createUserWithEmailAndPassword(state.email, state.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }
        );
        checkNum = 1;
        this.setState({textout:"regist!!"});
        console.log("regist!!");
        console.log(state.email);
        console.log(state.password);
        console.log(checkNum);
        }
      }
      if(checkNum==1){
      await firebase.auth().signInWithEmailAndPassword(state.email, state.password);
      console.log("login!!");
      }
      console.log("failed...");
      console.log(checkNum);
      console.log(state.textout);
    } catch (e) {
    console.log(e);
    }
  } 

  doCheck(e) {
    alert(event.target.value +
      "は長すぎます。（最大10文字）");
  }

  signout = async () => {
    // console.log(state.user);
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
            <AuthRegist><h1>サインイン済みの画面</h1></AuthRegist>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default page(withTheme(Page));