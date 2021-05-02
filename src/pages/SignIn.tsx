import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../contexts/auth';

export function SignIn(){
    const { signed, user, signIn } = useContext(AuthContext);

    console.log(signed);
    console.log(user);

    async function hadleSignIn(){
        signIn();
    }

    return(
        <View  style={styles.container}>
            <Button title="Sign In" onPress={hadleSignIn} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  