import React from "react";
import page from 'common/page';
import Hello from 'components/Hello';
import HelloState from 'components/HelloState';
import { withTheme } from '@material-ui/styles';
import { css } from "@emotion/core";
import {Link} from "gatsby";
import ButtonAppBar from "./Simple-Bar";
import { TextField, Button } from '@material-ui/core';


const Page = ({ theme }) => {

  return (
    <React.Fragment>
      <header>
        <ButtonAppBar />
      </header>
      <main css={css`
        max-width: 1000px;
        margin: 0 auto;
      `}>
      <div css={css`
        text-align: center;
      `}>
        <h1 css={css`
          margin-top: 64px;
          margin-bottom: 32px;
          font-size: 40px;
        `}>Hogen Translation</h1>
        <p>日本を愛する若者たちよ。これであなたも方言マスター！YOU CAN DO IT!!!</p>
        <p css={css`
          margin-top: 32px;
          margin-bottom: 32px;
          &>* {
            margin: 0 8px;
          }
        `}>
          <Button component={Link} to="/login" size="large" variant="outlined">ログイン</Button>
          <Button component={Link} to="/auth-regist" size="large" color="secondary" variant="contained">新規ユーザー登録</Button>
        </p>
      </div>
        <img css={css`
          width: 100%;
        `} src={require("../images/FUJI.jpg")} />
      </main>
    </React.Fragment>
  );
};



export default page(withTheme(Page));
