import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Audio, Video, ResizeMode } from "expo-av";

export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  React.useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={StyleSheet.absoluteFill}
        // source={{
        //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        source={require("@/assets/videos/big_buck_bunny.mp4")}
        // useNativeControls={true}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        playsInSilentModeIOS={true} // Allow playing audio in silent mode on IOS
        shouldPlay={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
