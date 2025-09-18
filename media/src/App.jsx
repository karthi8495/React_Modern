import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import UsersList from './components/UsersList'



function App() {


  return (
    <>
    <div className='container mx-auto'>
      <UsersList />
    </div>
    </>
  )
}

export default App
