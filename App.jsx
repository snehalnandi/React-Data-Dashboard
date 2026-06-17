// 1. IMPORTING TOOLS
// Think of this like 'import pandas as pd' in Python. We are bringing in external tools.
import React, { useState } from "react"; 
// Importing our icons so we don't have to draw them from scratch.
import {
  LayoutDashboard, Package, Users, Settings, Sun, Moon, Search, Plus, Bell
} from "lucide-react";

// This is the main "Function" that runs our entire website.
export default function App() {
  
  // ==========================================
  // 2. THE BRAIN (STATE MANAGEMENT)
  // "State" is the app's short-term memory. When these change, the website instantly redraws itself.
  // ==========================================
  
  // Remembers if Dark Mode is active (True or False)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Remembers which page we are currently looking at (starts on 'overview')
  const [activePage, setActivePage] = useState("overview");
  
  // Remembers every single letter you type into the search bar
  const [searchQuery, setSearchQuery] = useState("");
  
  // Remembers if the user turned their notification switches on or off
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  // ==========================================
  // 3. THE DATA (OUR PANDAS DATAFRAME)
  // In a real app, this comes from a database. For now, it's a list of dictionaries.
  // ==========================================
  const inventoryData = [
    { id: 1, sku: "SKU-JT01", name: "Printed Jute Tote", category: "Bags", price: "₹800", stock: 15, status: "In Stock" },
    { id: 2, sku: "SKU-BS02", name: "Braided Sling", category: "Accessories", price: "₹450", stock: 4, status: "Low Stock" },
    { id: 3, sku: "SKU-ES03", name: "Bulk Export Sack", category: "Industrial", price: "₹1,200", stock: 50, status: "In Stock" },
    { id: 4, sku: "SKU-EH04", name: "Embroidered Handbag", category: "Bags", price: "₹600", stock: 0, status: "Out of Stock" },
    { id: 5, sku: "SKU-BP05", name: "Bamboo Planter", category: "Home", price: "₹350", stock: 22, status: "In Stock" },
    { id: 6, sku: "SKU-WL06", name: "Woven Lunch Bag", category: "Bags", price: "₹250", stock: 105, status: "In Stock" }
  ];

  const customersData = [
    { id: 1, name: "Aarav Patel", email: "aarav.p@example.com", orders: 12, spent: "₹45,000", status: "Active" },
    { id: 2, name: "Priya Sharma", email: "priya99@example.com", orders: 2, spent: "₹1,250", status: "Active" },
    { id: 3, name: "Global Retailers LLC", email: "purchasing@global.com", orders: 45, spent: "₹600,000", status: "VIP" },
    { id: 4, name: "Neha Gupta", email: "neha.gupta@example.com", orders: 1, spent: "₹800", status: "Inactive" },
    { id: 5, name: "Rohan Desai", email: "r.desai@example.com", orders: 5, spent: "₹8,400", status: "Active" }
  ];

  // ==========================================
  // 4. THE LOGIC (DATA FILTERING)
  // This is a javascript loop. It looks at every 'product' in our inventoryData.
  // ==========================================
  const filteredInventory = inventoryData.filter((product) => {
    // Make the search text lowercase so "Tote" matches "tote"
    const searchLower = searchQuery.toLowerCase();
    
    // IF the product's name, sku, OR category includes the typed letters, keep it!
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.sku.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    );
  });

  // ==========================================
  // 5. THE DESIGN VARIABLES (TAILWIND CSS)
  // The '?' means "If true". The ':' means "Else". 
  // Example: If isDarkMode is true, use dark colors. Else, use light colors.
  // ==========================================
  const themeBg = isDarkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900";
  const themeSidebar = isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200";
  const themeCard = isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200 shadow-md";
  const themeTextHeader = isDarkMode ? "text-white" : "text-slate-800";
  const themeTextSub = isDarkMode ? "text-slate-400" : "text-slate-500";
  const themeBorder = isDarkMode ? "border-slate-700/50" : "border-slate-200";

  // ==========================================
  // 6. THE VISUAL WEBSITE (HTML/JSX)
  // Everything inside return() is what actually gets drawn on the screen.
  // ==========================================
  return (
    // The massive wrapper box that holds the entire screen
    <div className={`flex min-h-screen font-sans transition-colors duration-300 ${themeBg}`}>
      
      {/* --- THE SIDEBAR MENU --- */}
      <aside className={`w-64 border-r flex flex-col transition-colors duration-300 ${themeSidebar}`}>
        
        {/* Company Logo Area */}
        <div className={`p-6 border-b ${themeBorder}`}>
          <h1 className="text-xl font-bold text-teal-500">Govinda Analytics</h1>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex-1 p-4 space-y-2">
          {/* We create a list of our 4 pages, and loop through them to create 4 buttons */}
          {["overview", "inventory", "customers", "settings"].map((page) => (
            <button
              key={page}
              // When clicked, tell the Brain to update the active page!
              onClick={() => setActivePage(page)}
              // Change the color of the button IF it is the currently active page
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors capitalize ${
                activePage === page ? "bg-teal-500/10 text-teal-500" : `${themeTextSub} hover:bg-slate-500/10`
              }`}
            >
              {/* Show the correct icon based on the page name */}
              {page === "overview" && <LayoutDashboard size={20} />}
              {page === "inventory" && <Package size={20} />}
              {page === "customers" && <Users size={20} />}
              {page === "settings" && <Settings size={20} />}
              <span className="font-medium">{page}</span>
            </button>
          ))}
        </nav>

        {/* The Dark Mode Button */}
        <div className={`p-4 border-t ${themeBorder}`}>
          <button
            // When clicked, set Dark Mode to the OPPOSITE (!) of what it currently is
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
              isDarkMode ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-700"
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </aside>

      {/* --- THE MAIN CONTENT AREA (RIGHT SIDE OF SCREEN) --- */}
      <main className="flex-1 p-8 h-screen overflow-y-auto">
        
        {/* PAGE 1: OVERVIEW */}
        {/* If the Brain says activePage is 'overview', draw everything inside these parentheses! */}
        {activePage === "overview" && (
          <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
            
            {/* Page Header */}
            <header className="mb-8">
              <h2 className={`text-3xl font-bold ${themeTextHeader}`}>Dashboard Overview</h2>
              <p className={`${themeTextSub} mt-1`}>Welcome back. Here is what's happening today.</p>
            </header>

            {/* The 3 Top Statistic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className={`p-6 rounded-xl border ${themeCard}`}>
                <h3 className={`text-sm font-medium ${themeTextSub} mb-1`}>Total Orders (Today)</h3>
                <p className={`text-3xl font-bold ${themeTextHeader}`}>142</p>
                <p className="text-sm text-teal-500 mt-2">↑ +12% from yesterday</p>
              </div>
              <div className={`p-6 rounded-xl border ${themeCard}`}>
                <h3 className={`text-sm font-medium ${themeTextSub} mb-1`}>Total Revenue</h3>
                <p className={`text-3xl font-bold ${themeTextHeader}`}>₹45,200</p>
                <p className="text-sm text-teal-500 mt-2">↑ +8% from yesterday</p>
              </div>
              <div className={`p-6 rounded-xl border ${themeCard}`}>
                <h3 className={`text-sm font-medium ${themeTextSub} mb-1`}>Low Stock Alerts</h3>
                <p className="text-3xl font-bold text-red-500">7</p>
                <p className={`text-sm ${themeTextSub} mt-2`}>Items below minimum threshold</p>
              </div>
            </div>

            {/* Recent Orders Table (Hardcoded layout for display purposes) */}
            <div className={`p-6 rounded-xl border ${themeCard}`}>
              <h3 className={`text-lg font-bold ${themeTextHeader} mb-6`}>Recent Orders</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className={`border-b ${themeBorder} text-sm ${themeTextSub}`}>
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className={`border-b ${themeBorder}`}>
                    <td className={`py-4 ${themeTextHeader}`}>#ORD-001</td>
                    <td className={`py-4 ${themeTextSub}`}>Aarav Patel</td>
                    <td className={`py-4 ${themeTextHeader}`}>₹40,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PAGE 2: INVENTORY */}
        {/* If the Brain says activePage is 'inventory', draw this instead! */}
        {activePage === "inventory" && (
          <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
            <header className="mb-8">
              <h2 className={`text-3xl font-bold ${themeTextHeader}`}>Inventory Management</h2>
            </header>
            
            <div className={`p-6 rounded-xl border ${themeCard}`}>
              
              {/* THE SEARCH BAR */}
              <div className="flex gap-4 mb-6">
                <div className={`flex-1 flex items-center gap-2 px-4 py-2 rounded-lg border ${themeBorder}`}>
                  <Search size={18} className={themeTextSub} />
                  {/* When the user types, take the 'event.target.value' (the letters) and save it to the Brain using setSearchQuery */}
                  <input 
                    type="text" 
                    placeholder="Search inventory..." 
                    className="bg-transparent outline-none w-full"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                </div>
              </div>

              {/* INVENTORY TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className={`border-b ${themeBorder} text-sm ${themeTextSub}`}>
                      <th className="pb-3">Product Name</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3">Stock</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {/* Loop through our FILTERED list of products and draw a row for each one */}
                    {filteredInventory.length > 0 ? (
                      filteredInventory.map((product) => (
                        <tr key={product.id} className={`border-b ${themeBorder}`}>
                          <td className={`py-4 ${themeTextHeader}`}>{product.name}</td>
                          <td className={`py-4 ${themeTextSub}`}>{product.category}</td>
                          <td className={`py-4 ${themeTextHeader}`}>{product.stock}</td>
                        </tr>
                      ))
                    ) : (
                      {/* If the filter finds nothing, show this message instead */}
                      <tr>
                        <td colSpan="3" className="py-8 text-center text-slate-500">No products found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: CUSTOMERS */}
        {activePage === "customers" && (
          <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
            <header className="mb-8">
              <h2 className={`text-3xl font-bold ${themeTextHeader}`}>Customer Directory</h2>
            </header>
            
            <div className={`p-6 rounded-xl border ${themeCard}`}>
              <table className="w-full text-left">
                <thead>
                  <tr className={`border-b ${themeBorder} text-sm ${themeTextSub}`}>
                    <th className="pb-3">Customer Name</th>
                    <th className="pb-3">Email</th>
                    <th className="pb-3">Total Spent</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {/* Loop through the customersData array and draw a row for each customer */}
                  {customersData.map((customer) => (
                    <tr key={customer.id} className={`border-b ${themeBorder}`}>
                      <td className={`py-4 ${themeTextHeader}`}>{customer.name}</td>
                      <td className={`py-4 ${themeTextSub}`}>{customer.email}</td>
                      <td className={`py-4 ${themeTextHeader}`}>{customer.spent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PAGE 4: SETTINGS */}
        {activePage === "settings" && (
          <div className="animate-in fade-in duration-500 max-w-4xl mx-auto">
            <header className="mb-8">
              <h2 className={`text-3xl font-bold ${themeTextHeader}`}>Account Settings</h2>
            </header>

            <div className="space-y-6">
              {/* Notification Toggle Switch Area */}
              <div className={`p-6 rounded-xl border ${themeCard}`}>
                <h3 className={`text-lg font-bold ${themeTextHeader} mb-4 flex items-center gap-2`}>
                  <Bell size={18} className="text-teal-500"/> Notifications
                </h3>
                
                <div className={`flex items-center justify-between py-3 border-b ${themeBorder}`}>
                  <div>
                    <p className={`font-medium ${themeTextHeader}`}>Low Stock Email Alerts</p>
                    <p className={`text-sm ${themeTextSub}`}>Get an email when inventory drops below 10.</p>
                  </div>
                  {/* The interactive toggle button */}
                  <button 
                    onClick={() => setEmailAlerts(!emailAlerts)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${emailAlerts ? 'bg-teal-500' : 'bg-slate-600'}`}
                  >
                    {/* The little white circle that slides left and right */}
                    <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${emailAlerts ? 'translate-x-6' : 'translate-x-0'}`}></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
