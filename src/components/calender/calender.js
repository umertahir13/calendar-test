import { useState } from 'react';
import Form from '../form/form';
import './calender.css'

function Calender({ maps }) {

    const [formData, setFormData] = useState({
        name: "",
        day: "",
        timeslot: "",
    });

    const getData = (data) => {
        setFormData(data);
        addEvent(data);
    };

    function addEvent(data) {
        if (data.name) {
            maps[parseInt(data.day) + 1][parseInt(data.timeslot) + 1].push(data.name);
            // debugger
            maps = [...maps];
        }
    }


    return (
        <div className="container">
            <div className="grid-container">
                {maps.map((item, outindex) => {
                    return (
                        <div className={outindex === 0 ? 'grid-row-left' : 'grid-row'}>
                            {item.map((arr, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${outindex === 0
                                            ? "grid-left"
                                            : index === 0 ? 'gird-header' : "grid-cell"
                                            }`}
                                    >
                                        {(outindex !== 0 && index !== 0) ? arr.map(j => (

                                            <p title={j} className='grid-info'>{j}</p>

                                        )) : arr}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <Form onFormSubmit={getData} />
        </div>
    );
}

export default Calender;