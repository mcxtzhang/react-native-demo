'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Button from './base/Button'

//ListItem
export default class BillsListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hadBinBills: props.hadBinBills,//默认待入账
        }

        console.log("" + this.props.hadBinBills)
    }

    render() {
        let {
            itemData,
            onPressItem,
            id,
        }=this.props;
        return (
            <View style={styles.container}>
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
                    }}>账单编号{itemData.name}
                    </Text>
                </View>

                <View style={{
                    height: 94,
                    paddingTop: 18,
                    paddingBottom: 18,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: "#4CD764",
                    }}>+622.00
                    </Text>

                    {//待入账才显示 提交
                        this.props.hadBinBills == "true" &&
                        <Button width={66}
                                height={30}
                                ref="button"
                                borderRadius={4}
                                onPress={this.onCommitPress}
                                text="提交">
                        </Button>
                    }

                </View>

            </View>

        );
    }

    onCommitPress = ()=> {
        this.refs.button.disable();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: 94,
        paddingLeft: 14,
        paddingRight: 14,
    },

});



