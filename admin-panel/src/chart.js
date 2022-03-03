
import { Doughnutchart } from "./doughnutchart";
import { Linechart } from "./linechart";
import {PolarAreaChart} from "./polarareachart";
import {VerticalBarChart} from "./verticalbarchart";

export function Chartsection() {
  return (
    <div>
      <div class="container-fluid">
        <h2 style={{ marginBottom: "20px" }}>Charts</h2>
        <p>With v4, this library introduces a number of breaking changes. In order to improve performance, offer new features, and improve maintainability, it was necessary to break backwards compatibility, but we aimed to do so only when worth the benefit.</p>

        <div className="row">
          <div className="col-7 linechart-column">
          <h3 style={{ marginBottom: "40px" }}>Linechart</h3>
            <Linechart />
          </div>

          <div className="col-1"></div>
         
          <div className="col-4 offset-0 linechart-column">
          <h3 style={{ marginBottom: "20px" }}>Doughnutchart</h3>
            <Doughnutchart />
          </div>
        </div>
      </div>


      <div style={{ marginTop: "40px" }} class="container-fluid">
        

        <div className="row">
          <div className="col-7 linechart-column">
          <h3 style={{ marginBottom: "20px" }}>VerticalBarChart</h3>
          <VerticalBarChart />
          </div>

          <div className="col-1"></div>
          <div className="col-4 offset-0 linechart-column">
          <h3 style={{ marginBottom: "20px" }}>PolarAreaChart</h3>
             <PolarAreaChart />
          </div>
        </div>
      </div>


    </div>
  );
}
