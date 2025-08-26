import React, { useState } from 'react'
import "./UploadSection.css"

function UploadSection() {
  const [file, setFile] = useState(null)
  const [signedPdfUrl, setSignedPdfUrl] = useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file.")
      return
    }

    const formData = new FormData()
    formData.append("pdf", file)

    try {
      const response = await fetch("http://localhost:5173/#upload", {
        method: "Post",
        body: formData,
      })
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setSignedPdfUrl(url)
    } catch (error) {
      console.error("Error uploading the PDF:", error)
      alert("An error occurred while processing the PDF.")
    }
  }

  return (
    <section id="upload" className="upload-section">
      <div className='container'>
        <h3 className="upload-title">Upload your PDF</h3>
        <div className="upload-box">
          <input type="file" accept='application/pdf' onChange={handleFileChange} className='upload-input'/>
          <button onClick={handleUpload} className="upload-button">Upload PDF</button>
          {signedPdfUrl && (
            <div className="pdf-viewer">
              <h4>Signed PDF</h4>
              <iframe src={signedPdfUrl} title='Signed PDF' className='pdf-frame' frameborder="0"></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default UploadSection