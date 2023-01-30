import { Text, View } from "react-native";
import { Todos } from "../../components/Todos";
import { Wrapper } from "./styles";
export const Main = () => {
  return (
    <Wrapper style={{ height: "100%" }}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Today's Tasks</Text>
        <Todos />
      </View>
    </Wrapper>
  );
};
