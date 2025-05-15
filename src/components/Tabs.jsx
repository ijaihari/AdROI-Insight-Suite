// components/Tabs.js
function Tabs({ activeTab, setActiveTab }) {
    const tabs = ["Components", "Tags"];

    return (
        <div className="tabs">
            {tabs.map(tab => (
                <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default Tabs;
