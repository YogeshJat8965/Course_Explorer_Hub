import Finalcard from "./Finalcard";
import { useState, useEffect } from "react";

export default function Card({ courses, category }) {

    // let allCourses = [];

    const [allCourses, setcourses] = useState([]);
    const [likedCourses, setLikedCourses] = useState([]);


    // useEffect(() => {


        // if (category === 'All') {
        //     let temp = [];
        //     const getCourses = () => Object.values(courses).forEach((courseCategory) => {
        //         courseCategory.forEach((course) => {
        //             temp.push(course);
        //             setcourses(temp);
        //             return allCourses;
        //             console.log("showing allcourses");
        //             console.log(allCourses);
        //         });
        //     })
        //     getCourses();
        // }

        // else{
        //     return courses[category];
        // }

    // }, [category]
    // );


    function getCourses(){
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                } )
            } )
            return allCourses;
        }

        else{
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4" >
            {
                getCourses().map((course) => {
                    return <Finalcard course={course}
                        keyId={course.id}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                        key={course.id} ></Finalcard>
                })
            }
        </div>

    );

}