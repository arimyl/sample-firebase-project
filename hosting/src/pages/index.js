import React from "react";
import page from 'common/page';
import Hello from 'components/Hello';
import HelloState from 'components/HelloState';
import { withTheme } from '@material-ui/styles';
import { css } from "@emotion/core";
import axios from "axios";
// const axios = require("axios");
import ChatSample from "./firestore";


const Sample = ({ message }) => {
  return (
    <div style={{ color: 'purple', fontSize: '72px' }}>
      <p>{message}</p>
    </div>
  );
};


// class FormSample extends React.Component {
//   render() {
//     console.log(this.state);
//     return (
//       <div css={css`
//         background-color: green;
//         font-size: 14px;
//         padding: 5px;
//       `}>
//         {/* <form method="post" action="#" style={{ color: 'purple', fontSize: '72px' }}> */}
//         {/* <h1>{this.state.count}</h1> */}
//         <label>
//           Name
//             <input type="text" name="name" id="name" />
//         </label>
//         <label>
//           Email
//             <input type="email" name="email" id="email" />
//         </label>
//         <label>
//           Subject
//             <input type="text" name="subject" id="subject" />
//         </label>

//         <label>
//           Message
//             <textarea onChange={this.onNameChange} value={this.state.name} name="message" id="message" rows="5" />
//         </label>
//         <button onClick={this.translate}>Translate</button>
//         <div>
//           <label>
//             text1
//             <textarea onChange={this.onText1Change} value={this.state.text1} name="message" id="message" rows="10" />
//           </label>
//           <label>
//             text2
//             <textarea onChange={this.onText2Change} value={this.state.text2} name="message" id="message" rows="10" />
//           </label>
//         </div>
//         {/* <button type="submit">Send</button>
//         <input type="reset" value="Clear" />
//      </form> */}
//       </div>
//     )
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       text1:"123",
//       text2:"456"
//     };
//   }

//   onNameChange = e => {
//     this.setState({ name: e.target.value })
//   }

//   onText1Change = e => {
//     this.setState({text1: e.target.value })
//   }
//   onText2Change = e => {
//     this.setState({text2: e.target.value })
//   }
//   translate = async () => {
//     console.log(this.state.name);
//     console.log(this.state.text1);
//     console.log(this.state.text2);
//     const response = await axios.get('http://httpbin.org/get')
//     console.log(response.data);
//   }

//   componentDidMount() {
//     let count = 0;
//     // setInterval(() =>this.setState({ name: "aaa", count: count++ }), 1000);
//   }
// }

const Page = ({ theme }) => {

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>Sample Firebase Project</h1>
        <Sample message='sample' />

        <Hello><span>Hello</span></Hello>
        <HelloState title='Count up sample' />

        <ChatSample />
        {/* <FormSample /> */}
        {/* <Try /> */}
      </main>
    </React.Fragment>
  );
};



export default page(withTheme(Page));
