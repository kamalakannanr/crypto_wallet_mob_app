import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Contract = ({balance,quote_rate,name,logo_url}) => {

return <View>
    <Image style={{height:50,width:50}}source={{uri: logo_url}} />
    <Text>Name - {name}</Text>
    <Text>Balance - {balance}</Text>
    <Text>Quote Rate - {quote_rate}</Text>
</View>

}

export default Contract;