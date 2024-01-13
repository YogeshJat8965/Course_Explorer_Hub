import logo from './logo.svg';
import './App.css';
import { filterData } from './Data.js';
import { useState, useEffect } from 'react';
import FilterBtn from './FilterBtn.js';
import { apiUrl } from './Data.js';
import Card from './Card.js';
import Spinner from "./Spinner.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [data, setData] = useState(filterData);  // buttons k liye data yaha se aaya
  const [apiData, setApiData] = useState([]);    // api call karke data nikala fir cards component m use kiya.
  const [loading, setLoading] = useState(false);
  const [category,setcategory] = useState(filterData[0].title);

  const apiFetchFunction = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      let ans = output.data;
      setApiData(output.data);

      console.log("showing ans");
      console.log(ans);

      console.log("showing apiData");
      console.log(apiData);
      // console.log("showing only output");
      // console.log(output);

      // console.log(apiData);

    }
    catch (error) {
      console.log("u have errrrorrrr");
    }
    setLoading(false);

    // return fetch(apiUrl)
    //  .then( (res) => res.json() )
    //  .then( (d) => setApiData(d) )
    //  console.log(apiData);

  }

  useEffect(() => {
    apiFetchFunction()
  }, []);

  useEffect(() => {
    // This will log the updated apiData whenever it changes.
    console.log("Updated apiData:", apiData);
  }, [apiData]);

  // useEffect( () => {
  //   console.log("one more useeffect")},[apiData] );

  

  return (
    <div className="min-h-screen flex-col flex justify-center items-center bg-indigo-400 overflow-x-hidden">

      <div className=''>
        <nav className='w-[100vw] bg-black  py-4' >
          <h1 className='text-center text-3xl font-bold text-white'>Top Courses</h1>
        </nav>
      </div>

      <div className='flex flex-col justify-center items-center ' > 
        <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center' >
          {
            data.map((data) => { return <FilterBtn {...data}  key={data.id} category={category} setcategory={setcategory} setLoading={setLoading} ></FilterBtn> })
          }
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ' >
          {loading ? (<Spinner></Spinner>) : (<Card courses={apiData} category={category} ></Card>)}
        </div>
      </div>  

    </div>
  );
}

export default App;
