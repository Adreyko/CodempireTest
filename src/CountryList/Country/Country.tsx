import { memo, useState } from 'react'
import Modal from '../../Modal/Modal'
import Item from '../../Modal/ModalItem/Item'
type countryData = {
    country: string,
    number: number,
    total: number,
    death: number,
    recovered: number,



}
const Country = ({ country, number, total, recovered, death }: countryData) => {


    const [openModal, setOpenModal] = useState(false)
    return (<>
        <div className='border-[1px] shadow-md h-12 rounded-xl  mt-2  flex justify-between items-center px-4  mx-16 text-black cursor-pointer ' onClick={() => setOpenModal(true)}>
            <div className='flex  h-full items-center '>
                <div className='h-full border-r-[1px] flex items-center'>
                    <h1 className='px-4 w-12'>{number + 1}</h1>
                </div>
                <h1 className='px-4'>{country}</h1>
            </div>
            <div className='flex  h-full items-center '>
                <div className='h-full border-l-[1px]  flex items-center justify-start'>
                    <h1 className='px-4 w-16 pr-48'>{total}</h1>
                </div>
            </div>
        </div>
        <Modal visible={openModal} setVisible={setOpenModal}>
            <Item recovered={recovered} death={death} total={total} country={country} setVisible={setOpenModal} />
        </Modal>
    </>
    )
}

export default memo(Country)