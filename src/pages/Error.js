import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! es el fin del camino</h1>
        <Link to='/' className='btn btn-primary'>
          Vuelta a la página principal
        </Link>
      </div>
    </section>
  )
}
