/**
 * Button :text background ,border,  status:enable disable, onPress
 * Created by mcxtzhang on 2017/9/5.
 */
'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
        };
    }

    enable = ()=> {
        this.setState({
            disabled: false,
        });
    }

    disable = ()=> {
        this.setState({
            disabled: true,
        })
    };

    render() {
        let {text, borderRadius, backgroundColor, disabledBackgroundColor, width, height} = this.props;
        if (!borderRadius) borderRadius = 20;//默认圆角
        if (!backgroundColor)backgroundColor = '#29A1F7';//背景色
        if (!disabledBackgroundColor)disabledBackgroundColor = '#CCCCCC';//禁用背景色


        return (
            <TouchableOpacity style={[styles.container,
                {
                    borderRadius: borderRadius,
                    backgroundColor: backgroundColor
                },
                this.state.disabled && {backgroundColor: disabledBackgroundColor},
                width && {width: width},
                height && {height: height},

            ]}
                              disabled={this.state.disabled}
                              onPress={this.onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        )
    }

    onPress = ()=> {
        let {onPress} = this.props;
        if (onPress) {
            onPress();
        }

    }


}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 12,
        color: '#FFFFFF',
    },

});

