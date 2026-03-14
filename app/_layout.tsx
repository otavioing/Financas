import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect } from 'react';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  const colorScheme = useColorScheme();

  useEffect(() => {

    const verificarLogin = async () => {

      const usuario = await AsyncStorage.getItem("usuario");

      if (usuario) {
        router.replace("/(tabs)");
      } else {
        router.replace("/login");
      }

    };

    verificarLogin();

  }, []);

  return (

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>

        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" options={{ headerShown: false }} />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="(outros)/transporte" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/compras" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/alimentacao" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/entreterimento" options={{ headerShown: false }} />
        <Stack.Screen name="(outros)/saude" options={{ headerShown: false }} />

        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />

      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>

  );
}
