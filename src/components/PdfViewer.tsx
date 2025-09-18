import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// PDF.js worker の設定
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

interface PdfViewerProps {
  file: string
}

function PdfViewer({ file }: PdfViewerProps) {
  return (
    <div className="pdf-viewer">
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default PdfViewer
