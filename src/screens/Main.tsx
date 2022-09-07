import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {AllPokemon} from "./AllPokemon";
import {CurrentPokemon} from "./CurrentPokemon";

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animation: "fade"}}>
                <Stack.Screen name="AllPokemon" component={AllPokemon}/>
                <Stack.Screen name="CurrentPokemon" component={CurrentPokemon}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Stack = createNativeStackNavigator<any>();

export default Main;