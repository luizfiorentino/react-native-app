// src/App.js
import React, { useRef } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const randomNum = useRef(Math.random()).current;

  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      <ScrollView>
        <ActivityIndicator
          size="large"
          color="#c1262c"
          style={{ marginBottom: 30 }}
        />
        {[0, 1, 2, 3, 4].map((i) => {
          return (
            <TouchableOpacity>
              <Image
                key={i}
                source={{
                  uri: `https://picsum.photos/500/300?random=${randomNum + i}`,
                }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
              <Button
                onPress={() => Alert.alert("Click for more cool images")}
                title="Cool images"
                color="#c1262c"
              />
            </TouchableOpacity>
          );
        })}
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <View>
          <Button
            onPress={() => Alert.alert("Learning RN is so easy")}
            title="Learn More"
            color="#c1262c"
          />
        </View>
      </ScrollView>
    </View>
  );
}
