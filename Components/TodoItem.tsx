import React from "react";
import { Pressable, View, Text } from "react-native";
function TodoItem() {
  return (
    <View>
      <Pressable hitSlop={20}>
        <CheckboxUnchecked />
        <CheckboxChecked />
      </Pressable>
      <Text>코딩하기</Text>
    </View>
  );
}

export default TodoItem;
