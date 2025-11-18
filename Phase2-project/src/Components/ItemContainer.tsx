import React from 'react'
import { connect } from 'react-redux'
import { buycake } from '../Redux/Cake/cakeActions'
import { buyicecream } from '../Redux/Icecream/IcecreamAction'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const MapstatetoProp = (state,ownProps)=>{
    const itemState=ownProps.cake?state.cake.numOfCakes : state.icecream.numOfIcecream
    return {
        item:itemState
    }
}


const MapDispatchtoProps = (dispatch,ownProps)=>{
    const dispatchfunction = ownProps.cake ? ()=>dispatch(buycake()):()=>dispatch(buyicecream())
    return {
        buyItem:dispatchfunction
    }
}

export default connect(MapstatetoProp,MapDispatchtoProps)(ItemContainer)
