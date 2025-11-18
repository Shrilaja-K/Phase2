import React from 'react'
import { buycake } from '../Index'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buycake}>Buy Cake</button>
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
    buycake : () => dispatch (buycake())
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(CakeContainer)
