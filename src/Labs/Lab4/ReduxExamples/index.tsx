import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import TodoList2 from "./todos/TodoList2";

export default function ReduxExamples() {
return(
<div>
<h2>Redux Examples</h2>
<HelloRedux />
<CounterRedux />
<AddRedux />
<TodoList />
<TodoList2 />
</div>
);
};
