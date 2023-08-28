import React from "react";
import { Link } from "react-router-dom";


const DEFAULT_SNACKS = ['chips', 'soda', 'sardines'];

function VendingMachine({ snacks = DEFAULT_SNACKS }) {

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