"use client"
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';

const RemoveBtn = ({id}) => {
    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm("Are you sure you want to delete this topic?");
        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE"
            });
            if(res.ok){
                router.refresh();
            }  
        }
    }

  return (
    <button className='text-red-400' onClick={removeTopic}>
      <HiOutlineTrash size={25} />
    </button>
  )
}

export default RemoveBtn