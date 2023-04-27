import axios from 'axios'

const url = 'http://localhost:8080/events'
const token = localStorage.getItem("auth_token");
const email = localStorage.getItem("auth_email");
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const data = {
    email: {email}
};

const EventsServices = {
    allEvents() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    allEventsToken() {
        return axios.get(url, config)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    byIdEvents(id) {
        return axios.get(url + `/${id}`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    byIdEventsToken(id) {
        return axios.get(url + `/${id}`, config)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },
    deleteByIdEvent(id) {
        return axios.delete(url + `/${id}`, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
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
    eventPost(data) {
        return axios.post(url, data, config)
        .then((response) => {
            console.log('Evento Creado:', response.data);
        })
        .catch((error) => {
            console.error('Evento no Creado:', error);
        });
    },
    eventPut(id, data) {
        return axios.put(url + `/${id}`, data, config)
        .then((response) => {
            console.log('Evento Editado:', response.data);
        })
        .catch((error) => {
            console.error('Evento no Editado:', error);
        });
    },
    inscribedEvent(id) {
        return axios.post(url + `/${id}/inscribed`, data, config)
        .then((response) => {
            console.log('Inscrito:', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },
    myEvents() {
        return axios.get(url + '/myEvents', config)
        .then((res)=>res.data)
        .catch((error) => {
            console.error('Error:', error);
        })
    }
    
}

export default EventsServices