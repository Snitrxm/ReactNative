import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Main } from "./src/pages/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: "#f6f6f6",
    height: "100%",
  },
});
