// // src/App.jsx
// import * as petService from './services/petService.js'

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [pets, setPets] = useState([]);

//   return <h1>Hello world!</h1>;
// };

// export default App;
import * as petService from './services/petService'
import { useEffect, useState } from 'react'
import PetList from './components/PetList/PetList'
import PetDetail from './components/PetDetail/PetDetail'

const App = () => {
  const [pets, setPets] = useState([])
  const [selected, setSelected] = useState(null)
  
  useEffect(() => {
    const fetchPets = async() => {
      try {
        const fetchedPets = await petService.index()
        setPets(fetchedPets)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPets()
  }, [])

  const handleSelect = (pet) => {
    setSelected(pet)
  }

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetDetail selected={selected} />
    </>
  )
}

export default App