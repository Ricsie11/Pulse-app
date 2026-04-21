import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRef, useState } from "react";
import { router } from "expo-router";

const screenWidth = Dimensions.get("window").width;


type Slide = {
  id: number;
  title: string;
  description: string;
  image: ReturnType<typeof require>;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Stay On Top of Your Day",
    description:
      "Organize your tasks in one place and never forget what needs to get done.",
    image: require("../assets/images/DocBackground.png"),
  },
  {
    id: 2,
    title: "Track Your Progress",
    description:
      "Mark tasks as done and watch your productivity grow one check at a time.",
    image: require("../assets/images/DocBackground.png"),
  },
  {
    id: 3,
    title: "More Comfortable Chat With the Doctor",
    description:
      "Book an appointment with doctor. Chat with doctor via appointment letter and get consultation.",
    image: require("../assets/images/DocBackground.png"),
  },
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // track active slide text separately so white card updates while scrolling
  const activeSlide = slides[currentIndex];

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({ index: slides.length - 1 });
  };

  const handleGetStarted = () => {
    router.replace("/(auth)/Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Background1.jpg")}
        style={styles.purpleBg}
      />

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.slideImageContainer}>
            <Image source={item.image} style={styles.docImage} />
          </View>
        )}
      />

      <View style={styles.whiteCard}>
        <Text style={styles.title}>{activeSlide.title}</Text>
        <Text style={styles.description}>{activeSlide.description}</Text>

        <View style={styles.dotsContainer}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentIndex && styles.activeDot]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentIndex < slides.length - 1 ? (
            <TouchableOpacity style={styles.button} onPress={handleSkip}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  purpleBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  flatList: {
    flex: 1,
  },

  slideImageContainer: {
    width: screenWidth,
    flex: 1,
  },

  docImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    // objectFit: "cover",
  },


  whiteCard: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 50,
    marginTop: -30,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 20,
    backgroundColor: "#7a3b83",
  },

  buttonContainer: {
    width: "100%",
  },

  button: {
    backgroundColor: "#7a3b83",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
