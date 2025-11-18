import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buycake } from '../Index'

function Hookscakecontainer() {
    const numOfCakes=useSelector(state => state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(buycake())}>Buy Cake</button>
    </div>
  )
}

export default Hookscakecontainer
