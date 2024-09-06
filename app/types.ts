type PatientType = {
    name: string,
    gender: string,
    age: number,
    profile_picture: string,
    date_of_birth: string,
    phone_number: string,
    emergency_contact: string,
    insurance_type: string,
    diagnosis_history: [
        {
            month: string,
            year: number,
            blood_pressure: {
                systolic: {
                    value: number,
                    levels: string
                },
                diastolic: {
                    value: number,
                    levels: string
                }
            },
            heart_rate: {
                value: number,
                levels: string
            },
            respiratory_rate: {
                value: number,
                levels: string
            },
            temperature: {
                value: number,
                levels: string
            }
        }

    ],
    diagnostic_list: [
        {
            name: string,
            description: string,
            status: string
        }

    ],
    lab_results: [
        string,
        string
    ]
};

export type PatientListProps = {
    name: string,
    gender: string,
    age: number,
    profile_picture: string
};

export type PatientContainerProps = {
    patients: PatientType[]
}

export type CardProps = {
    color: string;
    cardName: string;
    rate: number;
    status: string;
};

export type DiagnosisChartProps = {
    data: number[]
}

export type ProfileProps = {
    patient: PatientType
}

export type Diagnosis = {
    name: string;
    description: string;
    status: string
}

export type DiagnosisHistory = {
    month: string;
    year: number;
    blood_pressure: {
        systolic: LabTest,
        diastolic: LabTest
    },
    heart_rate: LabTest,
    temperature: LabTest
    respiratory_rate: LabTest
};

export type LabTest = {
    value: number
    levels: string;
}

export type ChartDataSet = {
    label: string;
    data: number[],
    fill: boolean;
    borderColor: string;
    tension: number,
    pointStyle: string;
    pointRadius: number;
    pointHoverRadius: number;
    pointBackgroundColor: string;
}



export default PatientType;