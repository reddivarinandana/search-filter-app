# search-filter-app
# 🔍 Search & Filter App (Full Stack)

A full-stack web application that allows users to **search and filter products dynamically** using a clean and responsive UI.

---

## 🚀 Features

* 🔍 Search products by name
* 🎯 Filter by category
* ⚡ Real-time data fetching from backend
* ❌ Displays message when no products found
* ⏳ Loading & error handling
* 🧩 Modular component structure (React)
* 🌐 REST API with query parameters

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* CORS

---

## 📁 Project Structure

```
search-filter-app/
 ├── client/        # React Frontend
 │    ├── src/
 │    │    ├── components/
 │    │    ├── services/
 │    │    └── App.js
 │
 ├── server/        # Node Backend
 │    ├── index.js
 │
 └── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/search-filter-app.git
cd search-filter-app
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
node index.js
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🔗 API Endpoint

### GET /products

Query Parameters:

| Parameter | Description            |
| --------- | ---------------------- |
| search    | Search by product name |
| category  | Filter by category     |

### Example:

```
http://localhost:5000/products?search=iphone&category=Mobile
```


---

## 👩‍💻 Author

**Reddivari Nandana**
Developer

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
