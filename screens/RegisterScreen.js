import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigation();
    const handleRegister = () => {
        const user = {
            name: name,
            email: email,
            password: password,
        };

        // send a post request to the backend API
        axios.post("http://192.168.1.74:8000/register", user)
        .then((message) => {
            console.log(message);
            Alert.alert("Registration Succefully", "You have registered succefully");
            setName("");
            setEmail("");
            setPassword("");
            navigation.navigate('Login');
        })
            .catch((error) => {
                Alert.alert(
                    "Registration Error",
                    "an error occurred during registration"
                );
                console.log("registration failed", error)
                console.log(name, email, password)
            });
        // axios.get('https://192.120.16.108:8000/User', {
        //     lastName: 'Trần',
        //     firstName: 'Quốc Tuấn',
        //   })
        //   .then(function (response) {
        //     console.log( response);
        //   })
        //   .catch(function (error) {
        //     console.log("Tai"+error);
        //   });
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: 'center' }}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{
                        uri: "https://brandlogos.net/wp-content/uploads/2016/10/amazon-logo-preview.png",
                    }} />
            </View>
            <View>
                <Text style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    marginTop: 12,
                    color: "#041E42"
                }}
                >
                    Login In To Your Account
                </Text>
            </View>
            <KeyboardAvoidingView>



                <View style={{ marginTop: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30
                    }}
                    >
                        <Entypo style={{ marginLeft: 8 }} name="user" size={24} color="gray" />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: name ? 16 : 16 }}
                            placeholder="Enter your name"
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30
                    }}
                    >

                        <MaterialCommunityIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }}
                            placeholder="Enter your email"
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30
                    }}
                    >
                        <Entypo style={{ marginLeft: 8 }} name="lock" size={24} color="gray" />
                        <TextInput
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }}
                            placeholder="Enter your password"
                        />
                    </View>
                </View>

                <View style={{ marginTop: 12, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
                </View>

                <View style={{ marginTop: 50 }} />

                <Pressable
                    onPress={handleRegister}
                    style={{
                        width: 200,
                        backgroundColor: "#FEBE10",
                        borderRadius: 6,
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: 15
                    }}
                >
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: "bold" }}>
                        Register
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate("Login")}
                    style={{ marginTop: 15 }}
                >
                    <Text style={{ textAlign: 'center', color: "gray", fontSize: 16 }}>
                        Already have an Account? Sign In
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})