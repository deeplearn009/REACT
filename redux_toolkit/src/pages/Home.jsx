import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk, postProductThunk } from '../redux/reducers/productSlice'
import styles from './Home.module.scss'

const Home = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)
    const [pollingInterval, setPollingInterval] = useState(5000) // 5 seconds by default
    const [name, setName] = useState('')

    // useEffect(() => {
    //     dispatch(getProductThunk())
    // }, [])


    useEffect(() => {
        // Initial fetch
        dispatch(getProductThunk())
        
        // Set up polling for real-time updates
        const intervalId = setInterval(() => {
            dispatch(getProductThunk())
        }, pollingInterval)
        
        // Clean up interval on component unmount
        return () => clearInterval(intervalId)
    }, [dispatch, pollingInterval])


    const sendData = () => {
        if (name.trim()) {
            dispatch(postProductThunk({
                name: name
            }))
            setName('')
        }
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendData()
        }
    }



    // const sendData = () => {
    //     dispatch(postProductThunk({
    //         name: name
    //     }))
    //     setName('')
    // }

    if (loading) return <span>Loading...</span>
    if (error) return <span>Something goes wrong...</span>



  return (
    <div className={styles.container}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleKeyPress} />
        <button onClick={sendData}>SEND</button>
        <div className={styles.span}>
            {data && data.map(item => <span key={item.id || item.name}>{item.name}</span>)}
        </div>

        <div className={styles.pollingControls}>
                <label>
                    Update interval (ms):
                    <select 
                        value={pollingInterval} 
                        onChange={(e) => setPollingInterval(Number(e.target.value))}
                    >
                        <option value={1000}>1 second</option>
                        <option value={5000}>5 seconds</option>
                        <option value={10000}>10 seconds</option>
                        <option value={30000}>30 seconds</option>
                    </select>
                </label>
            </div>


    </div>
  )
}

export default Home
