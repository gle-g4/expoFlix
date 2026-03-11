import { useRouter } from "expo-router";
<<<<<<< HEAD
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

=======
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//AQUI COMPLETE O CSS DA TELA. DEIXE MINIMAMENTE PARECIDO COM A IMAGEM.
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
export default function Perfil() {
  const router = useRouter();

  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.perfil}>Perfil</Text>
        <View style={styles.perfilContainer}>
          <MaterialCommunityIcons
            name="account-circle"
            size={100}
            color="#86A16C"
            style={styles.avatar}
          />
          <Text style={styles.text}>Nome: Punpun</Text>
          <Text style={styles.text}>Email: boanoite.punpun@gmail.com</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.btnTitle}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#19244B",
  },
  container: {
    flex: 1,
    backgroundColor: "#19244B",
    alignItems: "center",
    paddingTop: 40,
  },
  perfil: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 40,
  },
  perfilContainer: {
    width: "80%",
    backgroundColor: "#2A3560",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    marginBottom: 12,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#5C668B",
    width: "100%",
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
=======
    <View style={styles.container}>
      <Text style={styles.perfil}>Perfil</Text>
      <View style={styles.perfilContainer}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={require("../../../assets/images/punpun.jpg")}
        />
        <Text style={styles.text}>Nome: Punpun</Text>
        <Text style={styles.text}>Email: boanoite.punpun@gmail.com</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.btnTitle}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
