import './style.css';


function TodoItem (props) {
    return (
        <div className='todo ${props.todo.isCpmpleted ? "complete" : ""}'>
        {props.todo.text}
            <div>
                <button onClick={() => props.completeTodo(props.index)}>Complete</button>
            </div>
        </div>
        );
}

export default TodoItem;