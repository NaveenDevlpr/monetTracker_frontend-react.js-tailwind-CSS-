import { Chart } from "./Chart"

const DashBoard = () => {
  return (
    <div className='flex flex-col px-10 py-10 space-y-8'>
        <h2 className="text-2xl">Dashboard</h2>

        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border  rounded flex flex-col p-4 justify-center  text-gray-400'>
                <span className='text-gray-800'>Naveen Kumar</span>
                <span >Your Balance is : Rs 20000</span>
            </div>

            <div className='w-2/5 h-[150px] border rounded flex flex-col p-4 justify-center text-gray-400'>
                <span className='text-gray-800'>Naveen Kumar</span>
                <span >Your Expenses is : Rs 10000</span>
            </div>
        </div>

        <div className='flex flex-col w-4/5 space-x-8' >
            <h2>
                Expenses Chart 
            </h2>
            <Chart/>
        </div>
        
        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border  rounded flex flex-col p-4 justify-center mt-5 text-gray-500'>
                <span>Your Activity</span>
                <li className='mt-4' >Your sent : Rs 20000</li>
            </div>

            <div className='w-2/5 h-[150px] border rounded flex flex-col p-4 justify-center mt-5 text-gray-500'>
                <span>Pending Bills</span>
                <li className='mt-4' >Wi-fi bill is : Rs 1500</li>
            </div>
        </div>
    </div>
  )
}

export default DashBoard