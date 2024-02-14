import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HistoryListScreen } from "../screens/HistoryScreen";
import { HomeScreen } from "../screens/HomeScreen";
import TabIcon from "../components/TabIcon";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const getIconName = () => {
              if (route.name === "History") {
                return "time";
              }
              return "home";
            };
            const iconName = getIconName();
            return <TabIcon iconName={iconName} iconColor={color} />;
          },
        };
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen}></BottomTab.Screen>
      <BottomTab.Screen
        name="History"
        component={HistoryListScreen}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};
