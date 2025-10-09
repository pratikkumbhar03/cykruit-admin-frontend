"use client";
import {KYCDetail} from "@/types/kyc";
import {Building2, Globe, Mail, Briefcase, MapPin, FileText} from 'lucide-react'


export const CompanyInfoCard: React.FC<{ data: KYCDetail }> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">Company Name</p>
            <p className="font-medium text-gray-900">{data.companyName}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">Website</p>
            <a
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              {data.website}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">Contact Email</p>
            <p className="font-medium text-gray-900">{data.contactEmail}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">Company Type</p>
            <p className="font-medium text-gray-900">{data.companyType}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium text-gray-900">{data.location}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Employer ID</p>
              <p className="font-medium text-gray-900">{data.employerId}</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">Submitted On</p>
            <p className="font-medium text-gray-900">
              {new Date(data.submittedOn).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};