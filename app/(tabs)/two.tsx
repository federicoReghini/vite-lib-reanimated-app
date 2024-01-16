import { Pressable, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { AnimatedText, toast } from "federico-vite-lib-reanimated";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          toast.success({ message: "wow", status: "200", duration: 10000 })
        }
      >
        <AnimatedText />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
