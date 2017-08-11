import React, {Component,} from 'react';

export  default class NetUtils extends React.Component {

    static Get(url, callback, errorCallback) {
        fetch(url)
            .then((response)=> {
                return response.json();
            })
            .then((json)=> {
                console.log("NetUtils:Get:Json:" + JSON.stringify(json))
                if (json.flag != 1) {
                    throw json;
                } else {
                    callback(json)
                }

            })
            .catch((error)=> {
                console.log("NetUtils:Get:Error:" + error)
                errorCallback(error);
            })
            .done();
    }
}

//module.exports = NetUtils;