import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2c2c2c',
        tabBarInactiveTintColor: '#8e8e8e', // opcional, ícones inativos
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: 'rgb(255, 255, 255)',
          borderTopWidth: 0,
          elevation: 0, // Android
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Visão Geral',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="orcamentos"
        options={{
          title: 'Orçamentos',
          tabBarIcon: ({ color }) => <MaterialIcons name="pie-chart" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="calculadora"
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color }) => <FontAwesome6 name="calculator" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="configuracoes"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <FontAwesome6 name="gear" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
