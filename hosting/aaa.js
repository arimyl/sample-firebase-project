import React from "react";
// import page from 'common/page';
// import { withTheme } from '@material-ui/styles';
// import Hello from "components/Hello";



console.log(HelloXxx);
console.log(HelloXxx2);

const HelloXxx = ({name}) => {
  return (
    <h1>{name}</h1>
  )
};

const HelloXxx5 = (props) => {
  return (
    <h1>{props.name}</h1>
  )
};

const HelloXxx6 = props => {
  // console.log(props.children.aaa);
  return (
    <h1>{props.name}</h1>
  )
};

const HelloXxx7 = props => (
  <h1>{props.name}</h1>
);

const HelloXxx8 = props => <h1>{props.name}</h1>;

const HelloXxx9 = props => {
  // console.log(props);
  return (
    <div>
      <h1>{props.children}</h1>
      <h2>HelloXxx9の中身</h2>
    </div>
  );
};

const HelloXxx10 = props => <h1 children="HelloXxx10" />;

const Page = () => {

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>Hello World</h1>
        {/* <Hello name="Arimura">aaa</Hello> */}
        <HelloXxx name="Arimura"></HelloXxx>
        <HelloXxx2 name="HelloXxx2"></HelloXxx2>
        <HelloXxx3 name="HelloXxx3"></HelloXxx3>
        <HelloXxx4 name="HelloXxx4" name2="name2" name3="name3"></HelloXxx4>
        <HelloXxx></HelloXxx>
        <HelloXxx5 name="HelloXxx5"></HelloXxx5>
        <HelloXxx6 name="HelloXxx6"></HelloXxx6>
        <HelloXxx7 name="HelloXxx7"></HelloXxx7>
        <HelloXxx8 name="HelloXxx8"></HelloXxx8>

        <HelloXxx9 name="HelloXxx8">HelloXxx9</HelloXxx9>
        <HelloXxx9 children="HelloXxx9children" />
        <HelloXxx9 name="HelloXxx8" children="属性">子供</HelloXxx9>

        <HelloXxx10 />
      </main>
    </React.Fragment>
  );
};


export default Page;



function HelloXxx2({name}) {
  return (
    <h1>{name}</h1>
  )
};

function HelloXxx3(props) {
  return (
    <h1>{props.name}</h1>
  )
};

function HelloXxx4({name2,  ...props}) {
  // console.log(props);
  // console.log(name2);
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{name2}</h2>
      <h2>{props.name2}</h2>
    </div>
  )
};