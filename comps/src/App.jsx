import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import { GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function App() {
 
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <>
      <div>

        <div>
          <Button secondary outline rounded onClick={handleClick}><GoBell />Click me!</Button>
        </div>
        <div>
          <Button danger outline><GoCloudDownload />Buy Now!</Button>
        </div>
        <div>
          <Button warning><GoDatabase />See Deal!</Button>
        </div>
        <div>
          <Button secondary>Hide Ads!</Button>
        </div>
        <div>
          <Button primary rounded>Something!</Button>
        </div>

      </div>
    </>
  )
}

export default App
