import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import './Loader.css'

export const Loader = ({loading}) => {
  return (
    <div className='loader'>
        <RingLoader color={'gold'} loading={loading} size={120} />
    </div>
  )
}