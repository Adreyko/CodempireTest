import { memo } from "react";



interface IProps {
    visible: boolean;
    setVisible: (value: boolean | ((prevVisible: boolean) => boolean)) => void;
    children: React.ReactNode,
  }



  // this modal is reusable
const Modal = ({visible,setVisible,children}: IProps) => {

if (!visible) return null
return (
    <div onClick={() => setVisible(false)} className='fixed inset-0  z-10 bg-black bg-opacity-50  flex justify-center items-center'>
        <div onClick={e => e.stopPropagation()} className=' rounded shadow-sm z-20'>
            {children}
        </div>
    </div>
)
}

export default memo(Modal)