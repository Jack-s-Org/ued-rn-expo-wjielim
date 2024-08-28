import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icon/icomoon.ttf"),
    "Gilroy-Regular": require("./assets/font/Gilroy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // return <RootNavigator />;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <Icon name="home" size={36} color="blue" />
        <Text style={{ fontFamily: "Gilroy-Regular", fontSize: 36 }}>
          Hello World
        </Text>
        <Text style={{ fontSize: 36 }}>Hello World</Text> */}
        <VideoPlayer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
