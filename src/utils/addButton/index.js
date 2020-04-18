
import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import useStyles from './styles';
export default function AddButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={props.onClick} />
      </Fab>
    </div>
  );
}