import './style.css';


const TodoItem = (props) => {
    return <div className='todo'>{props.text}</div>;
}

export default TodoItem;