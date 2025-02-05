import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";

import { MockRides } from "@/constants/rides";
import RideCard from "@/components/RideCard";

export default function Page() {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <FlatList
        data={MockRides.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  );
}
