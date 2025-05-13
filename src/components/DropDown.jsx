// components/DropDown.js
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSearchTerm } from '../store/SearchSlice';

import Tabs from './Tabs';
import MenuList from './MenuList';

function DropDown() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.search.term);
    const [activeTab, setActiveTab] = useState("Components");

    return (
        <div className="dropdown-container">
            <section className="dropdown">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    placeholder={`Search ${activeTab.toLowerCase()}`}
                    autoFocus
                    className="search-input"
                />

                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <MenuList activeTab={activeTab} searchTerm={searchTerm} />
            </section>
        </div>
    );
}

export default DropDown;
