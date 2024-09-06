"use client";

import React from "react";
import { CardProps } from "../types";

export default function Card(props: CardProps) {

    return (
        <div className={`h-[242px] w-3/5 mx-3 rounded-lg my-5`} style={{ backgroundColor: props.color }}>
            <div className="w-full flex justify-start items-center my-3 mx-5 ">
                {props.cardName === "Respiratory Rate" ?
                    <img src="respiratory-rate.svg" className="rounded-full w-1/2 h-1/2" /> : <></>
                }
                {props.cardName === "Temperature" ?
                    <img src="temperature.svg" className="rounded-full w-1/2 h-1/2" /> : <></>
                }
                {props.cardName === "Heart Rate" ?
                    <img src="heart-rate.svg" className="rounded-full w-1/2 h-1/2" /> : <></>
                }
            </div>
            <div className="text-start my-2 mx-5">
                <p className="rate-title">{props.cardName}</p>
                {props.cardName === "Temperature" ? (
                    <p className="rate-data">{props.rate}° F</p>

                ) : (
                    <p className="rate-data">{props.rate} bpm</p>
                )

                }
                {props.cardName === "Heart Rate" ? (
                    <div className="flex justify-start items-center">
                        <img src="ArrowDown.svg" className="pr-2" />
                        <p className="body-regular-14 py-2">{props.status}</p>
                    </div>

                ) : (
                    <p className="body-regular-14 py-2">{props.status}</p>
                )

                }

            </div>


        </div>
    )
}