import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList2() {
    const { todos } = useSelector((state: any) => state.todosReducer);
/*const [todos, setTodos] = useState([
{ id: "1", title: "Learn React" },
{ id: "2", title: "Learn Node" }]);
const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
const addTodo = (todo: any) => {
const newTodos = [ ...todos, { ...todo,
id: new Date().getTime().toString() }];
setTodos(newTodos);
setTodo({id: "-1", title: ""});
};
const deleteTodo = (id: string) => {
const newTodos = todos.filter((todo) => todo.id !== id);
setTodos(newTodos);
};
const updateTodo = (todo: any) => {
const newTodos = todos.map((item) =>
(item.id === todo.id ? todo : item));
setTodos(newTodos);
setTodo({id: "-1", title: ""});
};*/

return (
<div id="wd-todo-list-redux">
    <h2>Todo List (Using Reducer)</h2>
    <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
           <TodoItem todo={todo} />
))}
</ul>
<hr/>
</div>
);
}