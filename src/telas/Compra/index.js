import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import useTextos from '../../hooks/useTextos';
import sucesso from '../../assets/sucesso.png';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Resumo() {
    const {
        mensagemCompra,
        topoCompra,
        tituloCompra,
        botaoHomeCompra,
        botaoProdutorCompra
    } = useTextos();

    const route = useRoute()
    const compra = route.params?.nome
    const mensagemCompleta = mensagemCompra?.replace('$NOME', compra)
    const navigation = useNavigation()

    return (
        <View style={estilos.tela}>
            <View style={estilos.conteudo}>
                <Image source={sucesso} style={estilos.sucesso} />
                <Text style={estilos.tituloCompra}>{topoCompra}</Text>

                <View style={estilos.textos}>
                    <Text style={estilos.titulo}>{tituloCompra}</Text>
                    <Text style={estilos.mensagem}>{mensagemCompleta}</Text>

                    <TouchableOpacity
                        style={estilos.botao}
                        onPress={() => navigation.popToTop()}>
                        <Text style={estilos.textoBotao}>{botaoHomeCompra}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[estilos.botao, estilos.botaoProdutor]}
                        onPress={() => navigation.pop(2)}>
                        <Text style={[estilos.textoBotao, estilos.textoBotaoProdutor]}>{botaoProdutorCompra}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    tituloCompra: {
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#464646',
        marginTop: 16
    },
    topo: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: 58,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    topoTexto: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sucesso: {
        width: "100%",
        height: undefined,
        aspectRatio: 360 / 250,
    },
    textos: {
        paddingHorizontal: 16,
        marginBottom: 30
    },
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646",
        marginVertical: 16
    },
    mensagem: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    botaoProdutor: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ECECEC",
    },
    textoBotaoProdutor: {
        color: "#464646",
    },
});
