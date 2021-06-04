import React from 'react'
import { View, Text } from 'react-native'

const Profile = () => {
    return (
        <View style={{
            justifyContent: "center",
            flex: 1
        }}>
            <Text
                style={{
                    fontSize: 50,
                    padding: 20,
                    textAlign: 'center'
                }}
            >This Is Login Page And It Is On Developing Mood</Text>
        </View>
    )
}
export default Profile;