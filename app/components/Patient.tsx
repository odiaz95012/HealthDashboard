import React from "react";
import type { PatientListProps } from "../types";

export default function Patient(props: PatientListProps) {
    return (
        <div className="flex justify-center items-center mx-5 w-10/12 my-5">
            <img className="w-[48px] h-[48px] rounded-full" src={props.profile_picture} alt={`${props.name} Picture`} />
            <div className="flex-1 justify-center items-center text-left pl-3 pr-5 space-y-1">
                <p>{props.name}</p>
                <p className="body-secondary-info-14pt"> {props.gender}, {props.age} </p>
            </div>
            <div className="flex justify-end items-center">
                <img src="more-horiz.svg" className="w-4 h-4" />
            </div>
        </div>
    )
}