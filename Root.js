import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import {
  Backdrop,
  List,
  ListItem,
  Icon,
  IconButton,
  Avatar,
  Heading
} from "material-bread";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center"
  },
  backdropHeader: {
    height: 56,
    flexDirection: "row",
    alignItems: "center"
  },
  backdropHeaderTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
    marginLeft: 72
  }
});

const backLayerRevealed = (
  <View style={{ flex: 1, width: "100%" }}>
    <View style={styles.backdropHeader}>
      <Text style={styles.backdropHeaderTitle}>Navigation</Text>
    </View>

    <List
      style={{
        width: "100%",
        backgroundColor: "transparent"
      }}
    >
      <ListItem
        text={"Home"}
        textStyle={{ color: "white" }}
        selected
        style={{ backgroundColor: "transparent", flex: 1 }}
        icon={<Icon name={"home"} size={24} color={"white"} />}
      />
      <ListItem
        text={"Music"}
        textStyle={{ color: "white" }}
        style={{ backgroundColor: "transparent" }}
        icon={<Icon name={"music-note"} size={24} color={"white"} />}
      />
      <ListItem
        text={"Favorites"}
        textStyle={{ color: "white" }}
        style={{ backgroundColor: "transparent" }}
        icon={<Icon name={"favorite"} size={24} color={"white"} />}
      />
      <ListItem
        text={"Settings"}
        textStyle={{ color: "white" }}
        style={{ backgroundColor: "transparent" }}
        icon={<Icon name={"settings"} size={24} color={"white"} />}
      />
    </List>
  </View>
);

const album = (
  <Avatar
    type="icon"
    content="album"
    contentColor={"#ececec"}
    color={"#a3a3a3"}
    size={40}
  />
);
const iconFav = <IconButton name="favorite" size={24} color="#6e6e6e" />;

export default class Page extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            flex: 1,
            width: "100%"
          }}
        >
          <Backdrop
            backLayerConcealed={
              <View style={styles.backdropHeader}>
                <Text style={styles.backdropHeaderTitle}>App</Text>
              </View>
            }
            backLayerRevealed={
              <View style={{ flex: 1, width: "100%" }}>
                <View style={styles.backdropHeader}>
                  <Text style={styles.backdropHeaderTitle}>Navigation</Text>
                </View>

                <List
                  style={{
                    width: "100%",
                    backgroundColor: "transparent"
                  }}
                >
                  <ListItem
                    text={"Home"}
                    textStyle={{ color: "white" }}
                    selected
                    style={{ backgroundColor: "transparent" }}
                    icon={<Icon name={"home"} size={24} color={"white"} />}
                  />
                  <ListItem
                    text={"Music"}
                    textStyle={{ color: "white" }}
                    style={{ backgroundColor: "transparent" }}
                    icon={
                      <Icon name={"music-note"} size={24} color={"white"} />
                    }
                  />
                  <ListItem
                    text={"Favorites"}
                    textStyle={{ color: "white" }}
                    style={{ backgroundColor: "transparent" }}
                    icon={<Icon name={"favorite"} size={24} color={"white"} />}
                  />
                  <ListItem
                    text={"Settings"}
                    textStyle={{ color: "white" }}
                    style={{ backgroundColor: "transparent" }}
                    icon={<Icon name={"settings"} size={24} color={"white"} />}
                  />
                </List>
              </View>
            }
            offset={260}
          >
            <View style={styles.container}>
              <Heading
                text={"Albums"}
                style={{
                  alignSelf: "flex-start",
                  marginLeft: 20,
                  fontSize: 20
                }}
              />
              <ListItem
                text={"Back in Black"}
                secondaryText={"AC/DC"}
                media={
                  <Avatar
                    type="icon"
                    content="album"
                    contentColor={"#ececec"}
                    color={"#a3a3a3"}
                    size={40}
                  />
                }
                actionItem={
                  <IconButton name="favorite" size={24} color="#6e6e6e" />
                }
              />
              <ListItem
                text={"Hotel California"}
                secondaryText={"Eagles"}
                media={
                  <Avatar
                    type="icon"
                    content="album"
                    contentColor={"#ececec"}
                    color={"#a3a3a3"}
                    size={40}
                  />
                }
                actionItem={
                  <IconButton name="favorite" size={24} color="#6e6e6e" />
                }
              />
              <ListItem
                text={"Dark Side of the Moon"}
                secondaryText={"Pink Floyd "}
                media={
                  <Avatar
                    type="icon"
                    content="album"
                    contentColor={"#ececec"}
                    color={"#a3a3a3"}
                    size={40}
                  />
                }
                actionItem={
                  <IconButton name="favorite" size={24} color="#6e6e6e" />
                }
              />
              <ListItem
                text={"Led Zeppelin IV"}
                secondaryText={"Led Zeppelin"}
                media={
                  <Avatar
                    type="icon"
                    content="album"
                    contentColor={"#ececec"}
                    color={"#a3a3a3"}
                    size={40}
                  />
                }
                actionItem={
                  <IconButton name="favorite" size={24} color="#6e6e6e" />
                }
              />
            </View>
          </Backdrop>
        </View>
      </SafeAreaView>
    );
  }
}
