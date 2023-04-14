import axios from 'axios'

const url = 'http://localhost:8080/events'

const EventsServices = {
    allEvents() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    byIdEvents(id) {
        return axios.get(url + `/${id}`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    allEventsHighlight() {
        return axios.get(url + `/highlight`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    allCategories() {
        return axios.get(url + `/categories`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    allCategories(id) {
        return axios.get(url + `/category/ ${id}`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
}

export default EventsServices