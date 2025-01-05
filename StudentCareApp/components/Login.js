import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";
import { students } from "../data/StudentsDb";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation();

  const handlebutton = () => {
    // Checking for multiple students
    const student = students.find(
      (student) => student.username === name && student.password === password
    );

    if (student) {
      navigate.navigate("profile", { studentdata: student });
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        <View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.loginText}>Student Login</Text>
          <Divider />
        </View>

        <View style={styles.formcontainer}>
          <TextInput label="Username" mode="outlined" onChangeText={setName} />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onChangeText={setPassword}
          />
          <View style={styles.buttoncontainer}>
            <Button mode="contained" onPress={handlebutton}>
              Login
            </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  header: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8b008b",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    backgroundColor: "#8b008b",
    fontWeight: "bold",
  },
  image: {
    width: "60%",
    height: 100,
    resizeMode: "contain",
    marginTop: 5,
  },
  imagecontain: { alignItems: "center" },
  loginText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  formcontainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttoncontainer: {
    paddingTop: 20,
  },
});
