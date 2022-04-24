import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Easing } from "react-native";

const Fade = () => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const triggerAnim = useRef(new Animated.Value(100)).current;


    const trigger = () => {

        Animated.sequence([

        Animated.spring(triggerAnim, {
            toValue: 110,
            duration: 500,
            useNativeDriver: true,
            
        }),
        Animated.spring(triggerAnim, {
            toValue: 100,
            duration: 500,
            useNativeDriver: true,

            
        }),
    ]).start();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    styles.trigger,
                    {
                        // Bind opacity to animated value
                        width: triggerAnim,
                        height: triggerAnim,
                    }
                ]}
            >
                <Button style={styles.button} onPress={trigger} />

            </Animated.View>
            {/* <View style={styles.buttonRow}>
                <Button title="Fade Out View" onPress={fadeOut} />
            </View> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    trigger: {
        padding: 20,
        width: 100,
        height: 100,
        // backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'black'
    },
    button: { 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'black' 
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    }
});

export default Fade;