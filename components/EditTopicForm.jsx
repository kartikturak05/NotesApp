"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();


    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      } else {
        router.push("/"); // Redirect to home page after update
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-3">
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="border border-slate-500 px-8 py-2 "
        type="text"
        placeholder="Topic Title"
      />
      <input
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="border border-slate-500 px-8 py-2 "
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold  text-white py-3 px-6 w-fit cursor-pointer"
      >
        Edit Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
