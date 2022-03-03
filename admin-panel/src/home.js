import "./home.css";
import {Linechart} from "./linechart";
import {Doughnutchart} from "./doughnutchart"

export function Home() {
  return (
    <div className="container-fluid home-container-fluid">
      <div className="row">
        <div className="main-heading">
          <h3>Dashboard</h3>
        </div>
      </div>
      <div className="row report-cards-row">
        <div className="report-cards col-12 col-sm-6 col-md-12 col-lg-3 col-xl-3  mt-2">
          <p style={{color : "green"}}>EARNINGS (MONTHLY)</p>
          <h6>$40,000</h6>
        </div>

        <div className=" report-cards col-12 col-sm-6 col-md-12 col-lg-3 col-xl-3  mt-2">
          <p style={{color : "blue"}}>EARNINGS (ANNUAL)</p>
          <h6>$215,000</h6>
        </div>

        <div className=" report-cards col-12 col-sm-6 col-md-12 col-lg-3 col-xl-3  mt-2">
          <p style={{color : "red"}}>TASKS</p>
          <h6>50%</h6>
        </div>

        <div className=" report-cards col-12 col-sm-6 col-md-12 col-lg-3 col-xl-3  mt-2">
          <p style={{color : "violet"}}>PENDING REQUESTS</p>
          <h6>18</h6>
        </div>
      </div>
      
      <div className="row home-chart-row">
          <div className="col-7 col-sm-12 col-md-12 col-lg-7 col-xl-7 linechart-column mt-sm-2">
              <Linechart />
          </div>
          
          <div className="col-1">

          </div>
          <div className="col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 offset-0 linechart-column mt-sm-2">
          <Doughnutchart />
          </div>
      </div>
      
    </div>
  );
}
