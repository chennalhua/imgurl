import { Button } from 'antd'
export function Controller(props) {
    const controlEvent = (e, val) => {
        e.preventDefault();
        props.setState(!val)
    }
    return (
        <Button type='primary' onClick={e => controlEvent(e, props.state)}>
            <span class='material-symbols-outlined'>{props.icon}</span>
        </Button>
    )
} 