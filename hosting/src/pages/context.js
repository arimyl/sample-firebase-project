import React from "react";
import { Button } from '@material-ui/core';

const UserContext = React.createContext({
  signIn: false,
});

class SigninButton extends React.Component {
  static contextType = UserContext;

  render() {
    const { context } = this;

    return (
      <React.Fragment>
        <Button variant='contained' onClick={() => context.updateValue({ signIn: true })}>サインイン</Button>
      </React.Fragment>
    );
  }
}

// class Title extends React.Component {
//   // static contextType = UserContext;

//   render() {
//     // const { context } = this;
//     const context = React.useContext(UserContext);

//     return (
//       <React.Fragment>
//         <h1>{context.signIn ? 'サインイン済み' : 'サインインしてください'}</h1>
//       </React.Fragment>
//     );
//   }
// }

const Title = () => {
  const context = React.useContext(UserContext);

  return (
    <h1>{context.signIn ? 'サインイン済み' : 'サインインしてください'}</h1>
  );
};


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
        <Title />
      </UserContext.Provider>
    );
  }
}
