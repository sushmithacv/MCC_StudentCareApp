import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ route }) {
  const { studentdata } = route.params;
  const navigate = useNavigation();
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

        <View style={styles.studentInfoContainer}>
          <Image
            style={styles.profilePicContainer}
            source={studentdata.profile_pic}
          ></Image>
          <Text style={styles.studentName}>Name:{studentdata.username}</Text>
          <Text style={styles.studentDetails}>Age:{studentdata.age}</Text>
          <Text style={styles.studentDetails}>Gender:{studentdata.gender}</Text>
        </View>

        <View style={styles.contactInfoContainer}>
          <Text style={styles.contactTitle}>Contact Information</Text>
          <Text style={styles.contactDetails}>Email: {studentdata.email}</Text>
          <Text style={styles.contactDetails}>Phone: {studentdata.phone}</Text>
          <Text style={styles.contactDetails}>
            Address: {studentdata.address}
          </Text>
        </View>

        <Divider></Divider>
        <View style={styles.biologicalInfoContainer}>
          <Text style={styles.biologicalTitle}>Biological Information</Text>
          <Text style={styles.biologicalDetails}>
            Gender: {studentdata.gender}
          </Text>
          <Text style={styles.biologicalDetails}>Age: {studentdata.age}</Text>
          <Text style={styles.biologicalDetails}>
            Blood Group: {studentdata.blood_group}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => {
              navigate.navigate("profile", { studentdata });
            }}
            style={styles.button}
          >
            Profile
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              navigate.navigate("course");
            }}
            style={styles.button}
          >
            Course
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              navigate.navigate("subjects");
            }}
            style={styles.button}
          >
            Subjects
          </Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
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
  studentInfoContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profilePicContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#8b008b", // Matching border color
  },
  studentDetails: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
    textAlign: "center",
  },
  studentName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  contactInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#8b008b",
  },
  contactDetails: {
    fontSize: 10,
    color: "#555",
    marginBottom: 5,
  },

  biologicalInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  biologicalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#8b008b",
  },
  biologicalDetails: {
    fontSize: 10,
    color: "#555",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    marginHorizontal: 5,
  },
});
