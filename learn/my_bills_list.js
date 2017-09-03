'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
} from 'react-native';
import {TabNavigator} from 'react-navigation';

//ListItem
class BillsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hadBinBills: props.hadBinBills,//默认待入账
        }

        console.log("" + this.props.hadBinBills)
    }
    render() {
        return (
            <View style={styles.leftContainer}>
                <View style={{
                    flex: 1,
                    height: 94,
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: "#333333"
                    }}>2017.06.26-2017.07.02
                    </Text>
                    <Text style={{
                        marginTop: 14,
                        fontSize: 12,
                        color: "#666666"
                    }}>账单编号
                    </Text>
                </View>

                <View style={{
                    height: 94,
                    paddingTop: 18,
                    paddingBottom: 18,
                    backgroundColor: '#963214',
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: "#4CD764",
                    }}>+622.00
                    </Text>

                    {//待入账才显示 提交
                        this.props.hadBinBills == "true" &&
                        <Button style={{
                            marginTop: 12,
                            fontSize: 12,
                            color: "#666666",
                            width: 66,
                            height: 30,
                        }}
                                color="#29A1F7"
                                title="提交">
                        </Button>
                    }

                </View>

            </View>

        );
    }
}

//待入账
class ToBeInBills extends React.Component {
    static navigationOptions = {
        tabBarLabel: '待入账',
    };

    render() {
        return <BillsList hadBinBills="false"/>
    }
}

//已入账
class HadInBills extends React.Component {
    static navigationOptions = {
        tabBarLabel: '已入账',
    };

    render() {
        return <BillsList hadBinBills="true"/>
    }
}

const styles = StyleSheet.create({
    leftContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: 94,
        paddingLeft: 14,
        paddingRight: 14,
    },
    header1: {
        height: 135,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    header1Item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header1AmountTitle: {
        color: '#333333',
        fontSize: 14,
    },
    header1Amount: {
        color: '#FF4314',
        fontSize: 28,
    },

});


const RouteConfig = {
    ToBeIn: {
        screen: ToBeInBills,
    },
    HadIn: {
        screen: HadInBills,
    }
}
const TabNavigationConfig = {
    tabBarOptions: {
        activeTintColor: '#019FFE',
        inactiveTintColor: "#666666",
        activeBackgroundColor: "#019EFE",
        style: {
            backgroundColor: 'white',
            height: 48,
        },
        indicatorStyle: {
            backgroundColor: "#019EFE",
        }
    },
    lazy: true,
    backBehavior: "none",
}
const TabMyBills = TabNavigator(RouteConfig, TabNavigationConfig);

export default TabMyBills;

