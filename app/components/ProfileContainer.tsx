import React from "react";
import "../globals.css";
import { ProfileProps } from "../types";


export default function ProfileContainer(props: ProfileProps) {

    return (
        <div id="profile-container" className="w-10/12 md:w-[350px] h-[740px] flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center my-5">
                <img src={props.patient.profile_picture} className="w-[200px] h-[200px] aspect-auto" />
                <p className="card-title-24pt pl-5 pt-5">Jessica Taylor</p>
            </div>
            <div className="flex justify-start items-start text-center my-5">
                <img src="BirthIcon.svg" className="mx-4 w-[42px] h-[42px]"/>
                <div className="flex flex-col justify-center items-start mx-2">
                    <label htmlFor="dob" className="profile-label">Date of Birth</label>
                    <p id="dob" className="profile-data">{props.patient.date_of_birth}</p>
                </div>
            </div>
            <div className="flex justify-start items-start text-center my-5">
                <img src="FemaleIcon.svg" className="mx-4 w-[42px] h-[42px]"/>
                <div className="flex flex-col justify-center items-start mx-2">
                    <label htmlFor="gender" className="profile-label">Gender</label>
                    <p id="gender" className="profile-data">{props.patient.gender}</p>
                </div>
            </div>
            <div className="flex justify-start items-start text-center my-5">
                <img src="PhoneIcon.svg" className="mx-4 w-[42px] h-[42px]"/>
                <div className="flex flex-col justify-center items-start mx-2">
                    <label htmlFor="contanct-info" className="profile-label">Contact Info</label>
                    <p id="contact-info" className="profile-data">{props.patient.phone_number}</p>
                </div>
            </div>
            <div className="flex justify-start items-start text-center my-5">
                <img src="PhoneIcon.svg" className="mx-4 w-[42px] h-[42px]"/>
                <div className="flex flex-col justify-center items-start mx-2">
                    <label htmlFor="emer-contanct-info" className="profile-label">Emergency Contacts</label>
                    <p id="emer-contact-info" className="profile-data">{props.patient.emergency_contact}</p>
                </div>
            </div>
            <div className="flex justify-start items-start text-center my-5">
                <img src="InsuranceIcon.svg" className="mx-4 w-[42px] h-[42px]"/>
                <div className="flex flex-col justify-center items-start mx-2">
                    <label htmlFor="insurance" className="profile-label">Insurance Provider</label>
                    <p id="insurance" className="profile-data">{props.patient.insurance_type}</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="active-nav-item px-5 py-3 body-emphasized-14pt w-2/3">Show All Information</button>
            </div>
        </div>
    )
}