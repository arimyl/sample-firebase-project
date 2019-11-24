import React from "react";
import { css } from "@emotion/core";
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Select, FormControl} from '@material-ui/core';
import {ListItem} from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  root:{
    flexGrow: 1,
  },
  formControl:{
    marginRight: theme.spacing(1),
    minWidth: 120,
  },
}));

const UserContext = React.createContext({
  language1: '10',
  language2: '20'
});

export function SelectLang () {
  const classes = useStyles();
  let [Lang, setLang] = React.useState(10);
  const handleChange = event => (
    setLang(event.target.value)
  );
  console.log(Lang, setLang);

  return (
    <div css={css`
    margin: 10px 5px 5px;
    
    `}>
      <FormControl className={classes.formControl}>
        <Select
        labelId = "select-label"
        id = "select-label"
        value = {Lang}
        onChange = {handleChange}
        >
          <ListItem value={10}>日本語</ListItem>
          <ListItem value={20}>English</ListItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default class Try3 extends React.Component {
  render (){
    return (
      <div css={css`
      background-color: #eee;
      padding: 5px;
      position: relative;

      `}>
        <SelectLang />
        <SelectLang />
      </div>
    );  
  }

}