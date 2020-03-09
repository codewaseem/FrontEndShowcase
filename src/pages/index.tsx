import React from "react";
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react";

interface indexProps {}

@inject("counterStore")
@observer
class Index extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello, World </Text>
      </View>
    );
  }
}

export default Index;
