import { InputComponent } from "@/components/inputComponent";
import { useRouter, type Href } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const VALID_EMAIL = "teste125@gmail.com";
const VALID_PASSWORD = "teste125";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<string>("");

  const router = useRouter();

  const handlerLogin = () => {
    // Regra 1: campos não podem ficar vazios
    if (!email || !password) {
      setIsError("Por favor, preencha todos os campos.");
      return;
    }

    // Regra 2: email deve conter '@'
    if (!email.includes("@")) {
      setIsError("Informe um e-mail válido.");
      return;
    }

    // Regra 3: senha deve ter no mínimo 6 caracteres
    if (password.length < 6) {
      setIsError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    // Regra 4: email e senha devem corresponder ao usuário fixo
    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      setIsError("E-mail ou senha incorretos.");
      return;
    }

    // Regra 5: tudo certo, navegar para o dashboard
    setIsError("");
    router.replace("/(tabs)/dashboard" as Href);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExpoFlix</Text>
      <InputComponent
        label="Email"
        placeholder="Digite o Email"
        type="email-address"
        value={email}
        setValue={setEmail}
      />
      <InputComponent
        label="Senha"
        placeholder="Digite a Senha"
        type="default"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      {isError ? <Text style={styles.errorMessage}>{isError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handlerLogin}>
        <Text style={styles.buttonTitle}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19244B",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 24,
  },
  errorMessage: {
    alignSelf: "center",
    color: "#F5482F",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#86A16C",
    width: 300,
    height: 40,
    marginTop: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
});
