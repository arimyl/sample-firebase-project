import React from "react";
import { css } from "@emotion/core";
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Select, FormControl} from '@material-ui/core';
import {ListItem, TextField} from '@material-ui/core';

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
  language: '10',
  language1: '日本語',
  language2: 'ENGLISH'
});

export function SelectLang () {
  const context = React.useContext(UserContext);

  const classes = useStyles();
  // let [Lang, setLang] = React.useState('日本語');
  // const handleChange = event => (
  //   setLang(event.target.value)
  // );
  // console.log(Lang, setLang);
  const handleChange = event => (
    React.useState(event.target.value)
  );

  return (
    <div css={css`
    position: static;
    margin: 10px 5px 5px;
    
    `}>
      <FormControl className={classes.formControl}>
        <Select
        labelId = "select-label"
        id = "select-label"
        value = {context.language}
        onChange = {handleChange}
        >
          <ListItem value={'日本語'} >日本語</ListItem>
          <ListItem value={'ENGLISH'} >English</ListItem>
        </Select>
      </FormControl>
    </div>
  );
}

export function TlansText () {
  const classes = useStyles(); 
  let Test = 'test';
  // value = {Test};
  return (
    <div>
      <div>
        <div css={css`
        width: 100%;
        margin: 0 8px;
        `}>
          <TextField fullWidth variant="outlined" label="textform1"   />
        </div>
        <div css={css`
        width: 100%;
        margin: 0 8px;
        `}>
          <TextField fullWidth variant="outlined" label="textform2"   />
        </div>
        <Button variant="contained" color="secondary">送信</Button>
      </div>
    </div>
  );

// constructor(props) {
//     super(props);
//     this.state = {
//       textform1: "textform1",
//       textform2: "textform2",
//     }
// }
}
  


export default class Try3 extends React.Component {
  render (){
    return (
      <div css={css`
      background-color: #eee;
      padding: 5px;
      position: static;

      `}>
        <div>
          <SelectLang /><SelectLang />  
        </div>
        <div>
          <TlansText />
        </div>
      </div>
    );  
  }

}