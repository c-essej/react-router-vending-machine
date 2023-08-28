import React from 'react'
import { useParams, Link, Navigate } from "react-router-dom"


/** Creates HTML for a snack and a link back to the homepage list of snacks
 *
 * props: snacks (array of snack items)
 *
 * state: none
 *
 * App > Snacks
 */

function Snacks({snacks}){
  const params = useParams();

  if(!snacks.includes(params.snacks)){
    return <Navigate to="/"  />
  } else {

  return (
    <div>
      <h1>You've selected {params.snacks} from the vending machine.</h1>
      <Link to='/'>Home</Link>
    </div>
  )

}
}

export default Snacks;