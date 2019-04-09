import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Fab, Icon, Appbar, Badge, IconButton } from "material-bread";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Appbar
          barType={"normal"}
          title={"Page Title"}
          navigationType={"menu"}
          onNavigation={() => console.log("onNavigation!")}
          actionItems={[
            <Badge
              containerStyle={{ marginRight: 16, flex: 1 }}
              color={"#e10050"}
              textColor={"white"}
              size={14}
              content={77}
            >
              <IconButton name="favorite" size={24} color={"white"} />
            </Badge>,
            { name: "search", onPress: () => console.log("onSearch") },
            { name: "more-vert" }
          ]}
        />
        <View style={styles.content}>
          <Text>Open up App.js to start working on your app!</Text>
          <Fab style={styles.fab} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  fab: {
    position: "absolute",
    right: 24,
    bottom: 24
  }
});
