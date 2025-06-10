import React from 'react';

const Card=({organization})=>{
const {id,name,address,logo,website,countriesServed}=organization;
return(
<div>
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
        e.target.onError=null;
        e.target.src="https://via.placeholder.com/100?text=Logo"
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
    <span
    key={country}
    className='bg-blue-400 text-white '
    >

    </span>
})}
</div>
</div>











</div>



)
}

export default Card;