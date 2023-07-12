import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Webview} from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude="",
            longitude="",
        };
    }

    componentDidMount() {
        this.getStarMapLocation()
    }

    getStarMapLocation = () => {
        const {latitude, longitude} = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude= 
        
        ${longitude}&latitude=${latitude}&constellations=true&constellations=true&constellationlabels=
        
        true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>StarMap Screen!</Text>
                <TextInput>
                    style={{
                        height:40,
                        borderColor: 'blue',
                        borderWidth: 2
                    }}
                    placeholder="enter latitude"
                    placeholderTextColor="#fff000"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude: text
                        })
                    }}
                </TextInput>
                <TextInput>
                    style={{
                        height:40,
                        borderColor: 'blue',
                        borderWidth: 2
                    }}
                    placeholder="enter longitude"
                    placeholderTextColor="#fff000"
                    onChangeText={(text)=>{
                        this.setState({
                            longitude: text
                        })
                    }}
                </TextInput>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20 }}
                />
            </View>
        )
    }
}