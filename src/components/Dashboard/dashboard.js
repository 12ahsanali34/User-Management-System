import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import { withRouter } from "react-router-dom";
import SearchTable from '../../utils/SearchTable';
import { getContacts, addContacts, deleteContact } from '../../services/contacts';
import AddButton from '../../utils/addButton';
import Dialog from '../../utils/Dialog';


function Dashboard(props) {
  const [loader, setLoader] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [contactList, setContactList] = useState([])
  const token = props.User.data.token;
  const { User } = props
  const handleGetContacts = () =>{
    getContacts("/contacts", {user_id : User.data.data.id}, token)
    .then(res=>{
      setContactList(res.data)
    })
    .catch(err=>{
      console.log(err, ' contact err')
    })
  }

  const handleAddContacts = (value) =>{
    addContacts("/contact_add",
    {
      "name":value.name,
      "number":value.number,
      "user_id":User.data.data.id,
      "age":value.age,
      "role":value.role
    }, token)
    .then(res=>{
      console.log(res, ' contact res')
      if(res.data.status == 200){
        handleGetContacts()
      }
      setShowDialog(false)
    })
    .catch(err=>{
      console.log(err, ' contact err')
      setShowDialog(false)
    })
  }

  const handleClose = () =>{
    setShowDialog(false)
  }

  const handleDelete = (id) =>{
    deleteContact("/contact_delete", {id}, token)
    .then(res=>{
      console.log(res, ' contact res delete')
      setContactList([])
    })
    .then(ress=>{
      handleGetContacts()
    })
    .catch(err=>{
      console.log(err, ' contact err delete')
    })
  }
  

  useEffect(()=>{
    handleGetContacts()
  },[])
  return (
    <div style={{padding:10}}>
      <h1>This is dashboard</h1>
      <SearchTable
            onChange={(e)=>setSearchValue(e)}
            data={contactList}
            searchValue={searchValue}
            listObject={{
                name:true,
                phone:true,
                age:true,
                position:true
            }}
            handleDelete={(id)=>handleDelete(id)}
        />
        <AddButton onClick={()=>setShowDialog(true)}/>
        <Dialog
          onSubmit={handleAddContacts}
          show={showDialog}
          handleClose={handleClose}
          title={"Add Contact"}
          description={"Add contact for this particular user."}
        />
    </div>
  );
}

export default withRouter(Dashboard)