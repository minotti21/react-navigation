import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProdutorRotas from "./ProdutorRotas";
import MelhoresProdutoresRotas from "./MelhoresProdutoresRotas";
import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg'

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#2a9f85',
                tabBarInactiveTintColor: '#c7c7c7',
                tabBarIcon: ({ color }) => {
                    let Icon = Home;

                    if (route.name === 'Melhores Produtores') {
                        Icon = Coracao
                    }

                    return <Icon color={color} width={20} />

                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginBottom: 6
                },
                tabBarIconStyle: {
                    marginTop: 6
                },
                tabBarStyle: {
                    height: 60,
                    elevation: 5,
                }
            })}>
                <Tab.Screen name='Home' component={ProdutorRotas} />
                <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRotas} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
