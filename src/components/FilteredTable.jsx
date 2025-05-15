import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setDataCount } from "../store/FilterSlice";
import { useEffect, useMemo, useState } from "react";

function FilteredTable() {
    const dispatch = useDispatch();
    const { mockData, AddedFilter, dataCount } = useSelector(state => state.filter);
    const { id } = useParams();

    const [sortMetric, setSortMetric] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    function useTableTitle(id) {
        const AddedFilter = useSelector((state) => state.filter.AddedFilter);
        const filter = AddedFilter.find((filter) => filter.id === Number(id));
        return filter ? `Filter: ${filter.value} (${dataCount})` : "Insight Table";
    }

    const title = useTableTitle(id);

    const metricOptions = [
        { label: "Installs Per Mille (IPM)", value: "IPM" },
        { label: "Click Through Rate (CTR)", value: "CTR" },
        { label: "Ad Spend (Spend)", value: "Spend" },
        { label: "Ad Impressions (Impressions)", value: "Impressions" },
        { label: "Ad Clicks (Clicks)", value: "Clicks" },
        { label: "Cost Per Mille (CPM)", value: "CPM" },
        { label: "Cost Per Click (CPC)", value: "CPC" },
        { label: "Cost Per Install (CPI)", value: "CPI" },
        { label: "App Installs (Installs)", value: "Installs" }
    ];



    const filteredData = useMemo(() => {
        let result = mockData;

        if (AddedFilter.length > 0 && id) {
            const activeFilter = AddedFilter.find(filter => filter.id === Number(id));
            if (activeFilter) {
                const { componentName, value } = activeFilter;

                result = mockData.filter(item => {
                    if (componentName.toLowerCase() === "tags") {
                        return Array.isArray(item.Tags) && item.Tags.includes(value);
                    }
                    return item[componentName] === value;
                });
            }
        }

        if (sortMetric) {
            result = [...result].sort((a, b) => {
                const aVal = parseFloat(a[sortMetric]) || 0;
                const bVal = parseFloat(b[sortMetric]) || 0;
                return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
            });
        }

        return result;
    }, [AddedFilter, id, mockData, sortMetric, sortOrder]);

    useEffect(() => {
        dispatch(setDataCount(filteredData.length));
    }, [filteredData, dispatch]);

    return (
        <div className="table-container">
            <section className="table-tools">
                <span className="active-filter">{title}</span>

                <div className="toolsgroup">
                    <section className="sort-controls">
                        <div className="custom-dropdown sortby">
                            <label>Sort by</label>
                            <select value={sortMetric} onChange={(e) => setSortMetric(e.target.value)}>
                                <option value="">Select Metric</option>
                                {metricOptions.map((metric) => (
                                    <option key={metric.value} value={metric.value}>
                                        {metric.label}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className="custom-dropdown sortorder">
                            <label>Order</label>
                            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="desc">High to Low</option>
                                <option value="asc">Low to High</option>
                            </select>
                        </div>
                    </section>

                    <section className="data-view">
                        <button><span className="material-symbols-outlined">view_module</span></button>
                        <button><span className="material-symbols-outlined">table</span></button>
                    </section>
                </div>
            </section>

            {filteredData.length > 0 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Creative ID</th>
                            <th>Creative Name</th>
                            <th>Tags</th>
                            <th>Country</th>
                            <th>Ad Network</th>
                            <th>OS</th>
                            <th>Campaign</th>
                            <th>Ad Group</th>
                            <th>IPM</th>
                            <th>CTR</th>
                            <th>Spend</th>
                            <th>Impressions</th>
                            <th>Clicks</th>
                            <th>CPM</th>
                            <th>CPC</th>
                            <th>CPI</th>
                            <th>Installs</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((value, colIndex) => (
                                    <td key={colIndex}>
                                        {Array.isArray(value) ? value.join(" ") : value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-data">No matching data found</p>
            )}
        </div>
    );
}

export default FilteredTable;
