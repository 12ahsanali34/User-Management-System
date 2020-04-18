
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export default function DialogBox(props) {
  const [values, setValue] = useState({
    name:"",
    number:null,
    role:"",
    age:null
  })
  return (
    <div>
      <Dialog open={props.show} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
          <TextField
            onChange={(e)=>{
              setValue({
                ...values,
                name:e.target.value
              })
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            required
          />
          <TextField
            onChange={(e)=>{
              setValue({
                ...values,
                number:e.target.value
              })
            }}
            autoFocus
            margin="dense"
            id="number"
            label="Number"
            type="number"
            fullWidth
            required
          />
          <TextField
            onChange={(e)=>{
              setValue({
                ...values,
                role:e.target.value
              })
            }}
            autoFocus
            margin="dense"
            id="position"
            label="Postion/Role"
            type="text"
            fullWidth
            required
          />
          <TextField
            onChange={(e)=>{
              setValue({
                ...values,
                age:e.target.value
              })
            }}
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="number"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{props.onSubmit(values)}} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}