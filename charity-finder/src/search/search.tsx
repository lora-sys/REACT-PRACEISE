import React, { useState } from 'react';
import { SearchCriteria } from '../types';

interface SearchProps {
    onSearch: (criteria: SearchCriteria) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
        name: '',
        homecountry: '',
        servedCountries: []
    });
    const countries = [
        '中国', '美国', '英国', '加拿大', '澳大利亚',
        '德国', '法国', '日本', '印度', '巴西'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        // 对于多选框，需要处理数组
        if (name === 'servedCountries') {
            const target = e.target as HTMLSelectElement;
            const selectedOptions = Array.from(target.selectedOptions).map(opt => opt.value);
            setSearchCriteria(prev => ({
                ...prev,
                [name]: selectedOptions
            }));
        } else {
            setSearchCriteria(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
    //when user click the search button,call the submit function
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();//stop the default behavior of from
        setTimeout(() => {
            onSearch(searchCriteria)
        }, 1000);//请求1s后返货结果，此时已经完成加载
    }
    // when user input ,use the with the onsearch attribute to call the onSearch function
    const clearInput = () => {
        setSearchCriteria({
            name: '',
            homecountry: '',
            servedCountries: []
        });
    }; // user click the clear button,clear the input

    return (
        <section className='bg-white rounded-lg  shadow-md p-6 mb-8'>
        <form onSubmit={handleSubmit} >
        <div>
        <label className='block bg-green-200 text-gray-800 mb-2 '>组织名称</label>
        <select 
            name="name"
            value={searchCriteria.name}
            onChange={handleChange}
            className='w-full p-2 border rounded'
        >  
            <option value="">全部</option>
            <option value="希望工程">希望工程</option>
            <option value="国际红十字会">国际红十字会</option>
            <option value="世界自然基金会">世界自然基金会</option>
        </select>
        </div>


        <div>
        <label className='block bg-green-200 text-gray-800 mb-2'>所在国家</label>
        <select
        name="homecountry"
        value={searchCriteria.homecountry}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        >
        <option value="">全部</option>
        {countries.map(country => <option key={country} value={country}>{country}</option>
        )}
        </select>
        </div>

        <div>
        <label className='block bg-green-200 text-gray-800 mb-2'>服务国家</label>
        <select
            name="servedCountries"
            value={searchCriteria.servedCountries}
            onChange={handleChange}
            className='w-full p-2 border rounded'
        >
            <option value="">全部</option>
            {countries.map(country => (
            <option key={`served-${country}`} value={country}>
                {country}
                </option>
            )
            )}
        </select>
        </div>
        
        <div className='md:col-span-3  flex justify-center mt-4'>{/* md响应式布局，支持760px以上，不用媒体查询 */}
            <button
            type="submit"
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded transition duration-300 '
            >
            搜索
            </button>
        </div>
        <div>
            <button onClick={clearInput} className='bg-blue-400 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-7 rounded transition duration-300'>Clear Input</button>
        </div>
        </form>
        </section>
        
    );
};


export default Search;