
import { useEffect, memo } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks/redux-hooks'
import { fetchData } from '../redux/store/dataSlice/thunk/setFetchData'
import { url } from '../contants/constants'
import Country from './Country/Country'


const CountryList = ({ searchInput }: string | any) => {
    const data = useAppSelector(data => data.data.data)
    const dispatch = useAppDispatch()



    const setData = async () => {
        await dispatch(fetchData(url))
    }

    useEffect(() => {
        setData()
    }, [])

 

    // const searchedCountry = data?.filter((c: any) => {
    //     if (searchInput === "") {
    //         return data
    //     } else if (c?.Country?.toLowerCase().includes(searchInput?.toLowerCase())) {
    //         return c
    //     }

    // })
    const searchedCountry = data?.filter((c: any) => {
        if (searchInput === "") {
          return data;
        } else if (c?.Country?.toLowerCase().startsWith(searchInput?.toLowerCase())) {
          return c;
        }
      });



    const countryEl = searchedCountry?.map((c, index) => (
        <Country key={c.ID} country={c.Country} number={index} total={c.TotalConfirmed} recovered={c.TotalRecovered} death={c.TotalDeaths} />
    ))



    return (
        <div >
            <div className='bg-blue-400 h-12 rounded-xl text-white   flex justify-between items-center px-4  mx-16'>
                <div className='flex  h-full items-center '>
                    <div className='h-full border-r-[1px] flex items-center'>
                        <h1 className='px-4'>№</h1>
                    </div>
                    <h1 className='px-4'>Country</h1>
                </div>
                <div className='flex  h-full items-center'>
                    <div className='h-full border-l-[1px] flex items-center'>
                        <h1 className='px-4 pr-20' >Total Confirmed</h1>
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