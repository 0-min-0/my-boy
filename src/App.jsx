import { useState } from 'react'
import { Principal } from './App/Principal'
import RainOfItems from './It/RainOfItems'
import flowerDrop from './assets/images/flower-drop.png'

function App() {

  return (
    <div className='w-full h-screen bg-[#fffefd]'>
      <Principal />
      <RainOfItems
        items={[flowerDrop]}
        density={30}
        fallMin={6}
        fallMax={12}
        sizeMin={16}
        sizeMax={48}
        zIndex={5}
      />
    </div>
  )
}

export default App
