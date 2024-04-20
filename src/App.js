import React, { useState } from 'react';
import { Switch, Route,useHistory } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';
import VoiceSearch from './Components/VoiceSearch';
import { searchData } from './api/GoogleSearch';
import { recognition } from "./api/voiceRecognition";





const App=()=>{         
  const history =useHistory();
  const [searchTerm,setSearchTerm]=useState('');
  const [googleData,setGoogleData]=useState([]);
  const [voiceSearch,setVoiceSearch] = useState(false);
  
  const setSearch= async(term)=>{
    setSearchTerm(term);
    
    const data = await searchData(term);
    setGoogleData(data);
    history.push('/search');
    //console.log(data);   
  };

  //console.log('from gooogle data',googleData);

  const openVoiceSearch = () =>{
    setVoiceSearch(true);
    recognition.start();
    recognition.onresult = (event)=>{
    const {transcript}  = event.results[0][0];
      
      if(transcript !== null || transcript !== "" || transcript !== " ")
      {
        setVoiceSearch(false);
        setSearch(transcript); 
        
      }
      else
      {
        setVoiceSearch(false);
        alert("Please try again for voice search"); 
      }
    }
  }

  const closeVoiceSearch = () =>{
    setVoiceSearch(false);
    recognition.stop();
  }


   return (
      <div className="App">
        {
          voiceSearch?(<VoiceSearch closeVoiceSearch={closeVoiceSearch} />): null
        }
        
        <Switch>
          <Route exact path= {'/'} component={()=><Home setSearch={setSearch} openVoiceSearch={openVoiceSearch} />}/>
          <Route exact path={'/search'} component={()=> <SearchScreen setSearch={setSearch} searchTerm= {searchTerm} googleData={googleData} openVoiceSearch={openVoiceSearch} />} />
        </Switch>
      </div>
    
  );
};


export default App;
