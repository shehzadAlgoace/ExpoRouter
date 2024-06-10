import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const setting = () => {
  const route = useRouter();
  const param = useLocalSearchParams();
  console.log("🚀 ~ setting ~ param:", param);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }} onPress={() => route.back()}>
        setting
      </Text>
    </View>
  );
};

export default setting;
