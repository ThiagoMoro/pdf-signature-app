# **PDF Signature**

A simple application to upload a PDF file, send it to a mock server, and view the returned PDF.

---

## **Prerequisites**

Make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/)

---

## **Step-by-Step Setup**

### 1. **Clone the Repository**
Download the project using the following command:

```bash
git clone git@github.com:ThiagoMoro/pdf-signature-app.git
```

Replace `https://github.com/ThiagoMoro/pdf-signature-app` with the link to the project repository.

---

### 2. **Install Dependencies**
Navigate to the project folder:

```bash
cd pdf-signature-app
```

Install the required dependencies for both the mock server and the frontend:

```bash
npm install
```

---

### 3. **Run the Project**

#### **Mock Server**
Start the mock server with the following command:

```bash
node server.js
```

The server will be running at:

```
http://localhost:5001
```

#### **Frontend**
In another terminal, start the frontend with the following command:

```bash
npm run dev
```

Access the application in your browser at:

```
http://localhost:5000
```

---

## **Features**

- **PDF Upload**: Upload a PDF file to the mock server.
- **PDF Viewer**: View the returned PDF directly on the page.

---

## **Project Structure**

```plaintext
pdf-signature/
├── server.js          # Mock server (Node.js with Express)
├── package.json       # Project dependencies (mock server and frontend)
├── src/               # Frontend source code (React.js)
├── public/            # Frontend static files
└── README.md          # Project documentation
```

---

## **Technologies Used**

- **Frontend**: React.js
- **Mock Server**: Node.js with Express, Multer, Cors, and Path

---
