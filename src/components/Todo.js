import {useParams, useHistory, Link} from "react-router-dom";
import {useState} from "react";
import {Card, Button, Container} from "react-bootstrap";

export default function Todo() {
    let params = useParams();
    let id = params.id;
    let [todos, setTodos] = useState(JSON.parse(localStorage.todos) ?? []);
    let history = useHistory();

    function removeTodo() {
        todos.splice(id, 1);
        setTodos([...todos]);

        localStorage.todos = JSON.stringify(todos);

        history.push('/');
    }

    return (
        <Container>
            <Card className="mt-2 text-start">
                <Card.Body>
                    <p>
                        <Button as={Link} to={`/edit/${id}`} className="me-1 text-decoration-none text-black"
                                variant="warning">編輯</Button>
                        <Button variant="danger" onClick={() => removeTodo()}>刪除</Button>
                    </p>
                    <Card.Title className="p-1">名稱：{todos[id].name}</Card.Title>
                    <Card.Text className="p-1">描述：{todos[id].description}</Card.Text>
                    <Card.Text className="p-1">狀態：{todos[id].done ? '完成' : '未完成'}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}