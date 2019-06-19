import Link from "next/link"
import UpdateItem from '../components/UpdateItem'

const Update = props => (
    <div>
        <p>This is the Update page {props.query.id && `for the item with ID of: ${props.query.id}`}!</p>
        <UpdateItem id={props.query.id} />
    </div>
)

export default Update
