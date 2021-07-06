import axios from "axios"

export default {
    searchBooks: function(search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
    },

    getBooks: function () {
        return axios.get("/api/books");
    },

    saveBook: function (book) {
        return axios.post("/api/books", book);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}