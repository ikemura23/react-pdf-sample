import { useCallback } from 'react'
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
  onPdfLoad?: (width: number, height: number, scale: number) => void
  onPdfClick?: (x: number, y: number) => void
}

function PdfViewer({ file, onPdfLoad, onPdfClick }: PdfViewerProps) {

  const handleDocumentLoadSuccess = useCallback(() => {
    // ドキュメントの読み込み完了時の処理
  }, [])

  const handlePageLoadSuccess = useCallback((page: any) => {
    const { width, height } = page
    onPdfLoad?.(width, height, 1)
  }, [onPdfLoad])

  const handlePageClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    onPdfClick?.(x, y)
  }, [onPdfClick])

  return (
    <div className="pdf-viewer">
      <Document file={file} onLoadSuccess={handleDocumentLoadSuccess}>
        <div onClick={handlePageClick} style={{ cursor: 'crosshair' }}>
          <Page 
            pageNumber={1} 
            onLoadSuccess={handlePageLoadSuccess}
          />
        </div>
      </Document>
    </div>
  )
}

export default PdfViewer
