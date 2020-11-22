import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" style={{width:"100%", height:'40px', marginLeft:"0px", backgr:"red"}}>
        <span id="plus">+ </span>&nbsp; Create New
      </Button>
    </div>
  );
}

