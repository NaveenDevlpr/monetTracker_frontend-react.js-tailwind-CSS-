import { useState } from 'react'
import logo from '../assets/logo.png'
import {motion} from  'framer-motion'
import {
  LayoutDashboardIcon,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
  ArrowRight
  
} from 'lucide-react'


const Navbar = () => {

  const [active,setActive]=useState(0);
  


 const NavLinks=[
  {
    name:'Dashboard',
    icon:LayoutDashboardIcon,
  },
  {
    name:'Activity',
    icon:Clock3,
  },
  {
    name:'Analytics',
    icon:BarChart2,
  },
  {
    name:'Transactions',
    icon:ArrowRightLeft,
  },
  {
    name:'Help',
    icon:HelpCircleIcon,
  },
]

const variants={
  expanded:{width:'15%'},
  nonExpanded:{width:'5%'}
}

const [isExpanded,setIsExpanded]=useState(true)
  return (
    <motion.div 
    animate={
      isExpanded?"expanded":"nonExpanded"
    } 
    variants={variants}
    className={`relative flex flex-col w-1/5 h-screen  py-10 border border-r ${isExpanded?'px-10 ':'px-5'}`}>
        <div className='flex items-center space-x-3'>
            <img src={logo} className='w-[20px]'></img>
            <span className={`${isExpanded?'block':'hidden'}`}>Kaasu</span>
        </div>
        <div className='absolute w-5 h-5 bg-green-700 rounded-full -right-[10.5px] top-13'>
          <ArrowRight className='mx-[1px] w-4 h-5' color='white' onClick={()=>setIsExpanded(!isExpanded)} />
        </div>
        <div className='flex flex-col mt-10 space-y-8'>
            {
              NavLinks.map((e,index)=>{
                  return(
                    <div key={index} className={`flex space-x-1 p-2 cursor-pointer rounded-md ${active===index?"bg-green-700 text-white":""}`} onClick={()=>setActive(index)}  >
                      <e.icon/>
                      <span className={`${isExpanded?'block':'hidden'}`}>{e.name}</span>
                  </div>
                  )
              })}
        </div>
    </motion.div>
  )
}

export default Navbar