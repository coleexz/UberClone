import { Text, View } from "react-native";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import GoogleTextInput from "@/components/GoogleTextInput";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const FindRide = () => {
  const router = useRouter();
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout title="Find Ride" snapPoints={["70%"]}>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>

      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setDestinationLocation(location)}
        />

        <CustomButton
          title="Find now"
          onPress={() => router.push("/(root)/confirm-ride")}
          className="mt-10"
        />
      </View>
    </RideLayout>
  );
};

export default FindRide;
