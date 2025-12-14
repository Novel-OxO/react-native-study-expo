import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * SafeAreaView를 이용하면 아이폰 등 노치를 고려하여 화면을 보여줄 수 있다.
 * Pressable을 이용하면 다양한 터치 이벤트를 핸들링 가능하다.
 * expo-router를 이용하여 페이지 전환이 가능하다.
 */
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.push("/setting")}>
        <Text>홈스크린</Text>
      </Pressable>
    </SafeAreaView>
  );
}
