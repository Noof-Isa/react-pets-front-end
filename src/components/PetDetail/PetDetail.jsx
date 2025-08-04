// const PetDetail = (props) => {
//   // return if props.selected is null
//   if (!props.selected) {
//     return (
//       <div>
//         <h1>NO DETAILS</h1>
//       </div>
//     );
//   }}

// src/components/PetDetail/PetDetail.jsx
const PetDetail = (props) => {
    if (props.selected) {
        return (
        <>
            <h1>{props.selected.name}</h1>
            <h2>Breed: {props.selected.breed}</h2>
            <h2>
                Age: {props.selected.age}
            </h2>
        </>
    )
    }
    return (
        <>
            <h2>NO DETAILS</h2>
        </>
    )
}

export default PetDetail