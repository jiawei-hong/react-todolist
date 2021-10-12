import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import Todo from "./components/Todo";

export default function AppRouter() {
    return (
        <Router>
            <Header/>

            <Switch>
                <Route path="/create" component={CreateTodo}/>
                <Route path="/edit/:id" component={EditTodo}/>
                <Route path="/:id" component={Todo}/>
                <Route path="/" component={TodoList}/>
                <Route path="*">404 Not Found</Route>
            </Switch>
        </Router>
    )
}