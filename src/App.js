import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import User from './compenants/User';
import Search from './compenants/Search';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header size='huge' textAlign='center'>Github Users Challenge</Header>
      <hr></hr> 
      <Search users={users} />
      <User />
    </div>
  );
}

export default App;
