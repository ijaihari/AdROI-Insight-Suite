import { useSelector } from "react-redux";

function FilteredTable() {
    const { mockData, AddedFilter } = useSelector(state => state.filter);
    console.log(AddedFilter);

    // Create a mapping from component names to selected values

    /*  const filterMap = {};
     AddedFilter.forEach(({ componentName, value }) => {
         filterMap[componentName] = value;
     });
     console.log(filterMap) */

    // Filter logic
    const filteredData = AddedFilter.length === 0
        ? mockData // No filter, show everything
        : mockData

        /* mockData.filter(item =>
            Object.entries(filterMap).every(([key, val]) => {
                if (key === 'Tags') {
                    // Check if any of the selected tags are present in the item
                    return item[key].some(tag => val.includes(tag)); // Matching any tag
                }
                return item[key] === val;
            })
        ) */;

    return (
        <div className="table-container">
            <h2 className="table-title">Insight Table</h2>
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
                                        {Array.isArray(value) ? value.join(", ") : value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No matching data found.</p>
            )}
        </div>
    );
}

export default FilteredTable;
