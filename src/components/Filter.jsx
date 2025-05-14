import { useDispatch, useSelector } from "react-redux";
import { deleteFilter, toogleDropDown, clearAllFilters } from "../store/FilterSlice";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";

function Filter() {

    const DropStatus = useSelector((state) => state.filter.dropStatus);
    const AddedFilter = useSelector((state) => state.filter.AddedFilter);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="filter-section">

            <section className="filter-container">
                <button
                    onClick={() => dispatch(toogleDropDown())}
                    className="btn-filter add-filter"
                >
                    <i className="add-i fa-solid fa-plus"></i> Add Filter
                </button>

                {AddedFilter.map((add, index) => (
                    <button key={index} className="btn-filter" onClick={() => { navigate(`/console/filtered/${add.id}`) }}>
                        {add.value} 
                        <span
                            onClick={() => dispatch(deleteFilter(add))}
                            className="del-filter"
                        >
                            <i className="del-i fa-solid fa-xmark"></i>
                        </span>
                    </button>

                ))}
                <button className="clear-filter-btn" onClick={() => dispatch(clearAllFilters())}>Clear</button>
            </section>

            {DropStatus && <DropDown />}
        </div>
    );
}

export default Filter;
