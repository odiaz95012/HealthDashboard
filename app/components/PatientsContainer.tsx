"use client";
import React, {useEffect, useState} from "react";
import "../globals.css";
import Patient from "./Patient";
import PatientType from "../types";
import { PatientContainerProps } from "../types";

export default function PatientsContainer(props:PatientContainerProps) {

    const patients = props.patients;
    return (
        <>
            <div id="patients-container" className="w-10/12 min-w-fit h-[1054px] ml-8 overflow-scroll flex-col justify-center items-center">
                <div className="flex justify-between">
                    <p className="card-title-24pt pl-5 pt-5">Patients</p>
                    <img src="search.svg" className="w-6 h-6 mr-5 mt-5" />
                </div>

                <div className="flex-col-1 justify-center items-center">
                    {
                        patients.length > 0  && patients.map((patient) => (
                            <Patient name={patient.name} gender={patient.gender} age={patient.age} profile_picture={patient.profile_picture} key={patient.name}/>
                        ))
                    }
                </div>


            </div>
        </>
    )
}