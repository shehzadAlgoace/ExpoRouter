import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";

const index = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>index</Text>
      {/* <Link
        // href={"/setting?name=malik"}
        href={{ pathname: "/setting", params: { name: "malik" } }}
        style={{
          marginTop: 20,
          backgroundColor: "coral",
          width: 100,
          padding: 10,
          borderRadius: 10,
        }}
      >
        Go to setting
      </Link> */}
      {/* Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("(tabs)", {
            name: "malik",
          });
        }}
        style={{
          marginTop: 20,
          backgroundColor: "coral",
          width: 100,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text>Go to Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
