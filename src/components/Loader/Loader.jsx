import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import './Loader.css'

export const Loader = ({loading}) => {
  return (
    <div className='loader'>
        <RingLoader color={'darkred'} loading={loading} size={150} />
    </div>
  )
}