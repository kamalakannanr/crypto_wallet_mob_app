import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Contract = ({ balance, quote_rate, name, logo_url, ticker }) => {

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
                <Text>{name}</Text>
                <Text>{ticker}</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <Text style={styles.balanceStyle}>{balance}</Text>
                <Text>{quote_rate}</Text>
            </View>
        </View>
        <View
            style={{
                height: 0.5,
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
        alignItems: "flex-end"
    }
})

export default Contract;