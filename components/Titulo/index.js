import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default function Titulo() {
    return(
        <View style = {style.box}>
            <Text style = { style.texto }>Notícia do meu primeiro app</Text>
        </View>
    )
}