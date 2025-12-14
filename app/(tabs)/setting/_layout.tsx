import { Stack } from "expo-router";
/**
 * 탭이 아닌 레이아웃 에서는 Stack을 이용한다.
 */
export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "설정",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
