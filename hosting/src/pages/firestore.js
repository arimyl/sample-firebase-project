import React from "react";
import { Link } from "gatsby";
import page from 'common/page';
import { css } from '@emotion/core';
import breakpoints from 'common/breakpoints';
import { withTheme } from '@material-ui/styles';

import { Router } from "@reach/router";
import firebase from 'common/firebase';
import moment from 'moment';
import axios from 'axios';
import NoSSR from 'components/NoSSR';
import { TextField, Button } from '@material-ui/core';

const db = firebase.firestore();


// class ChatSample2 extends React.Component {
//   render() {

//     const { state, props } = this;

//     console.log(state.messages)

//     return (
//       <div>
//         <div>{state.messages.map((doc, index) => {
//           const id = doc.id;
//           const data = doc.data();

//           return (
//             <div key={id} css={css`
//               margin-bottom: 16px;
//             `}>
//               <span css={css`
//                 background-color: #eee;
//                 margin-right: 8px;
//                 padding: 4px 8px;
//                 border-radius: 4px;
//               `}>{data.from}</span>
//               <span>{data.message}</span>
//             </div>
//           );
//         })}</div>

//         <div css={css`
//           margin-top: 16px;
//           &>* {
//             vertical-align: middle;
//             margin-left: 16px;
//           }
//         `}>
//           <TextField variant='outlined' label='名前' type='text' name='name' onChange={e => this.setState({name: e.target.value})} />
//           <TextField variant='outlined' label='メッセージを入力' type='text' name='message' onChange={e => this.setState({message: e.target.value})} />
          
//           <Button variant='contained' color='secondary' onClick={this.send}>送信</Button>
//         </div>
//       </div>
//     );
//   }

//   state = {
//     messages: [],
//     user: null,
//     name: '',
//     time: null,
//   };

//   unsubscribe = null;

//   send = async () => {
//     const { state } = this;

//     try {
//       await db.collection("messages").add({
//         from: state.name,
//         // to: '2',
//         message: state.message,
//         time: state.time,
//       });
//     } catch (e) {
//       console.log(e);
//       // pass
//     }
//   }

//   async componentDidMount() {
//     this.unsubscribe = db.collection("messages")
//       // .where("from", "==", "1")
//       // .where("to", "==", "2")
//       .limit(10)
//       .onSnapshot(snapshot => this.setState({ messages: snapshot.docs }));
//   }

//   async componentWillUnmount() {
//     if (this.unsubscribe) {
//       this.unsubscribe();
//     }
//   }
// }

export const ChatSample = () => {

  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const t = new Date();
    const today = new Date(t.getFullYear(), t.getMonth(), t.getDate());

    return db.collection("messages")
      // .where("from", "==", "1")
      // .where("to", "==", "2")
      // .orderBy("name")
      .where("createdAt", ">=", today)
      .orderBy("createdAt", "desc")
      .limit(10)
      .onSnapshot(snapshot => setMessages(snapshot.docs));
    }, []);
  
  // const timeStamp=() => {
  //   const newDate = Date.now();
  //   setDate(Intl.DateTimeFormat('en-US').format(newDate));
  //   setTime(Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(newDate));   
  // }

  const send = async () => {
    try {
      // const { data } = await axios.get(process.env.GOOGLE_APPLICATION_CREDENTIALS, {
      const { data } = await axios.get(process.env.TRANSLATE_API_ENDPOINT, {
        params: {
          text: message
        }
      });

      await db.collection("messages").add({
        from: name,
        message,
        translated: data.translated,
        createdAt: new Date(),
        // date,
        // time,
      });
    } catch (e) {
      console.log(e);
      // pass
    }
  };
  

  return (
    <div>
      <div>{messages.map((doc, index) => {
        const id = doc.id;
        const data = doc.data();
        
        return (
          <div key={id} css={css`
            margin-bottom: 16px;
          `}>
            <span css={css`
              background-color: #eee;
              margin-right: 8px;
              padding: 4px 8px;
              border-radius: 4px;
            `}>{data.from}</span>
            <span>{data.translated || data.message}</span>
            <span css={css`
                font-size: 70%;
            `}>{moment(data.createdAt.toDate()).fromNow()}</span>
          </div>
        );
      })}</div>

      <div css={css`
        margin-top: 16px;
        &>* {
          vertical-align: middle;
          margin-left: 16px;
        }
      `}>
        <TextField variant='outlined' label='名前' type='text' value={name} onChange={e => setName(e.target.value)} />
        <TextField variant='outlined' label='メッセージを入力' type='text' value={message} onChange={e => setMessage(e.target.value)} />
        <Button variant='contained' color='secondary'  onClick={send}>送信</Button>
      </div>
    </div>
  );
};


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
            <ChatSample><h1>サインイン済みの画面</h1></ChatSample>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
