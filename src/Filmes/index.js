/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Modal} from 'react-native';
import Detalhes from '../Detalhes';

export default function Filmes({data}) {
  const [visibleModal, setvisibleModal] = useState(false);
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome} </Text>

        <Image source={{uri: data.foto}} style={styles.capa} />

        <View  style={styles.areaBotao} >
            <TouchableOpacity style={styles.botao} onPress={()=> setvisibleModal(true)} >
            <Text style={styles.botaoTexto}>LEIA MAIS </Text>
            </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data}  voltar={() => setvisibleModal(false)} />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex:2,
  },
  titulo: {
    padding: 15,
    fontSize:20,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop:-45,
    zIndex:9,
  },
 botao: {
    backgroundColor: '#09A6FF',
    width:100,
    opacity:1,
    padding: 8,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },

  botaoTexto: {
    color: '#FFF',
    textAlign:'center',

  },
});
