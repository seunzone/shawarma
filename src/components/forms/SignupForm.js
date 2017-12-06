import  React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class SignupForm extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput 
                    returnKeyType="next" 
                    placeholder="Full Name" 
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <TextInput 
                    returnKeyType="next" 
                    placeholder="Username or Email" 
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <TextInput 
                    returnKeyType="next" 
                    placeholder="Password" 
                    secureTextEntry style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TextInput 
                    returnKeyType="go" 
                    placeholder="Re-type Password" 
                    secureTextEntry style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} >
                    Signup
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer2}>
                <Text style={styles.buttonText} >
                    ENTER AS GUEST
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal:  10,
        borderRadius: 35
    },
    buttonContainer: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 35
    },
    buttonContainer2: {
        backgroundColor: '#2ecc71',
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 35
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '900'
    }
});