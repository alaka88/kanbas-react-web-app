import { useSelector } from "react-redux";
import Add from "./Add";
import ArrowFunctions from "./ArrowFunction";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import DestructingImports from "./DestrctingImports";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import Highlight from "./Highlight";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";

export default function Lab3(){
    console.log('Hello World!');
    const { todos } = useSelector((state: any) => state.todosReducer);
    return(
        <div id="wd-lab3" className="container-fluid">
            <h3>Lab 3</h3>
            <ul className="list-group">
                {todos.map((todo: any) => (
                <li className="list-group-item" key={todo.id}>
                {todo.title}
                </li>
                ))}
                </ul>
                <hr />
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <WorkingWithArrays />
            <JsonStringify />
            <House />
            <TodoItem />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={3} b={4} />
            <h4>Square of 4</h4>
            <h6>Children Prop</h6>
            <Square>4</Square>
            <h6>Explicit Prop</h6>
            <Square children={5} />
            <h4>Highlight Content</h4>
            <Highlight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight><hr />
            <PathParameters />
            
            </div>
        );
    }