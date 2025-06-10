import React from 'react';


const Result=({results})=>{
if(results.length===0){
    return(
        <div>
            <p>请输入搜索条件查找慈善组织</p>
        </div>
    )
}
return(
<section>
<h2>搜索结果</h2>
<div>{/* 结果选择用卡片组件显示*/}
{results.map(org=>(
<div key={org.id}>
<div>
<a
href={org.website}
target="_blank"
rel="noopener noreferrer"
>
<img
src={org.logo}
alt={`${org.name} logo` }

/>
</a>

<div>{org.name}</div>
<div>ID: {org.id}</div> {/* 将图标和连接与这些文本对齐，将图标设置为文本的上方 */}
</div>
<div>
    <p>地址</p>
    <p>{org.address}</p>
</div>
<div>
    <p>服务国家：</p>
    <p>{org.countriesServed.join(',')}</p>
</div>


</div>

))}

</div>


</section>


);

};

export default Result;