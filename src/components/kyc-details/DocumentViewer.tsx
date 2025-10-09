"use client"
import { useState } from 'react';
import { DocumentItem } from '@/types/kyc';
import { FileText, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';


export const DocumentViewer: React.FC<{
  document: DocumentItem | null;
  onClose: () => void;
}> = ({ document, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!document) return null;

  const handleDownload = () => {
    const link = window.document.createElement('a');
    link.href = document.url;
    link.download = document.name;
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-600" />
            <div>
              <h3 className="font-semibold text-gray-900">{document.name}</h3>
              {document.type === 'pdf' && document.pageCount && (
                <p className="text-sm text-gray-500">{document.pageCount} pages</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title="Download"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center min-h-[500px]">
            {document.type === 'pdf' ? (
              <div className="text-center">
                <FileText className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">PDF Document Preview</p>
                <p className="text-sm text-gray-500">{document.name}</p>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={document.url}
                alt={document.name}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </div>

        {document.type === 'pdf' && document.pageCount && document.pageCount > 1 && (
          <div className="flex items-center justify-center gap-4 p-4 border-t border-gray-200">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {document.pageCount}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(document.pageCount!, currentPage + 1))}
              disabled={currentPage === document.pageCount}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};