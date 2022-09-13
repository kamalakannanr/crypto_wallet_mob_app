import axios from "axios";
import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
//import CheckBox from "@react-native-community/checkbox";
import Contract from "./components/Contract.js";
import { Component } from "react";

const baseUrl = "http://192.168.1.3:8000";
const getAllUrl = baseUrl + "/all";
var jsonResp;
//var total_portfolio_value = 0;

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: []
    };
    //this.getContractData = this.getContractData.bind(this);
    this.getContractData();
  }

  getContractData() {
    var a = this;
    axios
      .get(getAllUrl)
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
    var resp = [];
    resp = this.state.responseData;
    var total_portfolio_value = 0;
    console.log("response data from backend - " +resp)
    if(resp.length > 0)
    {
       total_portfolio_value = resp.reduce(function summarize(sum, item) {
        const updatedSum = sum + item.quote;
        return updatedSum;
      }, 0).toFixed(2);

      console.log(total_portfolio_value);
    }
   // var total_portfolio_value = resp.reduce((partialSum,resp) => partialSum + (resp.quote_rate * resp.balance));

    return (
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "ios" ? 5 : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
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
              ${total_portfolio_value}
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
                Load Wallet
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          ></View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Image
              style={{
                height: 120,
                width: 120,
                clear: "right",
              }}
              source={require("./assets/wallet.jpeg")}
            />
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            margin : 5,
            width: '90%',
            backgroundColor: "black",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            height: 20,
          }}
        >
          <View
            style={{
              alignContent: "flex-start",
            }}
          >
            <Text>Last updated: </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          />
          <View
            style={{
              flex: 1,
              alignContent: "right",
            }}
          >
            <Text
              style={{
                justifyContent: "flex-end",
              }}
            >
              Only verified coins
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 5,
            width : '90%',
            height: 0.5,
            backgroundColor: "black",
          }}
        />
        <FlatList
          data={this.state.responseData}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Contract
              name={item.contract_name}
              logo_url={item.logo_url}
              balance={item.balance}
              value={item.quote}
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
