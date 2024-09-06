import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  console.log(process.env)
  return (
    <View className="justify-between flex-1">
      {assets && (
        <Video
          className="w-[100%] h-[100%] absolute"
          resizeMode={ResizeMode.COVER}
          isLooping
          isMuted
          shouldPlay
          source={{ uri: assets[0].uri }}
        />
      )}
      <View className="mt-20 p-5">
        <Text className="text-[36px] font-extrabold text-white uppercase">
          Ready to change the way you exchange money?
        </Text>
      </View>
      <View className="flex-row justify-center gap-5 mb-[60px] px-5">
        <Link
          href={"/login"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
        >
          <TouchableOpacity className="text-[36px] font-extrabold text-white uppercase">
            <Text className="text-white text-xl font-medium">Login</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/signup"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "#fff" },
          ]}
        >
          <TouchableOpacity className="text-[36px] font-extrabold text-white uppercase">
            <Text className=" text-xl font-medium">Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
