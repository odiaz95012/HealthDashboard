"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import Chart, { layouts, plugins } from 'chart.js/auto';
import { Diagnosis, DiagnosisHistory, ProfileProps } from '../types';
import { ChartDataSet } from '../types';


const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});

const DiagnosisChart = (props: ProfileProps) => {

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        maintainAspectRatio: false,
        responsive: true
    };

    const [isChartReady, setIsChartReady] = useState(false);
    const [chartLabels, setChartLabels] = useState<String[]>([]);
    const [chartData, setChartData] = useState<ChartDataSet[]>(

    )
    const data = {
        labels: chartLabels,
        datasets: chartData,
    };
    const getMonthNum = (monthName: string): number => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months.findIndex((month) => month.toLowerCase().startsWith(monthName.toLowerCase()))
    }


    useEffect(() => {
        const intializeChart = () => {
            const sortedHistory = [...props.patient.diagnosis_history].sort((a: DiagnosisHistory, b: DiagnosisHistory) => {
                    const dateA = new Date(a.year, getMonthNum(a.month))
                    const dateB = new Date(b.year, getMonthNum(b.month))
                    return dateA.getTime() - dateB.getTime();
                });
            const labels: String[] = [];
            const systolicDataVals: number[] = [];
            const diastolicDataVals: number[] = [];
            const chartDataSets: ChartDataSet[] = [];
            
            for (let i = sortedHistory.length - 6; i < sortedHistory.length; i++) {
                let test = sortedHistory[i];
                console.log(test)
                let label = test.month.substring(0, 3) + ", " +  test.year.toString()
                labels.push(label);
                systolicDataVals.push(test.blood_pressure.systolic.value);
                diastolicDataVals.push(test.blood_pressure.diastolic.value);
            }
            setChartLabels(labels);
            chartDataSets.push({
                label: "Systolic",
                data: systolicDataVals,
                fill: false,
                borderColor: '#C26EB4',
                tension: 0.4,
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 15,
                pointBackgroundColor: '#C26EB4'
            });
            chartDataSets.push({
                label: "Diastolic",
                data: diastolicDataVals,
                fill: false,
                borderColor: '#8C6FE6',
                tension: 0.4,
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 15,
                pointBackgroundColor: '#8C6FE6'
            });
            setChartData(chartDataSets);
            setIsChartReady(true);
        };
        intializeChart();
    }, [])

    return (
        <div className='mx-10 md:mx-5 my-5 flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start w-10/12 md:w-[725px]' style={{  backgroundColor: "#F4F0FE", borderRadius: '12px', opacity: 1 }}>
            {isChartReady ? (
                <>
                    <div className='flex flex-col justify-start items-start w-full md:w-1/2 py-3'>
                        <div className='flex flex-col md:flex-row justify-between items-center w-full h-full'>
                            <p className='inner-card-title-18pt px-2 py-2'>Blood Pressure</p>
                            <div className='flex justify-end items-center'>
                                <p className='body-regular-14'>Last 6 Months</p>
                                <img src='expand.svg' className='px-2' />
                            </div>
                        </div>
                        <div className='w-full h-full md:w-[415px] md:h-[200px]'>
                            <Line data={data} className='my-2 mx-5' options={options}/>
                        </div>

                    </div>
                    <div className='flex flex-col justify-between w-1/2 items-start my-5 mx-12'>

                        <div className='flex flex-col justify-between items-start text-center md:text-start w-full'>
                            <div className='text-start border-b-2 w-full'>
                                <div className='flex justify-start items-center text-start'>
                                    <span className='chart-legend-dot' id="systolic"></span>
                                    <p className='chart-legend-title px-1'>Systolic</p>
                                </div>
                                <p className='chart-legend-val py-3'>160</p>
                                <div className='flex justify-start items-center my-2'>
                                    <img src="ArrowUp.svg" className='px-2' />
                                    <p className='body-regular-14'>Higher than Average</p>
                                </div>
                            </div>
                            <div className='text-start w-full py-3'>
                                <div className='flex justify-start items-center text-start'>
                                    <span className='chart-legend-dot' id="diastolic"></span>
                                    <p className='chart-legend-title px-1'>Diastolic</p>
                                </div>
                                <p className='chart-legend-val py-3'>78</p>
                                <div className='flex justify-start items-center my-2'>
                                    <img src="ArrowDown.svg" className='px-2' />
                                    <p className='body-regular-14'>Lower than Average</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (null)

            }
        </div>
    );
};
export default DiagnosisChart;