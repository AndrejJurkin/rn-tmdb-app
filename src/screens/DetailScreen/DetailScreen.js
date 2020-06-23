import * as React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { getPosterPath } from "../../utils/utils";
import { Button, Text } from "native-base";
import { Video } from "expo-av";

const styles = StyleSheet.create({
  poster: {
    width: "100%",
    height: Dimensions.get("window").height * 0.65,
  },
  title: {
    fontSize: 24,
    marginTop: 40,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    fontWeight: "bold",
  },
  overview: {
    marginLeft: 12,
    marginRight: 12,
  },
  scrollView: {
    flex: 1,
  },
  playButton: {
    position: "absolute",
    right: 24,
    top: Dimensions.get("window").height * 0.65 - 32,
    width: 64,
    height: 64,
    borderRadius: 64,
  },
});

function DetailScreen() {
  const route = useRoute();
  const { movie } = route.params;
  const videoRef = React.useRef(null);

  const handlePlayClick = React.useCallback(() => {
    videoRef.current.presentFullscreenPlayer();
    videoRef.current.playAsync();
  }, [videoRef]);

  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Image
        style={styles.poster}
        source={{
          uri: getPosterPath(movie, false, 780),
        }}
      />
      <Button onPress={handlePlayClick} style={styles.playButton} danger>
        <Text style={{ textAlign: "center", flex: 1 }}>&#9654;</Text>
      </Button>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        volume={1.0}
        isMuted={false}
        shouldPlay={false}
        ref={videoRef}
      />
    </ScrollView>
  );
}

export default DetailScreen;
