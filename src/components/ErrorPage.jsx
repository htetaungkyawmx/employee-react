

import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className='text-center'>
        <h1>Opps!</h1>
        <p>Unexpected Error Occured</p>
        <p className='text-danger'>{error.statusText || error.message}</p>
    </div>
  )
}
