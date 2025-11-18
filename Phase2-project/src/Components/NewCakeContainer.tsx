import React, { useState } from 'react'
import { buycake } from '../Redux/Cake/cakeActions'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input type='text' value={number} onChange={e=>setnumber(Number(e.target.value))}/>
      <button onClick={()=>props.buycake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStatetoProps = state =>{
  return {
    numOfCakes:state.cake.numOfCakes
  }
}

const mapDispatchtoProps = dispatch =>{
  return{
    buycake : number => dispatch (buycake(number))
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(NewCakeContainer)
