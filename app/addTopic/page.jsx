"use client"
import React, { useState } from 'react'

import { useRouter } from 'next/navigation';

const addTopic = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission

        if(!title || !description){
            alert("Title and Description are required");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                 body : JSON.stringify({title,description})
            });

            if(res.ok){
                router.push("/");
            }else{
                throw new Error("Failed to add topic")
            }
        } catch (error) {
            alert("Error adding topic");
        }

    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input onChange={(e) => setTitle(e.target.value)} className='border border-slate-500 px-8 py-2 ' type="text" placeholder='Topic Title'/>
        <input onChange={(e) => setDescription(e.target.value)} className='border border-slate-500 px-8 py-2 ' type="text" placeholder='Topic Description'/>

        <button type='submit' className='bg-green-600 font-bold  text-white py-3 px-6 w-fit'>
            Add Topic
        </button>
    </form>
  )
}

export default addTopic