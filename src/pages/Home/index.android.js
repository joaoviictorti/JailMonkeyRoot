import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import JailMonkey from "jail-monkey"
import Header from '../../componentes/Header'
import Balance from '../../componentes/Balance'
import Movements from '../../componentes/Movements';
import Actions from '../../componentes/Actions'

const list = [
  {
    id: 1,
    label: "Boleto de luz", 
    value: '200,00',
    date: '17/09/2023',
    type: 0 // Gastos
  },
  {
    id: 2,
    label: "Pix", 
    value: '12,00',
    date: '17/10/2023',
    type: 1 // Recita
  },
  {
    id: 3,
    label: "Salário da empresa", 
    value: '4.000',
    date: '17/10/2023',
    type: 1 // Receita
  }
]

function detectacaoRootDetection(){
  const detection = JailMonkey.androidRootedDetectionMethods
  for (let chave in detection){
    if(chave == "jailMonkey" && detection[chave] === true){
      return detection[chave]
    }else{
      for (chaveRoot in detection.rootBeer){
        return detection.rootBeer[chaveRoot]
      }
    }
  }
}

export default function Home() {
  return (
    <View style={styles.contaner}> 
      <Header name={detectacaoRootDetection() ? "usuário":"usuário rootado"}/>
      <Balance saldo="15.000" gastos="-523,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contaner:{
    flex:1,
    backgroundColor: "#fafafa"
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
    
  }
});