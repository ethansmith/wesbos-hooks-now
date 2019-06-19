import styled from "styled-components"
import formatMoney from "../lib/formatMoney"
import RemoveFromCart from './RemoveFromCart'

const CartItemStyles = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    img {
        margin-right: 10px;
    }
    h3, p {
        margin: 0;
    }
`

const CartItem = props => {
    
    if (!props.each.item) return (
    <CartItemStyles>

    <p>This item has been removed!</p>
    <RemoveFromCart id={props.each.id}/>
    </CartItemStyles>
    )
    
    return (
  <CartItemStyles>
    <img src={props.each.item.image} width="100" alt={props.each.item.title} />
    <div className="cart-item-details">
      <h3>{props.each.item.title}</h3>
      <p>
        {formatMoney(props.each.item.price * props.each.quantity)} -{" "}
        <em>
          {props.each.quantity} &times; {formatMoney(props.each.item.price)} each
        </em>{" "}
      </p>
      <RemoveFromCart id={props.each.id}/>
    </div>
  </CartItemStyles>
)}

export default CartItem
