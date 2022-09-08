import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from "react-native";
import {api} from "../api/api";
import {useAppNavigation} from "./types";


const {width, height} = Dimensions.get("screen")

type PokemonListItem = {
    name: string
    url: string
}

export const AllPokemon = () => {
    const [dataPok, setDataPok] = useState<PokemonListItem[] | null>(null)
    const navigation = useAppNavigation()

    const getPokemon = async () => {
        const res = await api.getAllPokemon(50)
        setDataPok(res.data.results)
    }

    useEffect(() => {
        getPokemon().finally(() => {})
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={dataPok}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity activeOpacity={0.2}
                                          onPress={() => navigation.navigate('CurrentPokemon', {url: item.url})}>
                            <View style={styles.row}>
                                <Text style={styles.pokemonName}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
            {/*<Text>{JSON.stringify(dataPok, null, 2)}</Text>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d2aab5',
        paddingHorizontal: 20
    },
    row: {
        height: 48,
        backgroundColor: '#4dc4cb',
        marginVertical: 4,
        paddingHorizontal: 10,
        width: (width - 50) / 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    pokemonName: {
        fontSize: 26,
        fontWeight: '500'
    }
});

