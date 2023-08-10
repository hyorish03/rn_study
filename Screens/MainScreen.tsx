import React from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import CheckBoxUnchecked from "../assets/svg/checkbox-uncheck.svg";
import CheckBoxChecked from "../assets/svg/checkbox-check.svg";
import CancelIcon from "../assets/svg/cancel.svg";

function MainScreen() {
  return (
    <SafeAreaView>
      <View>
        <Pressable hitSlop={20}></Pressable>
        <CheckBoxUnchecked />
        <CheckBoxChecked />
        <CancelIcon />
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;
