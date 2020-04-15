import React, {useState} from 'react';
import Signin from './components/SignIn/signin';
import Signup from './components/SignUp/signup';
import Search from './utils/Search/search';

function App() {
  const [searchValue, setSearchValue] = useState("")
  let data = [
    {name:'ahsan',id:"1",position:'director'},
    {name:'khan',id:"2",position:'manager'},
    {name:'blue',id:"3",position:'l'},
    {name:'zeeshan',id:"4",position:'power'},
]
  return (
    <div style={{padding:10}}>
      <Search
        onChange={(e)=>setSearchValue(e)}
        data={data}
        searchValue={searchValue}/>
    </div>
  );
}


export default App;
