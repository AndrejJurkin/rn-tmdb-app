import * as React from "react";
import { View, FlatList } from "react-native";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../../constants";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";

const sectionList = [
  {
    title: "Popular Movies",
    tmdbEndpoint: `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
  },
  {
    title: 'Popular TV Series',
    tmdbEndpoint: `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}`,
  },
  {
    title: 'Family',
    tmdbEndpoint: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10751`
  },
  {
    title: 'Documentary',
    tmdbEndpoint: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`
  }
];

function HomeScreen() {
  const extractKey = (item) => item.tmdbEndpoint;

  const renderItem = ({ item }) => <MovieCarousel {...item} />;

  return (
    <View>
      <FlatList
        data={sectionList}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </View>
  );
}
export default HomeScreen;
