import { useEffect, useState }  from 'react'
import yelp from '../api/yelp'

export default () => {
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


    return [searchApi, results, errorMessage]
}