import {Form, FloatingLabel, Container, ButtonGroup, Button} from "react-bootstrap";
import {useState} from "react";

export default function CreateTodo() {
    let todoState = {
        name: '',
        description: '',
        done: false
    };

    let [todo, setTodo] = useState(todoState);

    function resetTodo() {
        setTodo(todoState)
    }

    function saveTodo() {
        let data = JSON.parse(localStorage.todos) ?? [];

        data.push(todo);

        localStorage.todos = JSON.stringify(data);

        resetTodo();
    }

    return (
        <Container className="mt-3">
            <h1 className="text-lg-start">Add Todo</h1>

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
                <Button className="w-100" variant="secondary" onClick={resetTodo}>Cancel</Button>
            </ButtonGroup>
        </Container>
    );
}