
import { useEffect, memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/redux-hooks'
import { fetchData } from '../redux/store/dataSlice/thunk/setFetchData'
import { url } from '../contants/constants'
import Country from './Country/Country'
import { ICountries } from '../intarfaces/intarfaces'
import { setSortByName, setSortByTotal } from '../redux/store/dataSlice/dataSlice'

const CountryList = () => {
    const data = useAppSelector(data => data.data.data)
    const dispatch = useAppDispatch()
    const [sortedByLeast, setsortedByLeast] = useState(false)
    const [sortByAlphabet, setSortByAlphabet] = useState(false)


    const sortedByConfirmed = data ? [...data]?.sort((a: ICountries, b: ICountries) => sortedByLeast ? b?.TotalConfirmed - a?.TotalConfirmed : a?.TotalConfirmed - b?.TotalConfirmed) : data
    const sortedByName = data ? [...data]?.sort((a: ICountries, b: ICountries) => sortByAlphabet ? b.Country > a.Country ? 1 : -1 : a.Country > b.Country ? 1 : -1) : data


    const sortyByConfirmed = () => {
        dispatch(setSortByTotal(sortedByConfirmed))
        setsortedByLeast(prev => !prev)
    }

    const sortyByName = () => {
        dispatch(setSortByName(sortedByName))
        setSortByAlphabet(prev => !prev)
    }


    const countryEl = data?.map((c, index) => (
        <Country key={c.ID} country={c.Country} number={index} total={c.TotalConfirmed} recovered={c.TotalRecovered} death={c.TotalDeaths} />
    ))

    return (
        <div >
            <div className='bg-blue-400 h-12 rounded-xl text-white   flex justify-between items-center px-4  mx-16'  >
                <div className='flex  h-full items-center '>
                    <div className='h-full border-r-[1px] flex items-center'>
                        <h1 className='px-4'>№</h1>
                    </div>
                    <h1 className='px-4 cursor-pointer' onClick={sortyByName}>Country</h1>
                </div>
                <div className='flex  h-full items-center'>
                    <div className='h-full border-l-[1px] flex items-center'>
                        <h1 className='px-4 pr-20 cursor-pointer' onClick={sortyByConfirmed}  >Total Confirmed</h1>
                    </div>
                </div>
            </div>
            <div>
                {countryEl}
            </div>
        </div>
    )
}

export default memo(CountryList)