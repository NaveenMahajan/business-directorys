import { tokenCache } from "@/business-directory/utils/tokenCache";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ClerkProvider>
  );
}
