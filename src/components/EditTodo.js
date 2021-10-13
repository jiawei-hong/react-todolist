import {useHistory, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Button, ButtonGroup, Container, FloatingLabel, Form} from "react-bootstrap";
import Error from "./Error";

export default function EditTodo() {
    let params = useParams();
    let id = params.id;
    let [todos] = useState(JSON.parse(localStorage.todos));
    let [todo, setTodo] = useState(todos[id]);
    let history = useHistory();

    useEffect(() => {
        todos[id] = todo
    }, [todo]);

    function saveTodo() {
        localStorage.todos = JSON.stringify(todos);
        history.push('/');
    }

    return (
        <Container className="mt-3">
            {todo ? (
                <>
                    <h1 className="text-lg-start">Edit Todo</h1>

                    <FloatingLabel
                        controlId="name"
                        label="Name"
                        className="mt-2 mb-2"
                    >
                        <Form.Control value={todo.name} onChange={event => setTodo({...todo, name: event.target.value})}
                                      placeholder="Name"/>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="description"
                        label="Description"
                        className="mt-2 mb-2"
                    >
                        <Form.Control value={todo.description}
                                      onChange={event => setTodo({...todo, description: event.target.value})}
                                      placeholder="Description"/>
                    </FloatingLabel>

                    <ButtonGroup className="w-100">
                        <Button className="w-100" variant="primary" onClick={saveTodo}>Save</Button>
                    </ButtonGroup>
                </>
            ) : (
                <Error text="Not Exist Todo"/>
            )}
        </Container>
    );
}