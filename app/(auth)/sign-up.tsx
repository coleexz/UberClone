import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import InputField from "@/components/InputField";
import { images } from "@/constants";
import { icons } from "@/constants";
import { useState } from "react";

import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScrollView className="flex-1 bg-white  ">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-3xl text-black font-JakartaBold absolute bottom-5 left-5">
          Create Your Account
        </Text>
      </View>

      <View className="p-5">
        <InputField
          label="Name"
          placeholder="Enter name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
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

        <CustomButton title="Sign Up" className="mt-8 mb-4 " />
        <OAuth />
        <Text className="flex-1 text-center font-JakartaSemiBold text-[#858585]">
          Already have an account? <Text className="text-[#0286FF]">Login</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
