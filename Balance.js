import axios from "axios";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import Contract from "./components/Contract.js";
import { Component } from "react";

const url = "http://172.20.10.2:8000";
var jsonResp;
var mockResp =
  '[{"contract_decimals":18,"contract_name":"Fantom","contract_ticker_symbol":"FTM","contract_address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","supports_erc":null,"logo_url":"https://www.covalenthq.com/static/images/icons/display-icons/fantom-ftm-logo.png","last_transferred_at":null,"native_token":true,"type":"dust","balance":"0","balance_24h":"0","quote_rate":0.27663618,"quote_rate_24h":0.27073106,"quote":0,"quote_24h":0,"nft_data":null},{"contract_decimals":18,"contract_name":"ApeCoinV2.com","contract_ticker_symbol":"ApeCoinV2.com","contract_address":"0xb0b1d4732efe32aea466ed6bc3c79181ed4810c4","supports_erc":["erc20"],"logo_url":"https://logos.covalenthq.com/tokens/1/0xb0b1d4732efe32aea466ed6bc3c79181ed4810c4.png","last_transferred_at":"2022-07-09T08:51:43Z","native_token":false,"type":"cryptocurrency","balance":"10254000000000000000000","balance_24h":"10254000000000000000000","quote_rate":0.06713456,"quote_rate_24h":null,"quote":688.39777,"quote_24h":null,"nft_data":null},{"contract_decimals":18,"contract_name":"Ether","contract_ticker_symbol":"ETH","contract_address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","supports_erc":null,"logo_url":"https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png","last_transferred_at":null,"native_token":true,"type":"cryptocurrency","balance":"65711827609577238","balance_24h":"65711827609577238","quote_rate":1756.5952,"quote_rate_24h":1732.7133,"quote":115.429085,"quote_24h":113.85976,"nft_data":null}]';

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: [],
    };
    //this.getContractData = this.getContractData.bind(this);
    this.getContractData();
  }

  getContractData() {
    var a = this;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        a.setState({
          responseData: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
      .finally(function () {
        // always executed
        console.log("Finally called");
      });
  }

  render() {
    const resp = this.state.responseData;
    return (
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "ios" ? 34 : 0,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "left",
            height: 120,
          }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Total balance
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            $90
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "gold",
              padding: 10,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: "black",
              }}
            >
              {" "}
              Load Wallet
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: "black",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            height: 60,
          }}
        >
         <View style = {{
            alignContent: 'flex-start'
         }}>
          <Text>Last updated</Text>
          </View> 
          <View style = {{
            alignContent : 'right'
          }}>
          <Text style={{
            justifyContent: 'flex-end'
          }}>Only verified coins</Text>
          </View>
          
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: "black",
          }}
        />
        <FlatList
          data={this.state.responseData}
          keyExtractor={(item) => `${item.contract_address}`}
          renderItem={({ item }) => (
            <Contract
              name={item.contract_name}
              logo_url={item.logo_url}
              quote_rate={item.quote_rate}
              balance={item.balance}
              ticker={item.contract_ticker_symbol}
            />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
});

export default Balance;
