import React, { useState } from 'react';

function Search() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  ["avatar_url", "login", "Loading", "Looks like we cant find the user", "img"]
  ["fetchUserData"]["async", "await", "map"]["location", "html_url"]


  return (

    
    <form onSubmit={handleSubmit}>
      <label>
        Enter GitHub username:
        <input type="text" value={username} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
      {submitted && <p>Searching for {username}...</p>}
    </form>
  );
}

export default Search;