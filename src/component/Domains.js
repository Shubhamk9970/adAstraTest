import React from 'react'
const data = [
    {
        src: "/logo192.png",
        title: "Hackathons",
        extra: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa!"
    },
    {
        src: "/logo192.png",
        title: "Competitive coding",
        extra: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa!"
    },
    {
        src: "/logo192.png",
        title: "Practice Q",
        extra: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa!"
    },
    {
        src: "/logo192.png",
        title: "Facts",
        extra: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa!"
    },
]
const Domains = () => {
    return (
        <div>
            <div className='border text-white rounded-md w-fit' >
                <button className='py-2 px-5 border bg-white  text-black font-bold'>Coding</button>
                <button className='py-2 px-5 border bg-white  text-black font-bold'>Extra-c</button>
                <button className='py-2 px-5 border bg-white  text-black font-bold'>Sports</button>
            </div>


            <div className=' w-fit flex rounded-md border '>
                {
                    data.map((elem, i) => {
                        return (<>
                            <div className='border border-gray-400 w-[20%] h-fit flex  bg-gray-300
                            ' key={i}>
                                <div className='w-[30%] flex justify-center items-center'>
                                    <img src={elem.src} alt="" className='w-9 h-9 p-1 bg-gray-600 border rounded-full' />
                                </div>
                                <div className=''>

                                    <h3 className='font-bold '>{elem.title}</h3>
                                    <p className=' text-xs'>{elem.extra}</p>
                                </div>
                            </div>
                        </>)
                    })
                }

            </div>
        </div>
    )
}

export default Domains