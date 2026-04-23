import background from "@/assets/images/Background1.jpg";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

const favouriteDoctors = [
  {
    id: 1,
    name: "Dr. Esther",
    specialty: "Dentist",
    rating: 4.5,
    image:
      "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827757.jpg",
  },
  {
    id: 2,
    name: "Dr. Warren",
    specialty: "Physician",
    rating: 4.8,
    image:
      "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
  },
];

const topDoctors = [
  {
    id: 1,
    name: "Dr. Jenny Wilson",
    specialty: "Neurologist | Vcare Clinic",
    rating: 5.0,
    reviews: 332,
    image:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
  },
  {
    id: 2,
    name: "Dr. Albert",
    specialty: "Cardiologist | City Hospital",
    rating: 4.7,
    reviews: 210,
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
  },
  {
    id: 3,
    name: "Dr. Amaka",
    specialty: "Pediatrician | LifeCare",
    rating: 4.9,
    reviews: 180,
    image:
      "https://img.freepik.com/free-photo/african-american-female-doctor_23-2148848868.jpg",
  },
];

const categories = [
  "🔥 All",
  "🤒 Fever",
  "🤧 Cough",
  "🤢 Nausea",
  "🤕 Headache",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("🔥 All");

  return (
    // 👇 edges={["top"]} removes the bottom safe area gap
    <SafeAreaView style={styles.container} edges={["top"]}>

      {/* PURPLE BACKGROUND */}
      <Image source={background} style={styles.image} />

      {/* HEADER */}
      <View style={styles.headerRow}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/portrait-happy-successful-business-woman-inside-office-workplace-worker-smiling-looking-camera-laptop-411470561.jpg",
          }}
          style={styles.profileIcon}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.text0}>Hello, welcome 🎉</Text>
          <Text style={styles.text1}>Savannah Nguyen</Text>
        </View>
        <View style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={22} color="white" />
          <View style={styles.notificationDot} />
        </View>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Ionicons
          name="search-outline"
          size={20}
          color="rgba(255,255,255,0.7)"
        />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search Doctor..."
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons
              name="close-circle"
              size={20}
              color="rgba(255,255,255,0.7)"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* WHITE CARD */}
      <ScrollView
        style={styles.whiteCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      >
        {/* CATEGORIES */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setSelected(item)}
              style={[
                styles.categoryItem,
                selected === item && styles.categoryItemActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selected === item && styles.categoryTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* FAVOURITE DOCTORS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favourite Doctor</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.favouriteList}
        >
          {favouriteDoctors.map((doctor) => (
            <TouchableOpacity key={doctor.id} style={styles.favouriteCard}>
              <Image
                source={{ uri: doctor.image }}
                style={styles.favouriteImage}
              />
              <View style={styles.favouriteInfo}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={14} color="#f5a623" />
                  <Text style={styles.ratingText}>{doctor.rating}</Text>
                </View>
                <Text style={styles.specialty}>{doctor.specialty}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* TOP DOCTORS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Doctor</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {topDoctors.map((doctor) => (
          <TouchableOpacity key={doctor.id} style={styles.topDoctorCard}>
            <Image
              source={{ uri: doctor.image }}
              style={styles.topDoctorImage}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.specialty}>{doctor.specialty}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color="#f5a623" />
                <Text style={styles.ratingText}>
                  {doctor.rating} ({doctor.reviews} reviews)
                </Text>
              </View>
            </View>
            <Ionicons name="ellipsis-horizontal" size={20} color="#aaa" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  // HEADER
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 12,
  },

  profileIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#dfc4d6",
  },

  text0: {
    fontSize: 14,
    color: "white",
  },

  text1: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  notificationBtn: {
    position: "relative",
  },

  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    right: 0,
  },

  // SEARCH BAR
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 8,
    marginTop: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "white",
  },

  // WHITE CARD
  whiteCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },

  // CATEGORIES
  categoryList: {
    paddingHorizontal: 20,
    gap: 10,
    alignItems: "center",
  },

  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    alignSelf: "flex-start",
  },

  categoryItemActive: {
    backgroundColor: "#7a3b83",
  },

  categoryText: {
    color: "#555",
    fontSize: 14,
  },

  categoryTextActive: {
    color: "white",
    fontWeight: "bold",
  },

  // SECTION HEADER
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  seeAll: {
    fontSize: 14,
    color: "#7a3b83",
    fontWeight: "600",
  },

  // FAVOURITE DOCTORS
  favouriteList: {
    paddingHorizontal: 20,
    gap: 14,
  },

  favouriteCard: {
    width: (screenWidth - 60) / 2,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    overflow: "hidden",
  },

  favouriteImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },

  favouriteInfo: {
    padding: 8,
  },

  // TOP DOCTORS
  topDoctorCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
    gap: 12,
  },

  topDoctorImage: {
    width: 65,
    height: 65,
    borderRadius: 12,
    resizeMode: "cover",
  },

  doctorName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  specialty: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },

  ratingText: {
    fontSize: 13,
    color: "#555",
  },
});