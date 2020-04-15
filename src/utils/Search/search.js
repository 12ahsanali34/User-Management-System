
import React from 'react';
import TextField from '@material-ui/core/TextField';
import ContactList from '../contactList/contactlist';

export default function Search(props) {
  const { data, listObject } = props;
  let filteredData = props.data.filter((item)=>{
    return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(props.searchValue)
      );
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
        <div style={{marginBottom:10}}>
            {filteredData.length !== 0 && filteredData.map((res,i)=>{
                return(
                    <ContactList index={i} listObject={listObject} data={res}/>
                )
                
            })}
        </div>
      </>
  )
}

