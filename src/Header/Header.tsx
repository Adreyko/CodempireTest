import React, { memo } from 'react'

const Header = ({ setSearchInput }: any) => {




    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.currentTarget.value)
    }


    return (
        <div className='flex w-full '>
            <div className='flex justify-between w-[100%]  '>
                <div className='flex items-center ml-8'>
                    <img className='w-44' src="/images/covid.png" alt="" />
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