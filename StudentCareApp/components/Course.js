import { Image, ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider, Text, Divider } from "react-native-paper";

export default function Course() {
  const sampleCourseData = {
    courseName: "Introduction to React Native",
    courseCode: "CS101",
    department: "Engineering",
    duration: "4 Years",
    description: "Focus on Programming Algorithm and System Design",
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
        <View style={styles.courseInfoContainer}>
          <Text style={styles.title}>Course Information</Text>

          {/* Course Name */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Course Name: </Text>
            {sampleCourseData.courseName}
          </Text>

          {/* Course Code */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Course Code: </Text>
            {sampleCourseData.courseCode}
          </Text>

          {/* Department */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Department: </Text>
            {sampleCourseData.department}
          </Text>

          {/* Duration */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Duration: </Text>
            {sampleCourseData.duration}
          </Text>

          {/* Description */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Description: </Text>
            {sampleCourseData.description}
          </Text>

          <Divider style={styles.divider} />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV @2025</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  courseInfoContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 16,
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
