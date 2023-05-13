import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./App.css";

function App() {
  const [alldb,setallDb]=useState({})

useEffect(()=>{
axios.get('http://localhost:5000/').then(({data})=>{

})

},[])
  // const[dbdata,setDbdata]= useState[]

  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });
  return (
    <div className="App">
      <h1>
        <b>Dashboard Visualization</b>
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="420"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="heatmap"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="420"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
