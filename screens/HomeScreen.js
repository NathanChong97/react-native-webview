import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ActivityIndicator, 
    Linking,
    BackHandler,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen({navigation, route}) {
    const webViewRef = useRef()
    const [isLoading, setLoading] = useState(false);

    const handleBackButtonPress = () => {
        try {
            webViewRef.current?.goBack()
            return true
        } catch (err) {
            console.log("[handleBackButtonPress] Error : ", err.message)
        }
    }

    setTimeout(() => {
        setLoading(false)
    }, 3000)


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress)
        };
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <WebView 
                originWhiteList={['*']}
                source={{ uri: 'https://vntech.my' }}
                ref={webViewRef}
                onNavigationStateChange ={(navState)=>{
                    if(isLoading){ 
                        setLoading(false);
                    }
                 }}
                onLoadStart={(syntheticEvent) => {
                    setLoading(true);
                    setTimeout
                }}
                onShouldStartLoadWithRequest={(event)=>{
                    if (event.navigationType === 'click') {
                        if (!event.url.match(/(vntech\.my\/*)/) ) {
                            Linking.openURL(event.url)
                            return false
                        }
                        return true
                    }
                    else{
                        return true;
                    }
                }}
                onLoadEnd={(syntheticEvent) => {
                    setLoading(false);
                }}
            />
             {isLoading &&(
                <ActivityIndicator
                    color="#234356"
                    size="large"
                    style={styles.loading}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });