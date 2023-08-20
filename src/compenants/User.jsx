import React, { useState, useEffect } from 'react';
import './css/user.css'
function User() {
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
    <div className='container'>
      {users.map((item, key) => (
        <div className="ui card" key={key}>
          <div className="image">
            <img src={item.avatar_url} alt='#' />
          </div>
          <div className="content">
            <div className="header">{item.login}</div>
            <div className="meta"><span className="date">{item.id}</span></div>
            <div className="description">Type : {item.type} <a href={item.html_url}>repo</a></div>
          </div>
          <div className="extra content">
              <i aria-hidden="true" className="user icon"></i>followers : {item.followers_url && item.followers_url.length}
          </div>
        </div>
      ))}
    </div>
  );
}

export default User;
