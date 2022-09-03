import React, {useState} from 'react'

const AddColor = (props) => {
    const [newColor,setNewColor]= useState("");
    const addColorFunction=(e)=>{
        e.preventDefault();
        return props.setColors([...props.colors,newColor])
    }

  return (
    <div>
        <br />
        <form onSubmit={addColorFunction}>
            <label >Add Color:</label>
            <input onChange={(e)=>{
                return setNewColor(e.target.value)
            }} />
            <button>add me</button>
        </form>
        <p>{newColor}</p>
    </div>
  )
}

export default AddColor