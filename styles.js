import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: { 
        padding: 80,
        fontSize: 50,
        color: 'red',
        textShadowColor: 'gray',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
        fontFamily: 'Calibri',
        alignSelf: 'center',
    },
    img:{
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    input:{
        height: 45,
        width: 350,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 20,
        padding: 10,
        alignSelf: 'center',
    },
    button: {
        width: 200,
        height: 50,
        margin: 50,
        alignSelf: 'center',
        backgroundColor: 'lightgreen'
    },
    textButton:{
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 24,
    },
    textResult:{
        fontSize: 40,
        alignSelf: 'center',
    }
    
})

export { styles }