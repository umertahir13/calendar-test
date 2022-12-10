import './form.css'

export const timeSlot = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function Form(props) {


    function submitForm(event) {
        event.preventDefault();

        props.onFormSubmit({
            name: event.target.name.value,
            day: event.target.day.value,
            timeslot: event.target.timeslot.value
        })

    }

    return (
        <div>
            <form style={{ width: '50%' }} onSubmit={submitForm}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" name='name' />
                </div>
                <label for="exampleInputEmail1">Select Day</label>
                <select class="form-control" name='day'>
                    {
                        days.map((day, index) => {
                            return (<option key={index} value={index}>{day}</option>)
                        })
                    }

                </select>
                <label for="exampleInputEmail1">Select TimeSlot</label>
                <select class="form-control" name='timeslot'>
                    {
                        timeSlot.map((time, index) => {
                            return (<option key={index} value={index}>{time}</option>)
                        })
                    }
                </select>

                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Form
