import { Movie } from "@/types/movie.type";
import { View, Text, StyleSheet, Image } from "react-native";

<<<<<<< HEAD
=======
//AQUI TEMOS UMA PROP CHAMADA 'item' DO TIPO 'Movie'. O 'Movie' É UM ARQUIVO QUE ESTA DENTRO DA PASTA TYPES.
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
type Props = {
  item: Movie;
};

<<<<<<< HEAD
=======
//COMPLETE OS VALORES DO OBJETO PARA QUE FUNCINE.
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
export const MovieCard = ({ item }: Props) => {
  return (
    <View style={styles.card}>
      <Image src={item.poster} style={styles.image} resizeMode="contain" />
<<<<<<< HEAD
      <View style={styles.info}>
        <Text style={styles.titleMovie}>{item.title}</Text>
        <Text style={styles.text}>{item.release_date}</Text>
        <Text style={styles.text}>Lang: {item.language}</Text>
        <View style={styles.rank}>
          <Text style={styles.text}>Rank:</Text>
          <Text style={{ color: "yellow" }}>{item.rank}</Text>
=======
      <View>
        <Text style={styles.titleMovie}>{item.title}</Text>
        <Text>{item.}</Text>
        <Text>Lang: {item.}</Text>
        <View style={styles.rank}>
          <Text>Rank:</Text>
          <Text style={{ color: "yellow" }}>{item.}</Text>
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#5C668B",
    marginBottom: 8,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    gap: 8,
  },
  titleMovie: {
    fontWeight: "500",
    fontSize: 16,
<<<<<<< HEAD
    color: "white",
    marginBottom: 4,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#ddd",
    fontSize: 13,
=======
  },
  containerCard: {
    flexDirection: "row",
    gap: 4,
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
  },
  image: {
    width: 80,
    height: 110,
<<<<<<< HEAD
    borderRadius: 4,
=======
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
  },
  rank: {
    flexDirection: "row",
    gap: 4,
<<<<<<< HEAD
    marginTop: 2,
=======
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
  },
});
