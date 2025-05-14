import { useDispatch, useSelector } from "react-redux";
import { data, useParams } from "react-router-dom";
import { setDataCount } from "../store/FilterSlice";

function FilteredTable() {
    const dispatch = useDispatch();
    const { mockData, AddedFilter, dataCount } = useSelector(state => state.filter);
    console.log(AddedFilter);
    const { id } = useParams();

    function useTableTitle(id) {
        const AddedFilter = useSelector((state) => state.filter.AddedFilter);
        const filter = AddedFilter.find((filter) => filter.id === Number(id));
        return filter ? `Filter: ${filter.value} (${dataCount})` : "Insight Table";
    }
    const title = useTableTitle(id);

    let filteredData = mockData;
    if (AddedFilter.length > 0 && id) {
        const activeFilter = AddedFilter.find(filter => filter.id === Number(id));
        console.log(activeFilter)

        if (activeFilter) {
            const { componentName, value } = activeFilter;

            filteredData = mockData.filter(item => item[componentName] == value);
            console.log(filteredData)
            dispatch(setDataCount(filteredData.length));
        }
        else {
            filteredData = mockData;
            dispatch(setDataCount(filteredData.length));
        }

    }

    return (
        <div className="table-container">
            <section className="table-tools">
                <span className="active-filter">{title}</span>
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
