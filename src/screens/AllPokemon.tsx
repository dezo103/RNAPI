import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import {api} from "../api/api";


type PokemonListItem = {
    name: string
    url: string
}

export const AllPokemon = () => {
    const [dataPok, setDataPok] = useState<PokemonListItem[] | null>(null)

    const getPokemon = async () => {
        const res = await api.getAllPokemon()
        setDataPok(res.data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={dataPok}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
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
        backgroundColor: '#8e83f1',
        justifyContent: "center",
        alignItems: "center"
    },
});

