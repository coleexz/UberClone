import { ActivityIndicator, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useDriverStore, useLocationStore } from "@/store";
import {
  calculateDriverTimes,
  calculateRegion,
  generateMarkersFromData,
} from "../lib/map";
import { useState, useEffect } from "react";
import { MockDrivers } from "@/constants/drivers";
import { MarkerData } from "@/types/type";
import { icons } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { Driver } from "@/types/type";
import MapViewDirections from "react-native-maps-directions";

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

  const { data: drivers, loading, error } = useFetch<Driver[]>("/(api)/driver");

  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    if (markers.length > 0 && destinationLatitude && destinationLongitude) {
      calculateDriverTimes({
        markers,
        userLongitude,
        userLatitude,
        destinationLatitude,
        destinationLongitude,
      }).then((drivers) => {
        setDrivers(drivers as MarkerData[]);
      });
    }
  }, [
    markers,
    destinationLatitude,
    destinationLongitude,
    userLatitude,
    userLongitude,
  ]);

  useEffect(() => {
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

  //en caso de que no haya drivers o esté cargando
  if (loading || !userLatitude || !userLongitude) {
    return (
      <View className="flex justify-between items-center w-full">
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex justify-between items-center w-full">
        <Text>Error loading drivers: {error}</Text>
      </View>
    );
  }

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
        {destinationLatitude && destinationLongitude && (
          <>
            <Marker
              key="destination"
              coordinate={{
                latitude: destinationLatitude,
                longitude: destinationLongitude,
              }}
              title="Destination"
              image={icons.pin}
            />
            <MapViewDirections
              origin={{
                latitude: userLatitude,
                longitude: userLongitude,
              }}
              destination={{
                latitude: destinationLatitude,
                longitude: destinationLongitude,
              }}
              apikey={process.env.EXPO_PUBLIC_GOOGLE_API_KEY!}
              strokeWidth={2}
              strokeColor="#0286FF"
            />
          </>
        )}
      </MapView>
    </View>
  );
};

export default Map;
