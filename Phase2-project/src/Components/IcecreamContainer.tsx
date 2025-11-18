import React from 'react'
import { connect } from 'react-redux'
import { buyicecream } from '../Redux/Icecream/IcecreamAction'

function IcecreamContainer(props) {
  return (
    <div>
      <h2>Number of Icecream - {props.numOfIcecream}</h2>
      <button onClick={props.buyicecream}>Buy Icecream</button>
    </div>
  )
}

const mapStatetoProps = state =>{
  return {
    numOfIcecream:state.icecream.numOfIcecream
  }
}

const mapDispatchtoProps = dispatch =>{
  return{
    buyicecream : () => dispatch (buyicecream())
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(IcecreamContainer)
