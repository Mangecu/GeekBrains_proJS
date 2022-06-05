const API = "https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-8/src/components/server/db";

const app = new Vue({
   el: '#app',
   methods: {
      getJSON(url) {
         return fetch(url)
            .then(result => result.json())
            .catch(error => this.$refs.error.text = error)
      },
      postJSON(url, data) {
         return fetch(url, {
            method: 'POST',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
         })
            .then(result => result.json())
            .catch(error => this.$refs.error.text = error)
      },
      putJSON(url, data) {
         return fetch(url, {
            method: 'PUT',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
         })
            .then(result => result.json())
            .catch(error => this.$refs.error.text = error)
      },
      deleteJSON(url, data) {
         return fetch(url, {
            method: 'DELETE',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
         })
            .then(result => result.json())
            .catch(error => this.$refs.error.text = error)
      },
   },
})