import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import SwiperComponentMac from '../components/SwiperComponentMac'

const Mac = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#ADD8E6",

        }}>
            <View style={{
                backgroundColor: "#778899",
                height: "28%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <Image
                    source={require('../images/1.png')}
                    style={{
                        height: 10,
                        width: 20,
                        marginTop: 50
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 25,
                    width: "100%"
                }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#191970",
                            fontWeight: "bold"
                        }}> Fusion Tech </Text>
                    </View>
                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Image
                            source={require('../images/chrome.png')}
                            style={{ height: 60, width: 60 }}
                        />
                    </View>
                </View>
            </View>
            <LinearGradient
                colors={["rgba(0,164,109,0.4)", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 80,
                    marginTop: -45
                }}
            >
                <View style={{
                    backgroundColor: "#E6E6FA",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    borderRadius: 15,
                    marginTop: 25,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#191970"
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            width: 260
                        }}
                    />
                    <Image
                        source={require('../images/3.png')}
                        style={{ height: 20, width: 20 }}
                    />
                </View>
            </LinearGradient>
            <View style={{
                flexDirection: "row",
                width: "100%",
                height: "60%"
            }}>

                <View style={{ width: "100%" }}>
                    <SwiperComponentMac />
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                marginTop: -80,
                marginHorizontal: 20,
                alignItems: "center"
            }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 28,
                    color: "#191970"
                }}>
                    MAC BOOK
                            </Text>
                <Text style={{
                    fontWeight: "bold",
                    color: "#191970",
                    paddingLeft: 120,
                    fontSize: 30
                }}>
                    $1200
                            </Text>
            </View>



            <View style={{
                backgroundColor: "#ADD8E6",
                flexDirection: "row",
                width: "100%"
            }}>
                <View style={{
                    width: "50%",
                    backgroundColor: "#00a46c",
                    height: 80,
                    marginTop: 25,
                    borderTopRightRadius: 25,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('Thank You', 'Your Mac Book Has Been Punched Successfully.', [
                                {
                                    text: 'Done'
                                }
                            ])
                        }}>
                        <Text style={{
                            color: "#FFF",
                            fontWeight: "bold",
                            fontSize: 17
                        }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: "50%",
                    backgroundColor: "#00a46c",
                    height: 80,
                    marginTop: 25,
                    marginLeft: 2,
                    borderTopLeftRadius: 25,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('MAC BOOK', '2.3GHz 8-core 9th-generation Intel Core i9 processor Turbo Boost up to 4.8GHz AMD Radeon Pro 5500M with 4GB of GDDR6 memory 16GB of 2666MHz DDR4 memory 1TB of SSD storage.', [
                                {
                                    text: 'Done Reading'
                                }
                            ])
                        }}>
                        <Text style={{
                            color: "#FFF",
                            fontWeight: "bold",
                            fontSize: 17
                        }}>Description</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export default Mac;