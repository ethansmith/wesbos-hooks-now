import PropTypes from 'prop-types'
import styled from 'styled-components'

const Dot = styled.div`
    background: ${props => props.theme.red};
    color: white;
    border-radius: 50%;
    padding: 0.5rem;
    line-height: 2rem;
    min-width: 3rem;
    margin-left: 1rem;
    font-weight: 100;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
`

const CartCount = props => (
    <Dot>{props.count}</Dot>
)

export default CartCount