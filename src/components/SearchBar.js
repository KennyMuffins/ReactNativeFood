import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = (props) => {
    return <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            value={props.term}
            onChangeText={(newTerm) => { props.onTermChange(newTerm) }}
            onEndEditing={() => { props.onTermSubmit() }}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar