import React from 'react';
import './App.css';
import Top from './top';
import { useState } from 'react';
import Search from './search/search';
import Result from './result/result';
import { Organization, SearchCriteria } from './types';

const App: React.FC = () => {
  // 搜索
  const [search, setSearch] = useState<Organization[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (criteria: SearchCriteria) => {
    setLoading(true);
    
    // fake data - 模拟API调用
    setTimeout(() => {
      const fakeData: Organization[] = [
        {
          id: 'org-001',
          name: '希望工程',
          address: '中国北京市朝阳区建国路88号',
          logo: 'https://via.placeholder.com/100?text=Hope',
          website: 'https://www.project-hope.org',
          countriesServed: ['中国', '缅甸', '老挝']
        },
        {
          id: 'org-002',
          name: '国际红十字会',
          address: '瑞士日内瓦大道19号',
          logo: 'https://via.placeholder.com/100?text=RedCross',
          website: 'https://www.redcross.org',
          countriesServed: ['全球']
        },
        {
          id: 'org-003',
          name: '绿色和平',
          address: '荷兰阿姆斯特丹Nieuwezijds Voorburgwal大街120号',
          logo: 'https://via.placeholder.com/100?text=GreenPeace',
          website: 'https://www.greenpeace.org',
          countriesServed: ['中国', '美国', '德国', '巴西']
        },
        {
          id: 'org-004',
          name: '无国界医生',
          address: '法国巴黎Rue de Lausanne大街78号',
          logo: 'https://via.placeholder.com/100?text=MSF',
          website: 'https://www.msf.org',
          countriesServed: ['非洲', '中东', '亚洲']
        }
      ];

      const filteredData = fakeData.filter(org => {
        const nameMatch = criteria.name ? org.name.includes(criteria.name) : true;
        const homeMatch = criteria.homecountry ? org.countriesServed.includes(criteria.homecountry) : true;
        const serveMatch = criteria.servedCountries ? 
          criteria.servedCountries.some(country => org.countriesServed.includes(country)) : 
          true;
        
        return nameMatch && homeMatch && serveMatch;
      });

      setSearch(filteredData);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <div className='container mx-auto px-4 py-8 flex-grow'>
        <Search onSearch={handleSearch} />
        <Result results={search} isloading={loading} />
      </div>
    </div>
  );
};

export default App;
