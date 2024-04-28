import axios from "axios";
import React, { useState, useEffect } from "react";
import testData from "@/app/sampledata.json";
import Userlist from "./app/components/Userlist";
import UserSearchInput from "./app/components/UserSearchInput";

function App() {
  // KODUNUZ BURAYA GELECEK
  const [fullUserData, setFullUserData] = useState([]); 
  const [displayedUserData, setDisplayedUserData] = useState([]);


  const [userData, setUserData] = useState(testData.results);
  const [inputText, setInputText] = useState("")

   // Fetching data from API
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=500&nat=tr');
        setFullUserData(pre => [...pre, ...response.data.results]); 
        setDisplayedUserData(pre => [...pre, ...response.data.results]);
        console.log(fullUserData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {
    if (inputText === "") {
      setDisplayedUserData(fullUserData)
    } else {
      const filteredData = fullUserData.filter(user => 
        user.name.first.toLowerCase().includes(inputText.toLowerCase()) || 
        user.name.last.toLowerCase().includes(inputText.toLowerCase()) || 
        user.name.title.toLowerCase().includes(inputText.toLowerCase())
      );
      setDisplayedUserData(filteredData);
    }

  },[inputText, fullUserData])
  

  return (
    <div className="flex flex-col gap-4 mx-3 sm:mx-10 mt-5 sm:mt-10">
      <h1 className="font-bold text-2xl">Quick User Search</h1>
      <UserSearchInput inputText={inputText} setInputText={setInputText}/>
      <Userlist userData={displayedUserData}/>
    </div>
  )

}

export default App;
