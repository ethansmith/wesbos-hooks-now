import styled from 'styled-components'
import moment from 'moment'
import Link from 'next/link'
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';

const orderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

const OrdersList = props => (
    <div>
    <h2>You have {props.orders.length} orders</h2>
    <orderUl>
      {props.orders.map(order => (
        <OrderItemStyles key={order.id}>
          <Link
            href={{
              pathname: '/order',
              query: { id: order.id },
            }}
          >
            <a>
              <div className="order-meta">
                <p>{order.items.reduce((a, b) => a + b.quantity, 0)} Items</p>
                <p>{order.items.length} Products</p>
                <p>{moment(order.createdAt).fromNow()}</p>
                <p>{formatMoney(order.total)}</p>
              </div>
              <div className="images">
                {order.items.map(item => (
                  <img key={item.id} src={item.image} alt={item.title} />
                ))}
              </div>
            </a>
          </Link>
        </OrderItemStyles>
      ))}
    </orderUl>
  </div>
    )

export default OrdersList