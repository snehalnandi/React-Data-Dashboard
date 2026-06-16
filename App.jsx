// ... existing code ...
import React, { useState } from 'react';
import { LayoutDashboard, Package, Users, Settings, Sun, Moon, Search, Plus } from 'lucide-react';

export default function App() {
  // 1. THE BRAIN: This "State" remembers if Dark Mode is active
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // NEW BRAIN: This "State" remembers which page we are looking at!
  const [activePage, setActivePage] = useState('overview');

  // 2. THE STYLES: We set up variables that change based on the State
  const themeBg = isDarkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900";
  const themeSidebar = isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200";
  const themeCard = isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200 shadow-md";
  const themeTextHeader = isDarkMode ? "text-white" : "text-slate-800";
  const themeTextSub = isDarkMode ? "text-slate-400" : "text-slate-500";
  const themeBorder = isDarkMode ? "border-slate-700/50" : "border-slate-200";

  return (
    <div className={`flex min-h-screen font-sans transition-colors duration-300 ${themeBg}`}>
      
      {/* SIDEBAR */}
      <aside className={`w-64 border-r flex flex-col transition-colors duration-300 ${themeSidebar}`}>
        <div className={`p-6 border-b ${themeBorder}`}>
          <h1 className="text-xl font-bold text-teal-500">Govinda Analytics</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {/* Changed to buttons to update the activePage state */}
          <button 
            onClick={() => setActivePage('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'overview' ? 'bg-teal-500/10 text-teal-500' : `${themeTextSub} hover:bg-slate-500/10`
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Overview</span>
          </button>
          
          <button 
            onClick={() => setActivePage('inventory')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'inventory' ? 'bg-teal-500/10 text-teal-500' : `${themeTextSub} hover:bg-slate-500/10`
            }`}
          >
            <Package size={20} />
            <span className="font-medium">Inventory</span>
          </button>
          
          <button 
            onClick={() => setActivePage('customers')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'customers' ? 'bg-teal-500/10 text-teal-500' : `${themeTextSub} hover:bg-slate-500/10`
            }`}
          >
            <Users size={20} />
            <span className="font-medium">Customers</span>
          </button>
          
          <button 
            onClick={() => setActivePage('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'settings' ? 'bg-teal-500/10 text-teal-500' : `${themeTextSub} hover:bg-slate-500/10`
            }`}
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </button>
        </nav>

        {/* DARK MODE TOGGLE BUTTON */}
        <div className={`p-4 border-t ${themeBorder}`}>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors font-medium ${
              isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-200' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8">
        
        {/* IF STATE IS 'OVERVIEW', SHOW THIS: */}
        {activePage === 'overview' && (
          <div className="animate-in fade-in duration-500">
            <header className="mb-8">
              <h2 className={`text-3xl font-bold ${themeTextHeader}`}>Dashboard Overview</h2>
              <p className={`${themeTextSub} mt-1`}>Welcome back. Here is what's happening today.</p>
            </header>

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className={`p-6 rounded-xl border transition-colors duration-300 ${themeCard}`}>
                <h3 className={`text-sm font-medium ${themeTextSub} mb-1`}>Total Orders (Today)</h3>
                <p className={`text-3xl font-bold ${themeTextHeader}`}>142</p>
                <p className="text-sm text-teal-500 mt-2">↑ +12% from yesterday</p>
              </div>

              <div className={`p-6 rounded-xl border transition-colors duration-300 ${themeCard}`}>
                <h3 className={`text-sm font-medium ${themeTextSub} mb-1`}>Total Revenue</h3>
                <p className={`text-3xl font-bold ${themeTextHeader}`}>₹45,200</p>
                <p className="text-sm text-teal-500 mt-2">↑ +8% from yesterday</p>
              </div>

              <div className={`p-6 rounded-xl border transition-colors duration-300 ${themeCard}`}>
                <h3 className={`text-sm font-medium ${themeTextSub} mb-1`}>Low Stock Alerts</h3>
                <p className="text-3xl font-bold text-red-500">7</p>
                <p className={`text-sm ${themeTextSub} mt-2`}>Items below minimum threshold</p>
              </div>
            </div>

            {/* MAIN CHART AREA */}
            <div className={`p-6 rounded-xl border transition-colors duration-300 ${themeCard}`}>
              <div className="mb-6">
                <h3 className={`text-lg font-bold ${themeTextHeader}`}>Revenue Trend (Last 7 Days)</h3>
                <p className={`text-sm ${themeTextSub}`}>Daily sales performance across all channels</p>
              </div>
              
              <div className="h-64 w-full relative">
                <svg viewBox="0 0 800 200" className="w-full h-full overflow-visible">
                  <line x1="0" y1="50" x2="800" y2="50" stroke={isDarkMode ? "#334155" : "#e2e8f0"} strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="800" y2="100" stroke={isDarkMode ? "#334155" : "#e2e8f0"} strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="800" y2="150" stroke={isDarkMode ? "#334155" : "#e2e8f0"} strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="200" x2="800" y2="200" stroke={isDarkMode ? "#334155" : "#cbd5e1"} strokeWidth="1" />
                  
                  <polyline points="0,120 133,73 266,100 400,53 533,80 666,13 800,40" fill="none" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  <circle cx="0" cy="120" r="6" fill={isDarkMode ? "#1e293b" : "#ffffff"} stroke="#14b8a6" strokeWidth="3" />
                  <circle cx="133" cy="73" r="6" fill={isDarkMode ? "#1e293b" : "#ffffff"} stroke="#14b8a6" strokeWidth="3" />
                  <circle cx="266" cy="100" r="6" fill={isDarkMode ? "#1e293b" : "#ffffff"} stroke="#14b8a6" strokeWidth="3" />
                  <circle cx="400" cy="53" r="6" fill={isDarkMode ? "#1e293b" : "#ffffff"} stroke="#14b8a6" strokeWidth="3" />
                  <circle cx="533" cy="80" r="6" fill={isDarkMode ? "#1e293b" : "#ffffff"} stroke="#14b8a6" strokeWidth="3" />
                  <circle cx="666" cy="13" r="6" fill={isDarkMode ? "#1e293b" : "#ffffff"} stroke="#14b8a6" strokeWidth="3" />
                  <circle cx="800" cy="40" r="6" fill={isDarkMode ? "#1e293b" : "#ffffff"} stroke="#14b8a6" strokeWidth="3" />
                </svg>

                <div className={`flex justify-between text-xs ${themeTextSub} mt-4 px-1`}>
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </div>

            {/* RECENT ORDERS TABLE */}
            <div className={`p-6 rounded-xl border mt-8 transition-colors duration-300 ${themeCard}`}>
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h3 className={`text-lg font-bold ${themeTextHeader}`}>Recent Orders</h3>
                  <p className={`text-sm ${themeTextSub}`}>Latest transactions from your store</p>
                </div>
                <button className="text-sm text-teal-500 hover:text-teal-400 font-medium">View All</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`border-b ${themeBorder} text-sm ${themeTextSub}`}>
                      <th className="pb-3 font-medium">Order ID</th>
                      <th className="pb-3 font-medium">Customer</th>
                      <th className="pb-3 font-medium">Product</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 text-right font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className={`border-b ${themeBorder} hover:bg-slate-500/5 transition-colors`}>
                      <td className={`py-4 font-medium ${themeTextHeader}`}>#ORD-001</td>
                      <td className={`py-4 ${themeTextSub}`}>Aarav Patel</td>
                      <td className={`py-4 ${themeTextSub}`}>Printed Jute Tote (x50)</td>
                      <td className="py-4"><span className="px-2 py-1 bg-teal-500/10 text-teal-500 rounded-full text-xs font-medium border border-teal-500/20">Shipped</span></td>
                      <td className={`py-4 text-right font-medium ${themeTextHeader}`}>₹40,000</td>
                    </tr>
                    <tr className={`border-b ${themeBorder} hover:bg-slate-500/5 transition-colors`}>
                      <td className={`py-4 font-medium ${themeTextHeader}`}>#ORD-002</td>
                      <td className={`py-4 ${themeTextSub}`}>Priya Sharma</td>
                      <td className={`py-4 ${themeTextSub}`}>Braided Sling</td>
                      <td className="py-4"><span className="px-2 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-medium border border-amber-500/20">Processing</span></td>
                      <td className={`py-4 text-right font-medium ${themeTextHeader}`}>₹450</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* IF STATE IS 'CUSTOMERS', SHOW THIS: */}
        {activePage === 'customers' && (
          <div className="animate-in fade-in duration-500">
            <header className="mb-8">
              <h2 className={`text-3xl font-bold ${themeTextHeader}`}>Customer Directory</h2>
              <p className={`${themeTextSub} mt-1`}>Manage your client relationships and export histories.</p>
            </header>
            <div className={`p-12 rounded-xl border flex flex-col items-center justify-center text-center transition-colors duration-300 ${themeCard}`}>
              <Users size={48} className={`mb-4 ${themeTextSub} opacity-50`} />
              <h3 className={`text-xl font-bold ${themeTextHeader} mb-2`}>Customer Module Coming Soon</h3>
              <p className={`${themeTextSub} max-w-md`}>You have slated this feature for Phase 2 of development. This section will hold client purchase histories and contact details.</p>
            </div>
          </div>
        )}

        {/* IF STATE IS 'SETTINGS', SHOW THIS: */}
        {activePage === 'settings' && (
          <div className="animate-in fade-in duration-500">
            <header className="mb-8">
              <h2 className={`text-3xl font-bold ${themeTextHeader}`}>Dashboard Settings</h2>
              <p className={`${themeTextSub} mt-1`}>Configure your analytics preferences and notifications.</p>
            </header>
            <div className={`p-12 rounded-xl border flex flex-col items-center justify-center text-center transition-colors duration-300 ${themeCard}`}>
              <Settings size={48} className={`mb-4 ${themeTextSub} opacity-50`} />
              <h3 className={`text-xl font-bold ${themeTextHeader} mb-2`}>Settings Module Coming Soon</h3>
              <p className={`${themeTextSub} max-w-md`}>Preferences for alerts, user access, and API integrations will be available in the next sprint.</p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
// ... existing code ...
