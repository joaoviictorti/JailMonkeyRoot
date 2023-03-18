import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

export default function Actions(){
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Icon name="addfolder" size={26} color="#000"></Icon> 

                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Icon name="tagso" size={26} color="#000"></Icon> 

                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Icon name="creditcard" size={26} color="#000"></Icon> 

                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Icon name="setting" size={26} color="#000"></Icon> 

                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Icon name="barcode" size={26} color="#000"></Icon> 

                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        maxHeight:84,
        marginBottom: 14,
        marginTop: 18,
        paddinEnd: 14,
        paddingStart: 14
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})