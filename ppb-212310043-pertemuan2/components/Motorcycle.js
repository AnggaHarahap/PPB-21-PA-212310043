import React, { Component } from 'react'
import { Text, View } from 'react-native'

var name = "Honda";
const types = { type: 'Manual', model: 'CRF-150L', harga: 36000000 }
export default function Motorcycle() {
    return (
        <View>
            <Text>Hi I'm a motorcycle</Text>
            <Text>Merek : {name}</Text>
            <Text>Type : {types.type}</Text>
            <Text>Model : {types.model}</Text>
            <Text>Harga : {types.harga}</Text>
        </View>
    )
}