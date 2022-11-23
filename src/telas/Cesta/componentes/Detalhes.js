import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Modal, Text } from 'react-native';

import useTextos from '../../../hooks/useTextos';
import Texto from '../../../componentes/Texto';
import { useNavigation } from '@react-navigation/native';

export default function Detalhes({ nome, produtor, descricao, preco }) {

  const { botaoComprar, botaoCancelarCompra, botaoConfirmarCompra, mensagemConfirmaCompra } = useTextos();

  const [isModalVisible, setIsModalVisible] = useState(false)

  const navigation = useNavigation()

  return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.fazenda}>
      <Image source={produtor.imagem} style={estilos.imagemFazenda} />
      <Texto style={estilos.nomeFazenda}>{produtor.nome}</Texto>
    </View>
    <Texto style={estilos.descricao}>{descricao}</Texto>
    <Texto style={estilos.preco}>{preco}</Texto>

    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <View style={estilos.modal}>
        <View style={estilos.modalContainer}>
          <Text style={estilos.textoModal}>{mensagemConfirmaCompra}</Text>
          <TouchableOpacity
            style={estilos.botaoCancelar}
            onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text style={estilos.textoBotaoCancelar}>{botaoCancelarCompra}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.navigate('Compra', { nome })}>
            <Text style={estilos.textoBotao}>{botaoConfirmarCompra}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    <TouchableOpacity
      style={estilos.botao}
      onPress={() => setIsModalVisible(true)}>
      <Texto style={estilos.textoBotao}>{botaoComprar}</Texto>
    </TouchableOpacity>
  </>
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
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
  botaoCancelar: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ECECEC"
  },
  textoBotaoCancelar: {
    textAlign: "center",
    color: "#464646",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    justifyContent: 'center'
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 25,
  },

  textoModal: {
    textAlign: 'center',
    fontSize: 34,
    color: '#464646',
    fontWeight: 'bold',
    marginBottom: 10
  }
})
