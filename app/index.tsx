{
  /*
import React from "react";
import { Redirect } from "expo-router";
import { View, Text } from "react-native";

import { useAuth } from "@clerk/clerk-react";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
*/
}

import React, { useEffect } from "react";
import { Redirect } from "expo-router";
import { View, Text } from "react-native";

import { useAuth } from "@clerk/clerk-react";

const Home = () => {
  const { isSignedIn, signOut } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      signOut();
      return <Redirect href="/(auth)/welcome" />;
    }
  }, [isSignedIn, signOut]);

  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
