"use client";
import React, { useState } from 'react';
import { Breadcrumb } from '../../components/kyc-management/Breadcrumb';
import { StatusBadge } from '../../components/kyc-management/StatusBadge';
import { StatusFilter, generateMockData } from '../../types/kyc';
import { Toolbar } from '../../components/kyc-management/Toolbar';
import { TableActions } from '../../components/kyc-management/TableActions';
import { Pagination } from '../../components/kyc-management/Pagination';
import { EmptyState } from '../../components/kyc-management/states/EmptyState';
import { ErrorState } from '../../components/kyc-management/states/ErrorState';
import { TableSkeleton } from '../../components/kyc-management/states/TableSkeleton';


const KYCList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const pageSize = 6;
  const allRecords = generateMockData();

  // Filter records
  const filteredRecords = allRecords.filter(record => {
    const matchesSearch = 
      record.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.contactEmail.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Paginate records
  const totalPages = Math.ceil(filteredRecords.length / pageSize);
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );


  const handleView = (id: string) => {
    window.location.href = `/kyc/${id}`;
  };

  const handleApprove = (id: string) => {
    alert(`Approving record: ${id}`);

  };

  const handleReject = (id: string) => {
    alert(`Rejecting record: ${id}`);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">KYC Management</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <Toolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employer ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted On
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                  <TableSkeleton />
                ) : hasError ? (
                  <ErrorState onRetry={handleRetry} />
                ) : paginatedRecords.length === 0 ? (
                  <EmptyState />
                ) : (
                  paginatedRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {record.employerId}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button
                          onClick={() => handleView(record.id)}
                          className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                        >
                          {record.companyName}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {record.contactEmail}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={record.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(record.submittedOn)}
                      </td>
                      <td className="px-6 py-4">
                        <TableActions
                          recordId={record.id}
                          status={record.status}
                          onView={handleView}
                          onApprove={handleApprove}
                          onReject={handleReject}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {!isLoading && !hasError && paginatedRecords.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredRecords.length}
              pageSize={pageSize}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default KYCList;