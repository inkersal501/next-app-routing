"use client";
import { useParams } from "next/navigation";

export default function Blogs () {
 
    const params = useParams(); 
    return (
        <>
            <h1 className="text-center text-2xl font-semibold text-blue-800 mt-20">Dynamic Blogs page /{params.postId}</h1>
        </>
    )
}