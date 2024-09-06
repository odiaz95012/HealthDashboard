import React from "react";
import { ProfileProps } from "../types";
import "../globals.css";

export default function LabResultsContainer(props: ProfileProps) {

    return(
        <div id="lab-results-container" className="w-[367px] h-fit flex flex-col justify-start items-start my-5 mb-28 md:mb-0">
            <h1 className="card-title-24pt pt-5 pl-5">Lab Results</h1>
            <ul className="flex flex-col justify-start items-start w-full">
                {props.patient && props.patient.lab_results.map((labResult: string) => (
                    <li key={labResult} className="flex justify-between items-center w-11/12 mx-3 my-3 py-3 item">
                        <p className="lab-result px-5">{labResult}</p>
                        <img src="download.svg" className="w-[20px] h-[20px] mx-5"/>
                    </li>
                ))
                    
                }
            </ul>
        </div>
    )
}