import React from "react";
import { css } from "@emotion/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardTest from "./card-test";


export default class Try1 extends React.Component {

    render () {
        return (
            <div>
                <CardTest />    
                <div css={css`
                padding: 16px 8px;
                `}>
                <div css={css`
                    display: flex;
                `}>
                    <div css={css`
                        width: 100%;
                        margin: 0 8px;
                    `}>
                        <TextField fullWidth variant="outlined" label="textform1" value={this.state.textform1} onChange={this.onTextform1Change} />
                    </div>
                    <div css={css`
                        width: 100%;
                        margin: 0 8px;
                    `}>
                        <TextField fullWidth variant="outlined" label="textform2" value={this.state.textform2} onChange={this.onTextform2Change} />
                    </div>     
                </div>
                <div css={css`
                    width: 100%;
                    text-align: right;
                    padding: 16px 16px 0 0;
                `}>
                    <Button variant="contained" color="secondary">送信</Button>
                </div>       
                {/* <div css={css`
                    background-color: yellow;
                    width: 500px;
                    height: 500px;
                    // text-align: center;
                    position: relative;
                    // position: sticky;
                    // top:0;
                `}>
                    <div css={css`
                        // display: inline;
                        background-color: blue;
                        width: 100px;
                        height: 100px;

                        position: absolute;
                        top: 50%;
                        left: 50%;

                        transform: translate(-10px, -10px);
                        transform: translate(-50%, -50%);

                        // margin: 0 auto;
                    `}>aaaa</div>
                </div>
                */}
            </div>
            </div>    
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            textform1: "textform1",
            textform2: "textform2"
        };
    }
    
    onTextform1Change = e => {
        this.setState({textform1: e.target.value})
    }
    onTextform2Change = e => {
        this.setState({textform2: e.target.value})
    }

    translate = async() => {
        console.log(this.state.textform1);
    }
}

// export default () => (<div>aaa</div>);