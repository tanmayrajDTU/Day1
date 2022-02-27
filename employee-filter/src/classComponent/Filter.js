import React, { useState } from 'react';

import './app.css';

const USERS = [
  { id: 1, name: 'Tanmay', age: 22, location:"Delhi",salary:100000,avatar:"https://png.pngtree.com/png-clipart/20190904/original/pngtree-purple-cartoon-employee-avatar-png-image_4464798.jpg"},
  { id: 2, name: 'Ravi', age: 23, location:"Delhi",salary:30000,avatar:"https://png.pngtree.com/png-clipart/20190904/original/pngtree-purple-cartoon-employee-avatar-png-image_4464798.jpg"},
  { id: 3, name: 'Sachin', age: 20 , location:"Delhi",salary:40000,avatar:"https://png.pngtree.com/png-clipart/20190904/original/pngtree-purple-cartoon-employee-avatar-png-image_4464798.jpg"},
  { id: 4, name: 'Siddharth', age: 22, location:"Hyderabad",salary:40000,avatar:"https://png.pngtree.com/png-clipart/20190904/original/pngtree-purple-cartoon-employee-avatar-png-image_4464798.jpg"},
  { id: 5, name: 'Ritik', age: 20, location:"delhi",salary:50000,avatar:"https://png.pngtree.com/png-clipart/20190904/original/pngtree-purple-cartoon-employee-avatar-png-image_4464798.jpg" },
  { id: 6, name: 'Aman', age: 23 , location:"Kolkata",salary:60000,avatar:"https://png.pngtree.com/png-clipart/20190904/original/pngtree-purple-cartoon-employee-avatar-png-image_4464798.jpg"},
  
];
function App() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }
    setName(keyword);
  };

  return (
    <div className="container" >
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list" style={{display:"inline"}}>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div>
          <div className="card" style={{width: "18rem", margin: "50px"  } }  >
              <img src={user.avatar} className="card-img-top" alt={user.name} />
              <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.id} Lorem ipsum </p>
              </div>
          </div>
        </div>

          ))
        ) : (
          <h1>Employee Not Found!</h1>
        )}
      </div>
    </div>
  );
}
export default App;