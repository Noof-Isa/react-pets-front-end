// const PetForm = () => {  

//     const initialState={

//         name:'',
//         age:'',
//         breed:'',
//     }
//     const[formData, setformData]=useState(initialState)

//     const handleChange =(evt) => {

//         // update form datsa 
//         console.log(evt.target.value)
//         setformData({...formData.[evt.target.name]: evt.target.value})
//     }
//     return (
//       <>
//         <h1>Pet Form</h1>
//         <form> 
//             <label htmlfor="name">Name:</label>
//             <input type="text"name="name"id="name" onChange={handleChange}/>

//             <label htmlfor="age">Age:</label>
//             <input type="text"name="age"id="age" onChange={handleChange}/>

//             <label htmlfor="breed">Age:</label>
//             <input type="text"name="breed"id="breed" onChange={handleChange}/>





//         </form>
//       </>
//     );
//   }

// src/components/PetForm/PetForm.jsx

import { useState } from 'react'

const PetForm = (props) => {

    const initialState = {
        name: '', 
        age: '',
        breed: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log('the form was submitted!')
        props.handleAddPet(formData)
        setFormData(initialState)
    }

    return (
        <>
            <h1>Pet Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" 
                value={formData.name} onChange={handleChange} />

                <label htmlFor="age">Age:</label>
                <input type="text" name="age" id="age" 
                value={formData.age} onChange={handleChange} />

                <label htmlFor="breed">Breed:</label>
                <input type="text" name="breed" value={formData.breed} id="breed" onChange={handleChange} />

                <button type="submit">Add New Pet</button>
            </form>
        </>
    )
}

export default PetForm