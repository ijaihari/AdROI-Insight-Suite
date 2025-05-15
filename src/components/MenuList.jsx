import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../store/FilterSlice";

function MenuList({ activeTab, searchTerm }) {
    const dispatch = useDispatch();
    const { Components, Tags, Metrics } = useSelector((state) => state.filter);

    const generateRandomId = () => Math.floor(100000 + Math.random() * 900000);

    const tabMap = { Components, Tags, Metrics };
    const data = tabMap[activeTab] || [];

    const isComponentTab = activeTab === "Components";

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleBack = () => setSelectedComponent(null);

    const handleComponentClick = (component) => setSelectedComponent(component);

    // Now accepts keyName for Components, activeTab for Tags/Metrics
    const handleAddFilter = (componentName, value) => {
        const payload = {
            componentName,
            value,
            id: generateRandomId()
        };
        console.log("Dispatching:", payload);
        dispatch(addFilter(payload));
    };
    // Main list 
    const renderMainList = () => {
        // For Component
        if (isComponentTab) {
            const filteredComponents = data.filter((component) =>
                component.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return filteredComponents.length > 0 ? (
                filteredComponents.map((component, index) => (
                    <button
                        key={index}
                        onClick={() => handleComponentClick(component)}
                        className="menu-items"
                    >
                        {component.name}
                    </button>
                ))
            ) : (
                <p className="no-results">No results found</p>
            );
        }

        // For Tags and Metrics
        const filteredItems = data.filter((option) =>
            option.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredItems.length > 0 ? (
            filteredItems.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleAddFilter(activeTab, option)}
                    className="menu-items"
                >
                    {option}
                </button>
            ))
        ) : (
            <p className="no-results">No results found</p>
        );
    };


    // Sub List
    const renderSubList = () => {
        const filteredOptions = selectedComponent.options.filter((option) =>
            option.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <>
                <button onClick={handleBack} className="menu-back-button">
                    <i className="fa-solid fa-arrow-left"></i> Back
                </button>
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAddFilter(selectedComponent.keyName, option)}
                            className="menu-items"
                        >
                            {option}
                        </button>
                    ))
                ) : (
                    <p className="no-results">No options found</p>
                )}
            </>
        );
    };

    return (
        <div className="menu">
            {isComponentTab && selectedComponent ? renderSubList() : renderMainList()}
        </div>
    );
}

export default MenuList;
