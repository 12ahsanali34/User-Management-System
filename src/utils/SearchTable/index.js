
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import useStyles from './styles';


export default function Search(props) {
  const { data } = props;
  const classes = useStyles();
  function createData(name, id, role, number, age) {
    return { name, id, role, number, age };
  }
  const rows = []
  data.map((res, i)=>{
    rows.push(createData(res.name, res.id, res.role, res.number, res.age))
  })

  let filteredData = rows.filter((item)=>{
    return Object.keys(item).some(key =>{
      if(typeof item[key] == "string"){
        return item[key].toLowerCase().includes(props.searchValue)
      }
      else if(item[key] !== null){
        return item[key].toString().toLowerCase().includes(props.searchValue)
      }
      else{
        item[key] = ""
        return item[key].toLowerCase().includes(props.searchValue)
      }
    });
  })
  return (
      <>
        <TextField
          style={{width:'100%'}}
          onChange={(e)=>{props.onChange(e.target.value)}}
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"/>
        <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow style={{height: 80}}>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Contact ID</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">phone Number</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Delete Row</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((row, i) => (
                    <TableRow style={{height: 50}} key={i}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">{row.role}</TableCell>
                      <TableCell align="right">{row.number}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={(e)=>{
                            e.preventDefault()
                            props.handleDelete(row.id)
                          }}
                          color="secondary">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </>
  )
}

