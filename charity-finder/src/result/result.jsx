import React from 'react';
import Card from "./Card.jsx";

const Result=({results,isloading})=>{
if(isloading){
    return(
    <div className='text-center py-12'>
        <div className='inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4'>
       <p className='text-gray-700'>正在搜索慈善组织</p>
        </div>

    </div>
    )
}

    if(results.length===0){
    return(
        <div className='text-center py-12'>
            <div className='bg-gray-100 rounded-full p-4 inline-block mb-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
            </div>
            <div>
                <p className='text-gray-500 text-lg'>没有找到匹配的组织</p>
                <p className='text-gray-400 mt-lg'>请尝试不同的搜素条件</p>
            </div>
        </div>
    )
}
return(
<section>
    <div>
<h2>搜索结果</h2>
<span className='bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full'>
    找到了{results.length}个组织
</span>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{results.map(org=>(
    <Card key={org.id} organization={org}/>
)
)}
</div>

</section>


);

};

export default Result;