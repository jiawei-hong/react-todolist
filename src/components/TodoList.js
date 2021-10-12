import {useEffect, useState} from "react";
import {Card, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function TodoList() {
    let [todos, setTodos] = useState(localStorage.todos ? JSON.parse(localStorage.todos) : []);

    useEffect(() => {
        localStorage.todos = JSON.stringify(todos);
    }, [todos]);

    function changeDone(id) {
        todos[id].done = !todos[id].done;

        setTodos([...todos])
    }

    return (
        <Container className="mt-3 mb-3">
            {
                todos.map((todo, i) => {
                    return <Card key={i}>
                        <Card.Body className="d-flex align-items-center">
                            <Card.Title className="text-start p-2 mb-2 text-decoration-none h4" as={Link}
                                        to={`/${i}`}>{todo.name}</Card.Title>

                            <div className="ms-auto">
                                <Form.Check type="checkbox" checked={todo.done} onChange={() => changeDone(i)}/>
                            </div>
                        </Card.Body>
                    </Card>
                })
            }
        </Container>
    );
}