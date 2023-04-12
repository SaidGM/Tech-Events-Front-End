import axios from 'axios'

const url = 'http://localhost:8080/events'

const EventsServices = {
    allEvents() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },


}

export default EventsServices