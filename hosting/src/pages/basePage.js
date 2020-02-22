import React from "react";
import { Link } from "gatsby";
import page from 'common/page';
import { css } from '@emotion/core';
import breakpoints from 'common/breakpoints';
import { withTheme } from '@material-ui/styles';
import firebase from 'common/firebase';
import { navigate } from "gatsby";
import { TextField, Button } from '@material-ui/core';

const db = firebase.firestore();

class Base extends React.Component {
  render() {



    const msg = "はろーわーるど"
    console.log(msg);
    return(
      <div css={css`
        width: 100px;
        position: relative;
        margin: 0 auto;
        text-align: center;
        background-color: black;
        color: white;
      `}>
        {msg}
      </div>
    );
  }
} 

const Page = ({theme}) => {

  return (
    <React.Fragment>
      <head>

      </head>
      <main>
        <div>
          <Base></Base>
        </div>
      </main>
    </React.Fragment>
  )
}
export default page(withTheme(Page));
