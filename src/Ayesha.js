import React from 'react';


export default function Ayesha() {
    const table = [
        {
            id: 1,
            time: "00:00"
        },
        {
            id: 2,
            time: "01:00"
        },
        {
            id: 3,
            time: "02:00"
        },
        {
            id: 4,
            time: "03:00"
        },
        {
            id: 5,
            time: "04:00"
        },
        {
            id: 6,
            time: "05:00"
        },
        {
            id: 7,
            time: "06:00"
        },
        {
            id: 8,
            time: "07:00"
        },
        {
            id: 9,
            time: "08:00"
        },
        {
            id: 10,
            time: "09:00"
        },
        {
            id: 11,
            time: "10:00"
        },
        {
            id: 12,
            time: "11:00"
        },
        {
            id: 13,
            time: "12:00"
        },
        {
            id: 14,
            time: "13:00"
        }
    ];
    const resources = [
        {
            id: 1,
            resource: "Resource 1"
        },
        {
            id: 2,
            resource: "Resource 2"
        },
        {
            id: 3,
            resource: "Resource 3"
        },
        {
            id: 4,
            resource: "Resource 4"
        },
        {
            id: 5,
            resource: "Resource 5"
        }
    ];
    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='row'>
                    <div className='col'>
                        <table>
                            <thead>
                                <tr>
                                    <td className='text-center border-1' colSpan="15">June 20, 2022</td>
                                </tr>
                                <tr>
                                    <td className='text-white'>Hell</td>
                                    {table.map(time => (
                                        <>
                                            <td className='me-5 border-1 ps-2 pe-2'>{time.time}</td>
                                        </>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {resources.map(res => (
                                    <tr key={res.id} className="">
                                        <td className='border-1 ps-5 pe-5 pt-2 pb-2 mt-5 mb-5'>{res.resource}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div className='mt-5' style={{ border: "1px solid black" }}>
                        <div className='row'>
                            <div className='col'>
                                <table className='ms-5 mt-5'>
                                    <tbody>
                                        <tr>
                                            <td className='ps-5 pe-5 pt-2 pb-2 mt-5 mb-5' style={{ border: "1px solid black" }}>Resource 3</td>
                                        </tr>
                                        <tr>
                                            <td className='ps-5 pe-5 pt-2 pb-2 mt-5 mb-5' style={{ border: "1px solid black" }}>Resource 4</td>
                                        </tr>
                                        <tr>
                                            <td className='ps-5 pe-5 pt-2 pb-2 mt-5 mb-5' style={{ border: "1px solid black" }}>Resource 7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col p-5'>
                                <div className='mt-5'>
                                    <p className='btn btn-outline-primary text-black' style={{ border: "1px solid black" }}>Check Availability</p>
                                </div>
                                <div className='mt-2'>
                                    <span className='me-5 text-black'>From</span><span className='btn btn-outline-primary text-black' style={{ border: "1px solid black" }}>Date Time Picker</span>
                                </div>
                                <div className='mt-2'>
                                    <span className='me-5 text-black'>To </span>  <span className='btn btn-outline-primary text-black' style={{ border: "1px solid black" }}>Date Time Picker</span>
                                </div>
                                <div className='mt-2'>
                                    <span className='me-5 text-black'>For </span>  <span className='btn btn-outline-primary text-black' style={{ border: "1px solid black" }}>15</span><span className='ms-5 text-black'>Minutes</span>
                                </div>
                                <div className='mt-2'>
                                    <span className='me-5 text-black'>Every </span>  <span className='btn btn-outline-primary text-black' style={{ border: "1px solid black" }}>30</span><span className='ms-5 text-black'>Minutes</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
