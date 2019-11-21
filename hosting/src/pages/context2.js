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




const TitleInner = ({ user }) => (<h1 >{user.signIn ? 'サインイン済み' : 'サインインしてください'}</h1>);

const Title = withUser(TitleInner);

function Toolbar() {
  return (
    <div>
      <SigninButton />
    </div>
  );
}




const withXxx = Component => {
  return () => {
    return (
      <Component user={{
        signIn: true,
        updateValue: obj => console.log(obj.signIn),
      }}/>
    );
  };
};

const SignInInner = ({ user }) => (<Button variant='contained' onClick={() => user.updateValue({ signIn: !user.signIn })}>サインイン</Button>);

const SigninButton = withUser(SignInInner);
const SigninXxx = withXxx(SignInInner);

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
        <SignInInner user={{
          signIn: true,
          updateValue: obj => console.log('hello'),
        }} />
        <SigninXxx />
      </UserContext.Provider>
    );
  }
}
