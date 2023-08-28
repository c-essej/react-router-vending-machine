import React from 'react'
import { useParams, Link } from "react-router-dom"


function Snacks(){
  const params = useParams();

  return (
    <div>
      <h1>You've selected {params.snacks} from the vending machine.</h1>
      <Link to='/'>Home</Link>
    </div>
  )

}

export default Snacks;