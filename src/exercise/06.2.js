// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm() {
  const [username, setUsername] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    alert(`You entered: ${username}`)
  }

  const onChange = e => {
    setUsername(e.target.value?.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          type="text"
          value={username}
          onChange={onChange}
          id="userNameInput"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  return <UsernameForm />
}

export default App
