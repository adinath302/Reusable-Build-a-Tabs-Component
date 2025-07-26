import { AnimatePresence, easeIn, easeInOut, scale } from 'framer-motion';
import { useState } from 'react'
import { motion } from 'framer-motion'

const Reusable_tab_component = ({ tabsData }) => {
    const [ActiveTab, setActiveTab] = useState(tabsData[0].id)

    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col m-5 max-w-[500px] border p-5 rounded-md'>
                <h1 className='text-center font-serif h-full mb-[20px]'>
                    Tab component
                </h1>
                <motion.div
                    className='flex gap-2 '>
                    {
                        tabsData.map((item) => (
                            <motion.div
                                key={item.id} className={`${ActiveTab === item.id ? "bg-blue-500 text-white" : "bg-gray-300"} select-none cursor-pointer py-1 px-2 text-sm font-medium  flex rounded-t-xl`} onClick={()=>setActiveTab(item.id)}>
                                {item.title}
                            </motion.div>
                        ))}
                </motion.div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={ActiveTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.2, ease: easeIn }}
                        className='border bg-gray-100 rounded-b-xl p-3 font-md select-none'>
                        {tabsData.find((item) => item.id === ActiveTab)?.content || "content is not available"}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Reusable_tab_component