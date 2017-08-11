/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    ViewPagerAndroid,
    Animated,
    ListView
} from 'react-native'
import NetUtils from './../common/NetUtils'


export default class NetTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }


    render() {
        let view = this.state.isShow ? null : null;
        return <View style={{flex: 1}}>
            {view}
            <Text onPress={()=> {
                this.setState({isShow: !this.state.isShow});
            }
            }> 点我切换状态</Text>
        </View>;
    }


    componentWillMount() {

        /*        NetUtils.Get('https://facebook.github.io/react-native/movies.json', function (json) {
         console.log("NetGet" + json.supplierId.supplierName)
         console.log("NetGet" + json.supplierId.supplierName)
         this.setState({supplierName: json.supplierId.supplierName});
         })*/


        /*        fetch('https://facebook.github.io/react-native/movies.json')
         .then((response) => {
         console.log("response" + response)
         var json = response.json();
         console.log("json" + json)
         console.log("json string" + JSON.stringify(json))

         return json})

         .then((responseJson) => {
         console.log("responseJson.movies:" + responseJson.movies)
         console.log("responseJson.movies sstring:" + JSON.stringify(responseJson.movies))
         return responseJson.movies;
         })
         .catch((error) => {
         console.error(error);
         });*/
        /*
         fetch('http://starfood.imcoming.com/starfood/supplier/query/name?token=2d4949956af06cdddcc50c304c9daf03')
         .then((response) => {
         console.log("response" + response)
         var json = response.json();
         console.log("json" + json)
         console.log("json string" + JSON.stringify(json))
         console.log("json string" + JSON.stringify(json))

         return json
         })

         .then((responseJson) => {
         console.log("responseJson:" + responseJson)
         console.log("responseJson sstring:" + JSON.stringify(responseJson))
         console.log("responseJson.movies:" + responseJson.message)
         console.log("responseJson.movies sstring:" + JSON.stringify(responseJson.message))
         return responseJson.message;
         })
         .catch((error) => {
         console.error(error);
         });*/


        NetUtils.Get('http://starfood.imcoming.com/starfood/supplier/query/name?token=2d4949956af06cdddcc50c304c9daf03', function (json) {
            console.log("json flag:" + json.flag)

        }, function (error) {
            console.log("外面:" + error);
        })


    }

    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}