import React from 'react'
import '../assets/spinner.gif'
import { WiDayThunderstorm } from 'react-icons/wi'

function Spinner() {
  return (
    <img src={spinner} alt='Loading...' style={{width: '100px'  , margin:'auto',display:'block'} }/>
   
  )
}

export default Spinner
