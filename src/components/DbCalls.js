const remoteURL = "http://localhost:5002"

export default {
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
  },
  getAllUsers() {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },
  postNewUser(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(e => e.json())
  },


  SearchUsers(nameFromInput) {
    return fetch(`${remoteURL}/users?name_like=${nameFromInput}`).then(e => e.json())
  },


  getNews(id) {
    return fetch(`${remoteURL}/news/${id}`).then(e => e.json())
  },
  getAllNews() {
    return fetch(`${remoteURL}/news`).then(e => e.json())
  },
  postNewNews(newNews) {
    return fetch(`${remoteURL}/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNews)
    }).then(e => e.json())
  },
  putNews(editedNews) {
    return fetch(`${remoteURL}/news/${editedNews.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedNews)
    }).then(e => e.json());
  },
  deleteNews(id) {
    return fetch(`${remoteURL}/news/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },








  getTasks(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json())
  },
  getAllTasks() {
    return fetch(`${remoteURL}/tasks`).then(e => e.json())
  },
  postNewTasks(newTasks) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTasks)
    }).then(e => e.json())
  },
  putTask(editedTasks) {
    return fetch(`${remoteURL}/tasks/${editedTasks.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTasks)
    }).then(e => e.json());
  },
  completeTask(taskId, taskName, completeDate) {
    return fetch(`${remoteURL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ complete: 1, taskName: taskName, completeDate: completeDate, userId: parseInt(sessionStorage.getItem("credentials")) })
    }).then(e => e.json());
  },
  deleteTasks(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },






  getEvent(id) {
    return fetch(`${remoteURL}/events/${id}`).then(e => e.json())
  },
  getAllEvents() {
    return fetch(`${remoteURL}/events`).then(e => e.json())
  },
  postNewEvents(newEvents) {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvents)
    }).then(e => e.json())
  },
  putEvents(editedEvents) {
    return fetch(`${remoteURL}/events/${editedEvents.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvents)
    }).then(e => e.json());
  },
  deleteEvents(id) {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },







  getMessage(id) {
    return fetch(`${remoteURL}/forum/${id}`).then(e => e.json())
  },
  getAllMessages() {
    return fetch(`${remoteURL}/forum`).then(e => e.json())
  },
  postNewMessages(newMessages) {
    return fetch(`${remoteURL}/forum`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessages)
    }).then(e => e.json())
  },
  putMessages(editedMessages) {
    return fetch(`${remoteURL}/forum/${editedMessages.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessages)
    }).then(e => e.json());
  },
  deleteMessages(id) {
    return fetch(`${remoteURL}/forum/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },









  getFriend(id) {
    return fetch(`${remoteURL}/friends/${id}`).then(e => e.json())
  },
  getAllFriends() {
    return fetch(`${remoteURL}/friends`).then(e => e.json())
  },
  addNewFriend(newFriends) {
    return fetch(`${remoteURL}/friends`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFriends)
    }).then(e => e.json())
  },
  deleteFriends(id) {
    return fetch(`${remoteURL}/friends/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },

}