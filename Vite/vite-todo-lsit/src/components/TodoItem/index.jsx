import React, { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from "../../config/status";

const TodoItem = (props) => {
  const { onSubmit } = props;
  const handleSubmit = () => {
    onSubmit && onSubmit(todoItem);
  };
  const handleChange = (event) => {
    setTodoItem({
      id: Math.random(),
      content: event.target.value,
      status: STATUS.IS_CREATE,
    });
  };
  const [todoItem, setTodoItem] = useState({});
  return (
    <div className="todo-item-input">
      <Input
        placeholder="写个代办"
        value={todoItem.content}
        onPressEnter={handleSubmit}
        onChange={handleChange}
      />
      <Button size="large" type="primary" onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
};
export default TodoItem;
