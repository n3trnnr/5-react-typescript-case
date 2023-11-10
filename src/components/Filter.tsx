import React from "react";
import '../styles/Filter.css'
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";

interface IFilter {
    filtered: VehicleFilter;
    setFiltered: (value: VehicleFilter) => void;
}

const Filter: React.FC<IFilter> = ({ filtered, setFiltered }) => {
    const getInputValue = (event: string | null) => {
        if (event) {
            setFiltered({ ...filtered, title: event });
        } else {
            setFiltered({ ...filtered, title: "" });
        }
    };

    const getVehicleType = (value: VehicleType | null) => {
        if (value || value === 0) {
            setFiltered({ ...filtered, type: value });
        } else {
            setFiltered({ ...filtered, type: null });
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="text here..."
                onChange={(event) => getInputValue(event.target.value)}
            />
            <VehicleTypeSelect value={filtered.type} onChange={getVehicleType} />
        </div>
    );
};

export default Filter;
