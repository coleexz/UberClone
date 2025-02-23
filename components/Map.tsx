import { Text, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useDriverStore, useLocationStore } from "@/store";
import { calculateRegion, generateMarkersFromData } from "../lib/map";
import { useState, useEffect } from "react";
import { MockDrivers } from "@/constants/drivers";
import { MarkerData } from "@/types/type";
import { icons } from "@/constants";

interface MapProps {
  height: number;
}

const Map = ({ height }: MapProps) => {
  const {
    userLongitude,
    userLatitude,
    destinationLongitude,
    destinationLatitude,
  } = useLocationStore();

  const { selectedDriver, setDrivers } = useDriverStore();

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    setDrivers(MockDrivers);

    if (Array.isArray(MockDrivers)) {
      if (!userLatitude || !userLongitude) return;
      const newMarkers = generateMarkersFromData({
        data: MockDrivers,
        userLatitude,
        userLongitude,
      });
      setMarkers(newMarkers);
    }
  }, [MockDrivers]);

  return (
    <View className="w-full ">
      <MapView
        provider={PROVIDER_DEFAULT}
        style={{ height: height }}
        tintColor="#0286FF"
        mapType="mutedStandard"
        showsPointsOfInterest={false}
        showsUserLocation={true}
        userInterfaceStyle="light"
        initialRegion={region}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            image={
              selectedDriver === marker.id ? icons.selectedMarker : icons.marker
            }
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
