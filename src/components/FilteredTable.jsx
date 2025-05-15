import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setDataCount } from "../store/FilterSlice";
import { useEffect, useMemo } from "react";

function FilteredTable() {
    const dispatch = useDispatch();
    const { mockData, AddedFilter, dataCount } = useSelector(state => state.filter);
    const { id } = useParams();

    function useTableTitle(id) {
        const AddedFilter = useSelector((state) => state.filter.AddedFilter);
        const filter = AddedFilter.find((filter) => filter.id === Number(id));
        return filter ? `Filter: ${filter.value} (${dataCount})` : "Insight Table";
    }
    const title = useTableTitle(id);

    // Memoize filteredData so it's recalculated only when dependencies change
    const filteredData = useMemo(() => {
        if (AddedFilter.length > 0 && id) {
            const activeFilter = AddedFilter.find(filter => filter.id === Number(id));
            console.log(activeFilter);

            if (activeFilter) {
                const { componentName, value } = activeFilter;

                return mockData.filter(item => {
                    if (componentName.toLowerCase() === "tags") {
                        return Array.isArray(item.Tags) && item.Tags.includes(value);
                    }
                   
                    return item[componentName] === value;
                });
            }
        }
        return mockData;
    }, [AddedFilter, id, mockData]);

    // Dispatch setDataCount whenever filteredData changes
    useEffect(() => {
        dispatch(setDataCount(filteredData.length));
    }, [filteredData, dispatch]);

    return (
        <div className="table-container">
            <section className="table-tools">
                <span className="active-filter">{title}</span>
                <section className="data-view">
                    <button><span className="material-symbols-outlined">view_module</span></button>
                    <button><span className="material-symbols-outlined">table</span></button>
                </section>
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
