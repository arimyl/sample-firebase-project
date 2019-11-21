import React from "react";
import { Button } from '@material-ui/core';

const UserContext = React.createContext({
  signIn: false,
});

// const withUser = Component => props => <Component {...props} user={React.useContext(UserContext)}/>;

const withUser = Component => {
  return props => {
    const context = React.useContext(UserContext);
    return (<Component {...props} user={context}/>);
  };
};

const Title = withUser(({ user }) => (<h1 >{user.signIn ? 'サインイン済み' : 'サインインしてください'}</h1>));

const SigninButton = withUser(({ user }) => (<Button variant='contained' onClick={() => user.updateValue({ signIn: !user.signIn })}>サインイン</Button>));


function Toolbar() {
  return (
    <div>
      <SigninButton />
    </div>
  );
}

export default class Parent extends React.Component {

  state = {
    signIn: false,
  }

  render() {
    return (
      <UserContext.Provider value={{ 
        signIn: this.state.signIn,
        updateValue: obj => this.setState(obj),
      }}>
        <Toolbar />
        <Title aaa='aaa' />
      </UserContext.Provider>
    );
  }
}
