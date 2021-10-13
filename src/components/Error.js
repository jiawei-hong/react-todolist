import {Alert} from "react-bootstrap";

export default function Error(props) {
    return (
        <Alert variant="danger">{props.text}</Alert>
    );
}