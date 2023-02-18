import React, { memo, useEffect, useState } from 'react'
import { url } from '../contants/constants'
import { useAppDispatch, useAppSelector } from '../redux/hooks/redux-hooks'
import { setSearchCoutries } from '../redux/store/dataSlice/dataSlice'
import { fetchData } from '../redux/store/dataSlice/thunk/setFetchData'
const Header = () => {

    const data = useAppSelector(data => data.data.data)
    const dispatch = useAppDispatch()



    const [searchInput, setSearchInput] = useState('')


 

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchedCountries = searchInput ? data?.filter(c => c?.Country?.toLowerCase().startsWith(event.currentTarget.value.toLowerCase())) : data
        setSearchInput(event.currentTarget.value)
        dispatch(setSearchCoutries(searchedCountries))
    }

    const setData = async () => {
        await dispatch(fetchData(url))
    }

    useEffect(() => {
        setData()
    }, [searchInput === ''])

;
    return (
        <div className='flex w-full '>
            <div className='flex justify-between w-[100%]  '>
                <div className='flex items-center ml-8'>
                    <img alt='pic' className='w-44' src={process.env.PUBLIC_URL + "/images/covid.png"} />
                    <h1 className='text-4xl font-bold'>STATISTIC</h1>
                </div>
                <div className='flex items-center mr-16'>
                    <i className="ri-search-line absolute right-20 text-xl font-bold" ></i>
                    <input className='h-12 w-[300px] shadow-md border-[1px] outline-none rounded-md px-4' placeholder='Search...' type="text" onChange={(e) => inputHandler(e)} />
                </div>
            </div>
        </div>
    )
}
export default memo(Header)