import * as React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "native-base";
import useFetch from "use-http";
import MovieCard from "../MovieCard/MovieCard";

const styles = StyleSheet.create({
  title: {
    paddingTop: 12,
    paddingLeft: 8,
  },
  errorText: {
    color: "red",
    padding: 32,
  },
});

function MovieCarousel({ tmdbEndpoint, title }) {
  const { loading, error, data: movies } = useFetch(tmdbEndpoint, {}, []);

  function extractKey(item) {
    return `${item.id}-${item.title}`;
  }

  const renderItem = React.useCallback(
    ({ item }) => <MovieCard movie={item} loading={loading} />,
    [loading]
  );

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {error && <Text style={styles.errorText}>Failed to load data</Text>}
      {loading && <Text>Loading...</Text>}
      {movies && (
        <FlatList
          horizontal
          data={movies.results}
          keyExtractor={extractKey}
          renderItem={renderItem}
          showsHorizontalScrollIndicatoree={false}
        />
      )}
    </View>
  );
}

export default MovieCarousel;
