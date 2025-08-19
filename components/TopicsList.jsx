import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics",{
            cache: "no-store"
        });

        if(!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.error("error loading topics ",error);   
    }
}

export default async function TopicsList() {
    const {topics} = await getTopics();
  return (
    <>

    {topics.map(topic => (
         <div key={topic._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
            <div>
                <h2 className='text-2xl font-bold'>{topic.title}</h2>
                <div>{topic.description}</div>
            </div>
            <div className='flex gap-2'>
                <div className='cursor-pointer'><RemoveBtn id={topic._id}/></div>
                <Link href={`/editTopic/${topic._id}`}>
                    <HiPencilAlt size={25}/>
                </Link>
            </div>
        </div>
    ))}
       
    </>

  )
}
