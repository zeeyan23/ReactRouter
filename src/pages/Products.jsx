import React from 'react'
import { Link } from 'react-router-dom'
export const Products = () => {
  return (
    <div>
      Products
      <ul>
        <li>
          <Link to='/deatils/p1'>
            A Book
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/deatils/p2'>
            A Carpet
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/deatils/p3'>
            A Laptop
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Products