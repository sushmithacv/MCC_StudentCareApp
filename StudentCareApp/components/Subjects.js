import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  PaperProvider,
  Text,
  TextInput,
  List,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Subjects() {
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [courses, setCourses] = useState([]);
  const [average, setAverage] = useState(null);

  const handleAddCourse = () => {
    if (subject && marks) {
      const marksNum = parseFloat(marks);
      if (!isNaN(marksNum)) {
        setCourses((prevCourses) => [
          ...prevCourses,
          { subject, marks: marksNum },
        ]);
        setSubject("");
        setMarks("");
        calculateAverage();
      } else {
        alert("Please enter valid marks.");
      }
    } else {
      alert("Please enter both subject and marks.");
    }
  };

  const calculateAverage = () => {
    if (courses.length > 0) {
      const totalMarks = courses.reduce((sum, course) => sum + course.marks, 0);
      const avg = totalMarks / courses.length;
      setAverage(avg.toFixed(2));
    }
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        <View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.headerSubject}>
          <Text style={styles.headerTextsubject}>Computer Science</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label="Subject"
            value={subject}
            onChangeText={setSubject}
            style={styles.input}
          />
          <TextInput
            label="Marks"
            value={marks}
            keyboardType="numeric"
            onChangeText={setMarks}
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleAddCourse}
            style={styles.button}
          >
            Add Subject and Marks
          </Button>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.courseListContainer}>
          <Text style={styles.courseListTitle}>
            Subjects and Marks Information:
          </Text>
          {courses.length > 0 ? (
            <List.Section>
              {courses.map((course, index) => (
                <List.Item
                  key={index}
                  title={course.subject}
                  description={`Marks: ${course.marks}`}
                  left={(props) => <List.Icon {...props} icon="book" />}
                />
              ))}
            </List.Section>
          ) : (
            <Text>No subjects added yet.</Text>
          )}
        </View>

        <Divider style={styles.divider} />

        {average !== null && (
          <View style={styles.averageContainer}>
            <Text style={styles.averageText}>Average Marks: {average}</Text>
          </View>
        )}

        <View style={styles.header}>
          <Text style={styles.headerText}>UoV @ 2025</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerSubject: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTextsubject: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  divider: {
    marginVertical: 20,
  },
  courseListContainer: {
    marginBottom: 20,
  },
  courseListTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  averageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  averageText: {
    fontSize: 18,
    fontWeight: "bold",
  },
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
});
