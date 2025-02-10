import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { useLocationStore } from "@/store";
import { calculateRegion } from "../lib/map";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLongitude,
    destinationLatitude,
  } = useLocationStore();

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  return (
    <View className="w-full ">
      <MapView
        provider={PROVIDER_DEFAULT}
        style={{ height: 300 }}
        tintColor="#0286FF"
        mapType="mutedStandard"
        showsPointsOfInterest={false}
        showsUserLocation={true}
        userInterfaceStyle="light"
      >
        <Text className="text-2xl">Map</Text>
      </MapView>
    </View>
  );
};

export default Map;
