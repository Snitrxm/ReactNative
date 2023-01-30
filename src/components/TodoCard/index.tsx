import { Text, TouchableOpacity, View } from "react-native";
import { CardWrapper } from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface IProps {
  id: number;
  name: string;
  isDone: boolean;
  handleDoneTodo: (id: number) => void;
}

export const TodoCard = ({ name, isDone, handleDoneTodo, id }: IProps) => {
  return (
    <CardWrapper>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#2da4d3",
              borderRadius: 5,
            }}
          />
          <Text style={{ paddingLeft: 15 }}>{name}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleDoneTodo(id)}
        >
          <AntDesign
            name="checkcircleo"
            size={22}
            color={isDone ? "green" : "black"}
            style={{ paddingRight: 5 }}
          />
        </TouchableOpacity>
      </View>
    </CardWrapper>
  );
};
