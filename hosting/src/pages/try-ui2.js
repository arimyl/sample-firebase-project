import React from "react";
import { css } from "@emotion/core";
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const SimpleCard = function() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
        // <Card className={classes.card}>
        //     <CardContent>
        //         <Typography className={classes.title} color="textSecondary" gutterBottom>
        //             Langage1
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Change</Button>
        //     </CardActions>
        // </Card>
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
}


export default class Try2 extends React.Component {
    render() {
        return (
            <div css={css`
                padding: 16px 8px;
            `}>
                <div>
                    <div>
                        {SimpleCard}
                    </div>
                    
                    <label>翻訳カヤック</label>
                    <li>{SimpleCard}</li>
                    <li>言語2</li>
                    <li>ログイン</li>
                </div>
                <div>
                    <button >音声入力</button>
                </div>
                <div css={css`

                `}>
                    <textarea label="言語1" value={this.state.area1}>
                        
                    </textarea>
                    <textarea label="言語2" value={this.state.area2}>
                        
                    </textarea>

                </div>
            </div>
        )
    } 

    constructor(props) {
        super(props);
        this.state = {
            area1: "",
            area2: ""
        };
    }
}