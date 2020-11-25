import React from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'

const ResultsDetail = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },  
    imageStyle: {
        width: 200,
        height: 200, 
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail