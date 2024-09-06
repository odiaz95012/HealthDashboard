"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import PatientsContainer from "./components/PatientsContainer";
import DiagnosticHistoryContainer from "./components/DiagnosticHistoryContainer";
import ProfileContainer from "./components/ProfileContainer";
import PatientType from "./types";
import DiagnosticList from "./components/DiagnosticList";
import LabResultsContainer from "./components/LabResultsContainer";

export default function Home() {

  const [patients, setPatients] = useState<PatientType[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {

      await fetch("/api/getPatients").then(async (response) => {
        const data = await response.json();
        setPatients(data)
      }).catch((err) => {
        console.log(err);
      })


    };
    fetchPatients();
  }, []);
  return (
    <>

      <Navbar />
      <div className="flex justify-start my-5 overflow-hidden">

        {patients.length > 0 && patients.map((patient: PatientType) =>
          patient.name === "Jessica Taylor" ? (
            <div className="flex flex-col md:flex-row justify-center items-center my-5 overflow-hidden w-full">
              <div className="w-full md:w-auto mb-5 md:mb-0">
                <PatientsContainer patients={patients} />
              </div>

              <div className="w-full md:w-auto mb-5 md:mb-0">
                <DiagnosticHistoryContainer patient={patient} />
                <DiagnosticList patient={patient} />  
              </div>
              <div className="w-full md:w-auto mb-5 md:mb-0 flex flex-col items-center">
                <ProfileContainer key={patient.name} patient={patient} />
                <LabResultsContainer key={patient.name} patient={patient} />
              </div>
            </div>
          ) : null
        )}

      </div>

    </>
  );
}
