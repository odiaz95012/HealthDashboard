import React from "react";
import "../globals.css";
import DiagnosisChart from "./DiagnosisChart";
import Card from "./Card";
import { ProfileProps } from "../types";


export default function DiagnosticHistoryContainer(props: ProfileProps) {

    return (
        <div id="diagnostics-container" className="w-10/12 md:w-[765px] h-fit mx-8 overflow-hidden flex-col justify-center items-center">
            <h1 className="card-title-24pt px-3 py-3">Diagnosis History</h1>
            <div className="flex justify-center items-center">
                <DiagnosisChart patient={props.patient} />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center my-1">
                {props.patient && (
                    <>
                        <Card cardName="Respiratory Rate" color="#E0F3FA" rate={props.patient.diagnosis_history[0].respiratory_rate.value} status={props.patient.diagnosis_history[0].respiratory_rate.levels} />
                        <Card cardName="Temperature" color="#FFE6E9" rate={props.patient.diagnosis_history[0].temperature.value} status={props.patient.diagnosis_history[0].temperature.levels} />
                        <Card cardName="Heart Rate" color="#FFE6F1" rate={props.patient.diagnosis_history[0].heart_rate.value} status={props.patient.diagnosis_history[0].heart_rate.levels} />
                    </>
                )
                }

            </div>
        </div>
    )
}