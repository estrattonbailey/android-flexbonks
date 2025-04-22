import { View, Text, TextStyle } from "react-native";

const common: TextStyle = {
  paddingTop: 8,
  color: "black",
  fontWeight: "700",
  flexShrink: 1,
  flexBasis: "auto",
  /**
   * Value of 1 helps with taking up as much space as it needs to, but then
   * short names align to the left
   */
  flexGrow: 0,
  /**
   * Adjusting font size also arbitrarily affects the truncation of text
   */
  fontSize: 24,
};

export default function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 80,
      }}
    >
      <View
        style={{
          padding: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "red",
          }}
        >
          <Text
            testID="profileHeaderDisplayName"
            numberOfLines={1}
            style={common}
          >
            Tom
          </Text>
          <View>
            <View style={{ width: 40, height: 40, backgroundColor: "black" }} />
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "red",
          }}
        >
          <Text
            testID="profileHeaderDisplayName"
            numberOfLines={1}
            style={common}
          >
            Today's Tom Sawyeeeeeeeeeeeeee Mean Mean Stride
          </Text>
          <View>
            <View style={{ width: 40, height: 40, backgroundColor: "black" }} />
          </View>
        </View>
      </View>

      {/**
       * The content of the text clearly names a difference too
       */}
      <View
        style={{
          padding: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "red",
          }}
        >
          <Text
            testID="profileHeaderDisplayName"
            numberOfLines={1}
            style={common}
          >
            Today Tom Sawyeeeeeeeeeeeeee Mean Mean Stride
          </Text>
          <View>
            <View style={{ width: 40, height: 40, backgroundColor: "black" }} />
          </View>
        </View>
      </View>
    </View>
  );
}
