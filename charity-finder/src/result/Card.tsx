import React from 'react';
import { Organization } from '../types';
const Card :React.FC<{organization:Organization}> =({organization})=>{
const {id,name,address,logo,website,countriesServed}=organization;
return(
<div className="">
<div>
    <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    >
    <img
    src={logo || "https://images.icon-icons.com/4286/PNG/512/care_wellness_medical_icon_266400.png"}
    alt={`  ${name} logo`} 
    onError={(e)=>{
        const target=e.target as HTMLImageElement
        target.onerror=null;
        target.src="https://via.placeholder.com/100?text=Logo"
    }}   
    /> 
    </a>
    <div>
    <h3>{name}</h3>
    <p>ID:{id}</p>
    </div>

</div>
{/*   设置图标链接区域 */}

{/*设置地址 */}
<div className='mb-4'>
<p className=' font-semibold text-gray-800 mb-1'>地址：</p>
<p className='text-gray-600'>{address}</p>
</div>


{/*服务国家区域 */}
<div className='mb-2'>
<p className='font-semibold text-gray-700 mb-1'>服务国家:</p>
<div className='flex flex-wrap'>
{countriesServed.map((country)=>{
    return (
    <span
    key={country}
    className='bg-blue-400 text-xs px-2 py-1 rounded'
    >
    {country}
    </span>
    )
})}
</div>
</div>

{/* 设置网站链接区域 */}
<div className='bg-gray-50 px-6 py-3 border-t border-gray-200'>
<a 
href={website}
target='_blank'
rel="nopener noreferrer"
className='text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center'
>
    访问官网
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
</a>


</div>









</div>



)
}

export default Card;