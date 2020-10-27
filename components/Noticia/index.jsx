import React from 'react';
import { View, Text, Image } from 'react-native';
import image from '../../assets/image.png';
import style from './style'

export default function Noticia() {
    return (
        <View style = {style.box}>
            <Text style ={style.texto}>Oia a Maiko aí</Text>

            <Image style={style.imagem} source = {image} />

            <Text style={style.texto}>Só pra encher a tela de coisas e componentes e tals...
                Vale ressaltar aqui que pra importar uma imagem, fiz o import normal e chame esta da seguinte forma

                Abrindo chaves de tag e escrevendo Image source igual a chamada da imagem.
            </Text>

            <Text>Caso queira retornar o projeto e não rode no celular, pegar o comando pra restartar o bundler...</Text>
        </View>
    )
}
