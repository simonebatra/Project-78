import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={require('../assets/stars.png')}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>
                        Stellar App
                    </Text>
                </View>
                <TouchableOpacity style={styles.routeCard}
                    onPress={() => { this.props.navigation.navigate("DailyPicScreen") }}>
                    <Text style={styles.routeText}>
                        Daily Pictures
                    </Text>
                    <Image source={require('photo.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                    onPress={() => { this.props.navigation.navigate("SpaceCraftScreen") }}>
                    <Text style={styles.routeText}>
                        Space Crafts
                    </Text>
                    <Image source={require('../assets/spacecraft.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                    onPress={() => { this.props.navigation.navigate("StarMapScreen") }}>
                    <Text style={styles.routeText}>
                        Star Map
                    </Text>
                    <Image source={require('../assets/star_map.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea:{
        marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex: 1,
        resizeMode: "cover",
    },
    routeCard:{
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white",
    },
    titleBar:{
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText:{
        fontSize: 60,
        fontWeight: "bold",
        color: "white",
    },
    routeText:{
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    iconImage:{
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})