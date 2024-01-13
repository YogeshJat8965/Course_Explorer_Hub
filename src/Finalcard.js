import { FcLike,FcLikePlaceholder  } from "react-icons/fc";
import { toast } from 'react-toastify';
import Card from "./Card";
import { useState,useEffect } from "react";

export default function Finalcard({ course,likedCourses,setLikedCourses }) {



    function clickHandler (){

        if( likedCourses.includes(course.id) ){
            // phle se hi liked hua pda h
            setLikedCourses( (prev) => prev.filter( (id) => id !== course.id ) );
            toast.warning("Removed");
        }

        else{

            // phle se like nhi h so 2 possibility ya to eb bhi liked courses nhi h ya phle se ek ya jada liked courses h
            if( likedCourses.length === 0 ){
                setLikedCourses( [course.id] );
            }
            else{
                setLikedCourses( (prev) => [...prev,course.id] )
            }
            toast.success("Liked");
        }

    }

    return (

        <div className="w-[300px]   bg-blue-200 rounded-lg overflow-hidden ">

            <div className="relative" >
                <img src={course.image.url} ></img>
                <div className="absolute h-[40px] w-[40px] rounded-full bg-white right-2 top-[148px] " >
                    <button onClick={clickHandler} >
                        {likedCourses.includes(course.id) ?
                        (<FcLike size={40} ></FcLike>) :
                        (<FcLikePlaceholder  size={36} ></FcLikePlaceholder>) }
                    </button>
                </div>
            </div>



            <div className="p-4" >
                <p className="text-white font-semibold text-lg leading-6" >{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>

    );

}