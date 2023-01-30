import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

interface IProps {
  handleCreateTodo: (name: string) => void;
}

export const NewTask = ({ handleCreateTodo }: IProps) => {
  const [todoName, setTodoName] = useState<string>("");

  return (
    <View
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 10,
          width: "90%",
        }}
        placeholder="Write a Task"
        value={todoName}
        onChangeText={(text) => setTodoName(text)}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {handleCreateTodo(todoName); setTodoName("")}}
      >
        <AntDesign name="pluscircleo" size={24} color="black" style={{}} />
      </TouchableOpacity>
    </View>
  );
};
