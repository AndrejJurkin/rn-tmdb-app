import * as React from "react";
import { Image, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes";
import {getPosterPath} from "../../utils/utils";

const styles = StyleSheet.create({
  poster: {
    width: 120,
    height: 168,
    margin: 8,
  },
});

function MovieCard({ movie, loading }) {
  const navigation = useNavigation();

  const handleCardClick = React.useCallback(() => {
    navigation.navigate(routes.detail, { movie });
  }, [navigation]);

  return (
    <TouchableHighlight onPress={handleCardClick}>
      <Image
        style={styles.poster}
        source={{
          uri: getPosterPath(movie, loading),
        }}
        onPress={handleCardClick}
      />
    </TouchableHighlight>
  );
}

export default MovieCard;
