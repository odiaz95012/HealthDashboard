import React from "react";
import "../globals.css"
import { Diagnosis, ProfileProps } from "../types";

export default function DiagnosticList(props: ProfileProps) {

    return (
        <div className="w-10/12 md:w-[766px] h-[350px] mx-8 overflow-hidden flex-col justify-center items-center my-5" id="diagnostic-list">
            <h1 className="card-title-24pt py-10 px-3">Diagnostic List</h1>

            <div className="flex-col flex justify-center items-center w-11/12">

                <div id="diag-list-heading" className="flex  justify-between text-start items-start w-11/12 mx-6" >
                    <p className="body-emphasized-14pt py-3 px-2 md:pl-3">Problem/Diagnosis</p>
                    <p className="body-emphasized-14pt py-3 md:px-28">Description</p>
                    <p className="body-emphasized-14pt py-3 px-3 md:px-28">Status</p>
                </div>
                <ul className="flex flex-col justify-center items-start w-11/12 h-[200px] mx-6 my-5 overflow-scroll">
                    {props.patient.diagnostic_list.map((diagnosis: Diagnosis) => (
                    <li className="border-b-2 w-full" key={diagnosis.name}>
                    <div className="flex justify-between items-start text-start">
                        <p className="body-regular-14 py-5 px-5">{diagnosis.name}</p>
                        <p className="body-regular-14 py-5 px-5">{diagnosis.description}</p>
                        <p className="body-regular-14 py-5 px-5">{diagnosis.status}</p>
                    </div>
                </li>
                    ))
                        
                    }
                
                </ul>
            </div>
        </div>
    )
}