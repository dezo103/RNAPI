import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {AllPokemon} from "./AllPokemon";

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animation: "fade"}}>
                <Stack.Screen name="Stack1" component={AllPokemon}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Stack = createNativeStackNavigator<any>();

export default Main;