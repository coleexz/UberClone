import { View, Text } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';



export default function HomeScreen() {
  return (
      <SafeAreaView className = "flex-1 bg-red-500 justify-center items-center">
          <Text>
          Hello World!
          </Text>
      </SafeAreaView>
  );
}

