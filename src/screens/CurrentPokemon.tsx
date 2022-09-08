import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from "react-native";
import {CurrentPokemonPropsType} from "./types";
import {api} from "../api/api";


const {width, height} = Dimensions.get("screen")

type Pokemon = {
    id: number
    name: string
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    }
}

export const CurrentPokemon = ({route}: CurrentPokemonPropsType) => {
    const {url} = route.params
    const [urlForRequest, setUrlForRequest] = useState(url)

    const [data, setData] = useState<Pokemon | null>(null)

    useEffect(() => {
        setUrlForRequest(url.replace('https://pokeapi.co/api/v2', ''))
    }, [url])

    const getCurrent = async (url: string) => {
        const res = await api.getCurrentPokemon(url)
        setData(res.data)
    }

    useEffect(() => {
        getCurrent(urlForRequest).finally(() => {
        })
        return () => {
            setData(null)
        }
    }, [])

    return (
        <View>
            {
                data
                    ? <Image
                        source={{uri: data.sprites.other['official-artwork'].front_default}}
                        style={{width, height: height / 2}}
                    />
                    : <Text>Image not found</Text>
            }
            <View style={styles.separator}/>
            {
                data
                    ? <Text style={styles.name}>{data.name}</Text>
                    : <Text>No pokemon</Text>
            }
            <View style={styles.separator}/>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 32,
        fontWeight: '800',
        alignSelf: 'center'
    },
    separator: {
        width: width - 40,
        height: 3,
        alignSelf: 'center',
        marginVertical: 5,
        backgroundColor: '#86c97a'
    }
});


