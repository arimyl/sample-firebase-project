import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton, Select, FormControl} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {ListItem} from '@material-ui/core';
import { css } from "@emotion/core";
import {Link} from "gatsby";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    formControl: {
        position: "static",
        marginRight: theme.spacing(3),
        minWidth: 120,
    },
    selectEmpty: {

        marginTop: theme.spacing(2),
　  },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const NavMenuItem = ["HOME", "ABOUT", "BLOG", "INFOMATION"];

    const NavMenuLinkTag = NavMenuItem.map((item) => {
      let pageLink ="";
      if (item === "HOME") {
        pageLink = "/";
      } else pageLink = "/" + item.toLowerCase() + "/";

      return (
        <li key={pageLink}>
          <Link to={pageLink}>
            {item}
          </Link>
        </li>
      )
    });

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon>{NavMenuLinkTag}</MenuIcon>
                    </IconButton>
                    <Typography css={css`
                      &:hover {
                        text-decoration: none;
                      }
                    `} component={Link} to="/" variant="h6" className={classes.title}>
                        ☆Translation☆
                    </Typography>
                    <SimpleSelect css={css`
                      background-color: none;
                    `} />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export function SimpleSelect({className}) {
  // console.log("AAAAAAAAAAAAAA");
  // console.log(css);
  // console.log("AAAAAAAAAAAAAA");
    const classes = useStyles();
    let [lang1, setLang1] = React.useState(10);
    console.log(lang1);
    const handleChange1 = event => {
      setLang1(event.target.value);
    };

    const [lang2, setLang2] = React.useState(20);
    console.log(lang2);
    console.log(setLang2);
    const handleChange2 = event => {
      setLang2(event.target.value);
    }
    return (
    <div className={className}>
        <FormControl className={classes.formControl}>
          <Select
            labelId="simple-select-label1"
            id="simple-select1"
            value={lang1}
            onChange={handleChange1}
          >
            <ListItem value={10}>日本語</ListItem>
            <ListItem value={20}>English</ListItem>
            <ListItem value={30}>Japanese2</ListItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            labelId="simple-select-label2"
            id="simple-select2"
            value={lang2}
            onChange={handleChange2}
          >
            <ListItem value={10}>日本語</ListItem>
            <ListItem value={20}>English</ListItem>
            <ListItem value={30}>Japanese2</ListItem>
          </Select>
        </FormControl>
    </div>
    );
}