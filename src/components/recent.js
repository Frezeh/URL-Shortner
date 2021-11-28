import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { useSelector } from "react-redux";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Recent() {
  const history = useSelector((state) => state.history);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total visits</Title>
      <Typography  color="textSecondary" component="p" variant="h4">
        {history.history.length}
      </Typography>
      <Title>Most Recent visit</Title>        
      <Typography color="textSecondary" className={classes.depositContext}>
      {history.history.slice(0, 1).map((history) => (
                            <p key={history.id}> 
                               <h1>{history.date}</h1> 
                            </p> 
                        ))} 
      </Typography>
    </React.Fragment>
  );
}