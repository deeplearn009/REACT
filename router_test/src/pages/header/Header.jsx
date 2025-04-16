import React from 'react'
import { Link} from 'react-router'

const Header = () => {
  return (

    <header>

        <div>
         
            <Link to={"/"}>Home</Link>
            <Link to={"/basket"}>Basket</Link>

        </div>




    </header>        

  )
}

export default Header