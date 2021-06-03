import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: "#ADD8E6",
            flex: 1
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
                            color: "#000",
                            fontWeight: "bold"
                        }}> Fusion Tech </Text>
                    </View>
                    {/* <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../images/g.png')}
                            style={{height:60,width:60}}
                        />
                   </View> */}
                </View>
            </View>
            <LinearGradient
                colors={["rgba(0,164,109,0.4)", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
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
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>
                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61"
                    }}></Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "#b1e5d3",
                        width: 115,
                        marginTop: -5
                    }}>

                    </View>

                </View>
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <View style={{
                        backgroundColor: "#00a46c",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#FFF"
                        }}>More</Text>
                    </View>
                </View>
            </View>



            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 400 }}
            >
                <LinearGradient
                    colors={["rgba(0,164,109,0.09)", "transparent"]}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: 100,
                        marginTop: 220,
                        top: 0
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Lg")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/resize-1622717003431629243Lg.jpg')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>Lg Laptop</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$40</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Bangladesh
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Mac")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/resize-1622716756557892271Mac.jpg')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>Mac Book</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 45
                        }}>$40</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Bangladesh
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Lenevo")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/resize-16227168251664236379Lenovo.jpg')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>Lenovo</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$40</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Bangladesh
                        </Text>
                </TouchableOpacity>

            </ScrollView>

            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center",
                marginTop: -80,
            }}>
                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61"
                    }}></Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "#b1e5d3",
                        width: 115,
                        marginTop: -5
                    }}>

                    </View>

                </View>
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <View style={{
                        backgroundColor: "0",
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        borderRadius: 0
                    }}>
                        {/* <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text> */}
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Home;