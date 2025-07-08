import React, { useState } from 'react';
import { Settings } from 'lucide-react';

const ExtensionsList = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const extensions = [
    {
      id: 1,
      name: 'DevLens',
      description: 'Quickly inspect page layouts and visualize element boundaries.',
      icon: '🔍',
      iconBg: 'bg-green-300',
      active: true
    },
    {
      id: 2,
      name: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      icon: '📋',
      iconBg: 'bg-cyan-300',
      active: true
    },
    {
      id: 3,
      name: 'SpeedBoost',
      description: 'Optimizes browser resource usage to accelerate page loading.',
      icon: '🚀',
      iconBg: 'bg-pink-300',
      active: false
    },
    {
      id: 4,
      name: 'JSONWizard',
      description: 'Formats, validates, and prettifies JSON responses in-browser.',
      icon: '🧙',
      iconBg: 'bg-pink-300',
      active: true
    },
    {
      id: 5,
      name: 'TabMaster Pro',
      description: 'Organizes browser tabs into groups and sessions.',
      icon: '📁',
      iconBg: 'bg-purple-300',
      active: true
    },
    {
      id: 6,
      name: 'ViewportBuddy',
      description: 'Simulates various screen resolutions directly within the browser.',
      icon: '📱',
      iconBg: 'bg-blue-300',
      active: false
    },
    {
      id: 7,
      name: 'Markup Notes',
      description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
      icon: '📝',
      iconBg: 'bg-cyan-300',
      active: true
    },
    {
      id: 8,
      name: 'GridGuides',
      description: 'Overlay customizable grids and alignment guides on any webpage.',
      icon: '⊞',
      iconBg: 'bg-purple-300',
      active: false
    },
    {
      id: 9,
      name: 'Palette Picker',
      description: 'Instantly extracts color palettes from any webpage.',
      icon: '🎨',
      iconBg: 'bg-green-300',
      active: true
    },
    {
      id: 10,
      name: 'LinkChecker',
      description: 'Scans and highlights broken links on any page.',
      icon: '🔗',
      iconBg: 'bg-orange-300',
      active: true
    },
    {
      id: 11,
      name: 'DOM Snapshot',
      description: 'Capture and export DOM structures quickly.',
      icon: '📸',
      iconBg: 'bg-cyan-300',
      active: false
    },
    {
      id: 12,
      name: 'ConsolePlus',
      description: 'Enhanced developer console with advanced filtering and logging.',
      icon: '💻',
      iconBg: 'bg-green-300',
      active: true
    }
  ];

  const filteredExtensions = extensions.filter(ext => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return ext.active;
    if (activeTab === 'inactive') return !ext.active;
    return true;
  });

  const ExtensionCard = ({ extension }) => {
    const [isActive, setIsActive] = useState(extension.active);

    return (
      <div className="bg-gray-800 rounded-2xl p-6 flex flex-col justify-between h-full border border-gray-700 hover:border-gray-600 transition-colors">
        
        
        <div>

       
        <div className={`flex justify-center items-center rounded-2xl w-14 h-14 ${extension.iconBg} text-2xl`}>
          {extension.icon}
        </div>
        <h1 className='mt-4 text-lg font-semibold'>{extension.name}</h1>
        <p className='text-sm text-gray-100 leading-relaxed'>{extension.description}</p>
       </div>
       <div className='flex justify-between items-center '>
        <button className='bg-gray-700 text-white mt-4 px-4 py-2 hover:bg-gray-600 rounded-lg font-medium text-sm'>remove</button>
       
       <label  className='inline-flex items-center relative cursor-pointer'>
        <input type="checkbox" 
        checked={isActive}
        onChange={()=>setIsActive(!isActive)}
        className='sr-only peer'
        
        />
        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full after:content-[''] after:bg-white after:absolute after:top-[2px] after:left-[2px] peer-checked:bg-red-500 after:w-5 after:h-5 after:rounded-full after:transition-all"></div>
       </label>
       
       </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
     
     {/* // {Header} */}

      <div className="max-w-7xl  mx-auto mb-7">
         <div className="flex justify-between items-center bg-gray-800 rounded-2xl p-4">
          <div className="flex items-center gap-4">
         <div className="flex w-10 bg-red-500 items-center justify-center rounded-lg">
          <span className='text-white text-xl'>⚙</span>
         </div>
         <h1 className='text-xl text-white font-semibold'>Extensions</h1>
          </div>
          <button className='text-gray-400 hover:text-white transition-colors'>
            <Settings className='w-6 h-6' />
          </button>
         </div>
      </div>







    

    

     
      <div className="max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-8">
        
        <h1 className='font-bold text-2xl'>Extension List</h1>
        
        <div className='flex gap-3'>

       <button onClick={()=>setActiveTab("all")} className={`px-4 py-2 rounded-full font-medium ${activeTab=="all"?`bg-red-500 text-white`:`bg-gray-800 text-gray-200 hover:text-white`}`}>
        All
       </button>
 <button onClick={()=>setActiveTab("active")} className={`px-4 py-2 rounded-full font-medium ${activeTab=="active"?`bg-red-500 text-white`:`bg-gray-800 text-gray-200 hover:text-white`}`}>
        Active
       </button>

        <button onClick={()=>setActiveTab("inactive")} className={`px-4 py-2 rounded-full font-medium ${activeTab=="inactive"?`bg-red-500 text-white`:`bg-gray-800 text-gray-200 hover:text-white`}`}>
        Inactive
       </button>

        </div>
        
        </div>  
       















        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredExtensions.map((extensions)=>(
            <ExtensionCard key={extensions.id} extension={extensions} />
          ))}
        </div>
      </div>
    </div>  
  );
};

export default ExtensionsList;