function Frame(props) { //親コンポーネント
  return(
    <div className={'Frame-' + props.color}>
      {props.children}
    </div>
  );
}

function Welcome() {
  return(
    <Frame color="blue">
      <h1 className="title">
        Welcome
      </h1>
      <p className="message">
        ようこそ
      </p>
    </Frame>
  );
}

function GoodBy(){
  return(
    <Frame color="red">
      <h1 className="title">
       GoodBy
      </h1>
      <p className="message">
        さようなら！
      </p>
    </Frame>
  );
}

function App(){
  return(
    <div className="App">
      <header className="App-header">
        <Welcome />
        <GoodBy />
      </header>
    </div>
  );
}