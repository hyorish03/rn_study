import React from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import CheckBoxUnchecked from "../assets/svg/checkbox-unchecked.svg";
import CheckBoxChecked from "../assets/svg/checkbox-check.svg";
import CancelIcon from "../assets/svg/cancelIcon.svg";

function MainScreen() {
  return (
    <SafeAreaView>
      <View>
        <Pressable hitSlop={20}></Pressable>
        <CheckBoxUnchecked  width={10} height={10}  />
        <CheckBoxChecked  width={10} height={10} />
        <CancelIcon width={10} height={10} />
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;
