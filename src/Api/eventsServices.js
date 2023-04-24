import axios from 'axios'

const url = 'http://localhost:8080/events'
const token = localStorage.getItem("auth_token")
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

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
    deleteByIdEvent(id) {
        return axios.delete(url + `/${id}`, config)
        .then((response) => {
          console.log('Recurso eliminado correctamente');
        })
        .catch((error) => {
          console.error('Hubo un error al eliminar el recurso', error);
        });
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
    categoryById(id) {
        return axios.get(url + `/category/ ${id}`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    registerByData(data) {
        return axios.post(url + `/auth/register`, data)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    loginByData(data) {
        return axios.post(url + `/auth/authenticate`, data)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
}

export default EventsServices