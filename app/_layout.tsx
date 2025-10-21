import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (

  <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(outros)/transporte" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/compras" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/alimentacao" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/entreterimento" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/saude" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        {/* <Stack.Screen name="(tabs)" options={{ presentation: 'modal', title: 'Modal' }} /> */}

        {/* <Stack.Screen name="not-found" options={{ title: 'Oops!' }} /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>

  );
}


