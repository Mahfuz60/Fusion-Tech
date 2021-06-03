import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SwiperComponentLenevo from '../components/SwiperComponentLenevo'
import SwiperComponentLg from '../components/SwiperComponentLg'

const Lenevo = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFF",

        }}>
            <View style={{
                flexDirection: "row",
                width: "100%",
                height: "90%"
            }}>
                <View style={{ width: "10%", paddingLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../images/17.png')}
                            style={{ marginVertical: 40 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "90%" }}>
                    <SwiperComponentLenevo />
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
                    color: "#62636a"
                }}>
                    Lenovo
                            </Text>
                <Text style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 170,
                    fontSize: 20
                }}>
                    $40
                            </Text>
            </View>

            <Text style={{
                paddingHorizontal: 20,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3,
                fontSize: 20
            }}>
                Bangladesh
                        </Text>

            <View style={{
                flexDirection: "row",
                width: "100%"
            }}>
                <View style={{
                    width: "50%",
                    backgroundColor: "#00a46c",
                    height: 70,
                    marginTop: 20,
                    borderTopRightRadius: 25,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => alert('Your Product Has Been Bought')}>
                        <Text style={{
                            color: "#FFF",
                            fontSize: 17
                        }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20
                }}>
                    <Text style={{
                        color: "#62636a",
                        fontWeight: "bold",
                        fontSize: 17
                    }}>Description</Text>
                </View>
            </View>

        </View>
    )
}
export default Lenevo;