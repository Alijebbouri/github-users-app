import React, { useState } from 'react';
import './css/search.css'; 
import { Input, Table } from 'semantic-ui-react';

const Search = ({ users }) => {
  const [search, setSearch] = useState('');
  const [foundUser, setFoundUser] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const user = users.find((user) =>
      user.login.toLowerCase() === value.toLowerCase()
    );
    setFoundUser(user);
  };

  return (
    <div className="search-container">
      <Input
        action='Search'
        placeholder='Search...'
        className='search-input'
        onChange={handleSearch}
        value={search}
      />

      {search && !foundUser && <p >User not found</p>}

      {foundUser && (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Avatar</Table.HeaderCell>
              <Table.HeaderCell>Login</Table.HeaderCell>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>URL</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <img src={foundUser.avatar_url} alt="Avatar" />
              </Table.Cell>
              <Table.Cell>{foundUser.login}</Table.Cell>
              <Table.Cell>{foundUser.id}</Table.Cell>
              <Table.Cell>{foundUser.type}</Table.Cell>
              <Table.Cell>
                <a href={foundUser.html_url}>repo</a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default Search;
