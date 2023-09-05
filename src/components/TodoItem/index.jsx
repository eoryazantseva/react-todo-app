import './style.css';


const TodoItem = (props) => {
    return <div className='todo'>{props.todo.text}</div>;
}

export default TodoItem;