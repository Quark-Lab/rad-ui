import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-foreground text-2xl font-bold">راد UI</Text>
      <Text className="text-muted-foreground mt-4">Rad UI Mobile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

