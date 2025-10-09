"use client";

import React, { useState, useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import { DocumentViewer } from "@/components/kyc-details/DocumentViewer"
import { Breadcrumb } from "@/components/kyc-details/Breadcrumb"
import { CompanyInfoCard } from "@/components/kyc-details/CompanyInfoCard"
import { DocumentsCard } from "@/components/kyc-details/DocumentsCard"
import { ActionButtons } from "@/components/kyc-details/ActionButtons"
import { DocumentItem, generateMockKYCDetail } from "@/types/kyc"



const KYCDetailPage: React.FC = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);

  // Memoize to avoid regenerating on every render
  const kycData = useMemo(() => generateMockKYCDetail(id), [id]);

  if (!kycData) {
    notFound();
    return null;
  }

  const handleApprove = (id: string) => {
    alert(`KYC Approved! ${id}`);
    window.close();
  };

  const handleReject = (reason: string, id: string) => {
    alert(`KYC Rejected. Reason: ${reason} ${id}`);
    window.close();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <h1 className="text-3xl font-bold text-gray-900 mb-6">KYC Application Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CompanyInfoCard data={kycData} />
          <DocumentsCard
            documents={kycData.documents}
            onDocumentClick={setSelectedDocument}
          />
        </div>

        <ActionButtons
          recordId={kycData.id}
          status={kycData.status}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>

      <DocumentViewer
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
      />
    </div>
  );
};

export default KYCDetailPage;