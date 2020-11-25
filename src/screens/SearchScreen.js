import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'

//Custom hooks
import useResults from '../hooks/useResults'

//Custom Components
import ResultsList from '../components/ResultsList'

//Destructre navigation from props
const SearchScreen = () => {
    const [term, setTerm] = useState('')

    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    
    return <ScrollView>
        <SearchBar  term={term} 
                    onTermChange={(newTerm) => setTerm(newTerm)} 
                    onTermSubmit={() => searchApi(term)}
        />

        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ResultsList 
            results={filterResultsByPrice('$')} 
            title="Cost Effective" 
        />
        <ResultsList 
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier"
        />
        <ResultsList 
            results={filterResultsByPrice('$$$')} 
            title="Big Spender"
        />
    </ScrollView>
}

const styles = StyleSheet.create({

})

export default SearchScreen