import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                //whatever is in params add as /search?limit
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'singapore'
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('prok')
    }, [])

    return <View>
        <SearchBar  term={term} 
                    onTermChange={(newTerm) => setTerm(newTerm)} 
                    onTermSubmit={() => searchApi(term)}
        />

        <Text>We have found {results.length} results</Text>
        
        {errorMessage ? <Text>{errorMessage}</Text> : null}

    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen