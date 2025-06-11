import React from 'react';
import {FaGithub,FaTwitter,FaWeibo,FaLinkedin, FaLinkedinIn} from 'react-icons/fa';


const Contact : React.FC =()=>{
return(
<footer className='bg-gray-400 py-8 border-t'>
<div className='container mx-auto px-4'>
    <div className='flex flex-col md:flex-row items-center'>
    <div className='flex space-x-6 mb-4'>
    <a 
    href="https://github.com/lora-sys"
    
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-blue-400 transition"
    aria-label="Github" 
    >
        <FaGithub size={24} />
    </a>
    <a 
    href="https://Twitter.com/lora-sys"
    
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-blue-400 transition"
    aria-label="Twitter" 
    >
        <FaTwitter size={24} />
    </a>
    <a 
    href="https://weibo.com/lora-sys"
    
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-blue-400 transition"
    aria-label="Weibo" 
    >
        <FaWeibo size={24} />
    </a>
    <a 
    href="https://linkedin.com/lora-sys"
    
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-blue-400 transition"
    aria-label="LinkedinIn" 
    >
        <FaLinkedinIn size={24} />
    </a>
    </div>
    <p className=' text-gray-500 text-sm'>
    © {new Date().getFullYear()} 慈善组织搜索平台. 保留所有权利.
    </p>
    </div>
</div>    
</footer>
);
};
export default Contact;