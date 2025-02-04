import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import InputField from "@/components/InputField";
import { images } from "@/constants";
import { icons } from "@/constants";
import { useState } from "react";
import { Link, router } from "expo-router";

import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white  ">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-3xl text-black font-JakartaBold absolute bottom-5 left-5">
          Welcome!
        </Text>
      </View>

      <View className="p-5">
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={icons.email}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          icon={icons.lock}
          secureTextEntry={true}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <CustomButton
          title="Sign In "
          onPress={onSignInPress}
          className="mt-8 mb-4 "
        />
        <OAuth />

        <View className="flex flex-row justify-center items-center mt-10">
          <Text className="text-lg text-center text-general-200">
            Don't have an account?
          </Text>
          <Link href="/sign-up" className="ml-2 text-lg">
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
