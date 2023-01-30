import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { NewTask } from "../NewTask";

import { TodoCard } from "../TodoCard";

interface ITodo {
  id: number;
  name: string;
  isDone: boolean;
}

export const Todos = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [todoId, setTodoId] = useState<number>(1);

  const handleCreateTodo = (name: string) => {
    const newTodoObject: ITodo = {
      id: todoId,
      name,
      isDone: false,
    };

    todos.push(newTodoObject);

    setTodoId((prev) => (prev += 1));
    setTodos([...todos]);
  };

  const handleDoneTodo = (id: number) => {
    const todo = todos.find((todo) => todo.id === id) as ITodo;
    todo.isDone = !todo.isDone;
    setTodos([...todos]);
  };

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ScrollView style={{ paddingTop: 20 }}>
        {todos.length === 0 ? <Text>No todos Today</Text> : null}
        {todos.map(({ isDone, name, id }) => {
          return (
            <TodoCard
              id={id}
              name={name}
              isDone={isDone}
              handleDoneTodo={handleDoneTodo}
            />
          );
        })}
      </ScrollView>

      <NewTask handleCreateTodo={handleCreateTodo} />
    </View>
  );
};
