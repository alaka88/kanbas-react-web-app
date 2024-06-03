import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm(
    //{ todo, setTodo, addTodo, updateTodo }: {
    //todo: { id: string; title: string };
    //setTodo: (todo: { id: string; title: string }) => void;
    //addTodo: (todo: { id: string; title: string }) => void;
    //updateTodo: (todo: { id: string; title: string }) => void;
    //}
    ) {
        const { todo } = useSelector((state: any) => state.todosReducer);
        const dispatch = useDispatch();
            
        return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="input-group">
                    <input
                        value={todo.title}
                        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                        className="form-control"
                    />
                    <div className="input-group-append">
                        <button
                            onClick={() =>  dispatch(updateTodo(todo))}
                            id="wd-update-todo-click"
                            className="btn btn-warning me-2"
                        >
                            Update
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"
                    className="btn btn-success ml-2"
                >
                    Add
                </button>
            </li>
        );
    }