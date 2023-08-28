import React from "react";
import { Link } from "react-router-dom";


/** Creates a list of links to various snack items
 *
 * props: snacks (array of snack items)
 *
 * state: none
 *
 * App > VendingMachine
 */
function VendingMachine({ snacks }) {

  return (
    <div className="VendingMachine">

      <div>
        {snacks.map(snack => (
          <p key={snack}>
            <Link to={`/${snack}`}>{snack}!</Link>
          </p>
        ))}
      </div>

    </div>
  );
}


export default VendingMachine;