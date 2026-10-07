import React, { useState } from "react";
const YearWiseSearch = () => {
    const [year, setYear] = useState("");
    const years = Array.from(
        { length: 2026 - 1900 + 1 },
        (_, index) => 1900 + index
    );
    return (<>
        <div>
            <label></label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Year</option>

                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    </>)
}
export default YearWiseSearch;