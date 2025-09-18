import { useCallback, useEffect, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import type { Coordinate } from '../types'

// PDF.js worker の設定
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

interface PdfViewerProps {
  file: string
  onPdfLoad?: (width: number, height: number, scale: number) => void
  onPdfClick?: (x: number, y: number) => void
  scrollToCoordinates?: Coordinate | null
  onScrollComplete?: () => void
}

function PdfViewer({
  file,
  onPdfLoad,
  onPdfClick,
  scrollToCoordinates,
  onScrollComplete,
}: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  const handleDocumentLoadSuccess = useCallback(() => {
    // ドキュメントの読み込み完了時の処理
  }, [])

  const handlePageLoadSuccess = useCallback(
    (page: any) => {
      const { width, height } = page
      console.log('📄 PDFページ読み込み完了:', { width, height, scale: 1 })
      onPdfLoad?.(width, height, 1)
    },
    [onPdfLoad]
  )

  const handlePageClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      onPdfClick?.(x, y)
    },
    [onPdfClick]
  )

  // 座標スクロール機能
  const scrollToCoordinate = useCallback(
    (coordinates: Coordinate) => {
      if (!containerRef.current) {
        console.log('❌ containerRef.current が null です')
        return
      }

      // 実際のスクロール可能な要素は親の.content要素
      const container = containerRef.current.parentElement
      if (!container) {
        console.log('❌ 親要素（.content）が見つかりません')
        return
      }

      // コンテナの詳細情報をログ出力
      const containerRect = container.getBoundingClientRect()
      const centerX = containerRect.width / 2
      const centerY = containerRect.height / 2

      console.log('📦 スクロール対象コンテナ情報:', {
        element: container,
        className: container.className,
        scrollWidth: container.scrollWidth,
        scrollHeight: container.scrollHeight,
        clientWidth: container.clientWidth,
        clientHeight: container.clientHeight,
        scrollLeft: container.scrollLeft,
        scrollTop: container.scrollTop,
        rect: containerRect,
      })

      // 指定座標を中央に配置するためのスクロール位置を計算
      const scrollLeft = coordinates.x - centerX
      const scrollTop = coordinates.y - centerY

      console.log('🎯 スクロール計算:', {
        coordinates,
        centerX,
        centerY,
        scrollLeft,
        scrollTop,
        maxScrollLeft: Math.max(0, scrollLeft),
        maxScrollTop: Math.max(0, scrollTop),
      })

      // スクロール実行前の状態をログ出力
      console.log('📊 スクロール実行前:', {
        scrollLeft: container.scrollLeft,
        scrollTop: container.scrollTop,
      })

      // スクロール実行
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        top: Math.max(0, scrollTop),
        behavior: 'smooth',
      })

      // スクロール実行後の状態をログ出力（少し遅延を入れる）
      setTimeout(() => {
        console.log('📊 スクロール実行後:', {
          scrollLeft: container.scrollLeft,
          scrollTop: container.scrollTop,
        })
      }, 100)

      // スクロール完了後にコールバックを実行
      setTimeout(() => {
        console.log('✅ スクロール完了')
        onScrollComplete?.()
      }, 500) // スムーズスクロールの完了を待つ
    },
    [onScrollComplete]
  )

  // scrollToCoordinatesが変更されたときにスクロール実行
  useEffect(() => {
    if (scrollToCoordinates) {
      // 少し遅延を入れてPDFの描画完了を待つ
      const timer = setTimeout(() => {
        scrollToCoordinate(scrollToCoordinates)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [scrollToCoordinates, scrollToCoordinate])

  return (
    <div className="pdf-viewer" ref={containerRef}>
      <Document file={file} onLoadSuccess={handleDocumentLoadSuccess}>
        <div ref={pageRef} onClick={handlePageClick} style={{ cursor: 'crosshair' }}>
          <Page pageNumber={1} onLoadSuccess={handlePageLoadSuccess} />
        </div>
      </Document>
    </div>
  )
}

export default PdfViewer
