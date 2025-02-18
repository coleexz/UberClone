import React from 'react';
import { Image, View, Text } from 'react-native';
import CustomButton from './CustomButton';
import { icons } from '../constants';

const OAuth = () => {

    const handleGoogleSignIn = async () => {

    }

    return (
        <View>
            <View className = "flex flex-row justify-center items-center mt-4 gap-x-3">

                <View className = "flex-1 h-[1px] bg-general-100"></View>
                <View className = "text-general-100">
                    <Text className = "text-lg">Or</Text>
                </View>
                <View className = "flex-1 h-[1px] bg-general-100"></View>


            </View>

            <View className = "flex flex-col justify-center items-center my-4">
                    <CustomButton
                        title="Log In with Google"
                        IconLeft={() => (
                        <Image
                        source={icons.google}
                        resizeMode="contain"
                        className="w-5 h-5 mx-3"
                        />
                        )}
                        bgVariant= "outline"
                        textVariant = "primary"
                        onPress = {handleGoogleSignIn}
                        className="mt-4 mb-8"
                    />
                </View>
        </View>
    );
}

export default OAuth;
