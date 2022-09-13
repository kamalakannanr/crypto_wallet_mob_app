import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Contract = ({ value, balance, name, logo_url, ticker }) => {

    return <View style={{
        flex: 1,
        flexDirection: 'column'
    }}>
        <View style={{
            flex: 1,
            flexDirection: 'row'
        }}>
            <Image style={styles.logoStyle} source={{ uri: logo_url }} />
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <Text style = {{
                    fontWeight : 'bold',
                    fontSize : 15
                }}>{name}</Text>
                <Text style = {{
                    fontSize : 10
                }}>{ticker}</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <Text style={styles.balanceStyle}>${value}</Text>
                <Text style={{
                    fontSize : 10
                }}>{balance}</Text>
            </View>
        </View>
        <View
            style={{
                margin : 10,
                height: 0.3,
                width : '90%',
                backgroundColor: 'black'
            }}
        />

    </View>

}

const styles = StyleSheet.create({
    viewStyle:
    {
        flexDirection: 'row',
        height: 50
    },
    logoStyle:
    {
        height: 50,
        width: 50,
        margin: 5
    },
    balanceStyle:
    {
        alignItems: "flex-end",
        fontWeight : 'bold',
        fontSize : 15
    }
})

export default Contract;