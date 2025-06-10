import React from 'react';
import './App.css';
import Top  from './top/top';
import {useState} from 'react';
import Search from './search/search';
import Result from './result/result';
function App() {
  //搜索
  const [search,setSearch]=useState([]);
  const handleSearch=()=>{
    //faka data
    const fakaData=[
      {
        id:"org-001",
        name:"Charity Organization 1",
        address:"123 Main St, Anytown, USA",
        logo:"	https://images.icon-icons.com/4286/PNG/512/care_wellness_medical_icon_266400.png",
        website:"https://www.charity1.com",
        countriesServed:['china','japan','korea'],
      },{
        id:"org-002",
        name:"Charity Organization 2",
        address:"456 Main St, Anytown, USA",
        logo:"https://images.icon-icons.com/4286/PNG/512/medical_reference_knowledge_book_icon_266399.png",
        website:"https://www.charity2.com",
        countriesServed:['global'],
        
      }
    ];
    setSearch(fakaData);
  }


return(
  <div className="flex flex-col min-h-screen">
  <Top/>
  <div className='container mx-auto px-4 py-8 flex-grow'>
    <Search onSearch={handleSearch}/>
    <Result results={search}/>
  </div>
  </div>
  
)

}
export default App;
