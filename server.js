import express from "express"
import multer from "multer"
import cors from "cors"
import { resolve } from "path"

const app = express()
const PORT = 5001

app.use(cors())

const upload = multer({ dest: "uploads/" })

app.post("/upload", upload.single("pdf"), (req, res) => {
  try {
    const file = req.file

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" })
    }
    res.setHeader("Content-Type", "application/pdf")
    res.sendFile(resolve(file.path))
  } catch (error) {
    console.error("Error handling file upload:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`)
})