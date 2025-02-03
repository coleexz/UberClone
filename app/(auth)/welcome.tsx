import React, { useRef } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { verifyInstallation } from "nativewind";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      {/* Botón para saltar el Onboarding */}
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex items-center p-3 border-2 border-red-500"
      >
        <Text className="text-red-500 text-sm font-light">Skip</Text>
      </TouchableOpacity>

      {/* Swiper con contenido */}
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-1 mx-1 bg-gray-300" />}
        activeDot={<View className="w-8 h-1 mx-1 bg-blue-500" />}
      >
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold">Pantalla 1</Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold">Pantalla 2</Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold">Pantalla 3</Text>
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
