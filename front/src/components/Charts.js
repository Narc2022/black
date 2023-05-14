import React from 'react'
import Chart from "react-apexcharts";

const Charts = ({ options, intensity, type, width }) => {
    return (
        <Chart
            options={options}
            series={intensity}
            type={type}
            width={width}
        />
    )
}

export default Charts