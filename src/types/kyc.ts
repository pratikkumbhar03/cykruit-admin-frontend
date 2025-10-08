// ============================================
// Types
// ============================================
export interface KYCRecord {
  id: string;
  employerId: string;
  companyName: string;
  contactEmail: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedOn: string;
}

export type StatusFilter = 'all' | 'pending' | 'approved' | 'rejected';

// ============================================
// Mock Data
// ============================================
export const generateMockData = (): KYCRecord[] => {
  return [
    { id: '1', employerId: 'EMP001', companyName: 'Tech Corp Ltd', contactEmail: 'contact@techcorp.com', status: 'pending', submittedOn: '2025-10-05' },
    { id: '2', employerId: 'EMP002', companyName: 'Global Solutions Inc', contactEmail: 'info@globalsolutions.com', status: 'approved', submittedOn: '2025-10-04' },
    { id: '3', employerId: 'EMP003', companyName: 'Startup Innovations', contactEmail: 'hello@startup.io', status: 'pending', submittedOn: '2025-10-03' },
    { id: '4', employerId: 'EMP004', companyName: 'Enterprise Group', contactEmail: 'admin@enterprise.com', status: 'rejected', submittedOn: '2025-10-02' },
    { id: '5', employerId: 'EMP005', companyName: 'Digital Services Co', contactEmail: 'support@digital.com', status: 'pending', submittedOn: '2025-10-01' },
    { id: '6', employerId: 'EMP006', companyName: 'Innovation Labs', contactEmail: 'team@innovationlabs.com', status: 'approved', submittedOn: '2025-09-30' },
    { id: '7', employerId: 'EMP007', companyName: 'Future Tech', contactEmail: 'contact@futuretech.com', status: 'pending', submittedOn: '2025-09-29' },
    { id: '8', employerId: 'EMP008', companyName: 'Cloud Systems', contactEmail: 'info@cloudsystems.com', status: 'approved', submittedOn: '2025-09-28' },
    { id: '9', employerId: 'EMP009', companyName: 'NextGen Analytics', contactEmail: 'info@nextgenanalytics.com', status: 'rejected', submittedOn: '2025-09-27' },
    { id: '10', employerId: 'EMP010', companyName: 'Cyber Dynamics', contactEmail: 'support@cyberdynamics.com', status: 'pending', submittedOn: '2025-09-26' },
    { id: '11', employerId: 'EMP011', companyName: 'Visionary Tech', contactEmail: 'contact@visionarytech.com', status: 'approved', submittedOn: '2025-09-25' },
    { id: '12', employerId: 'EMP012', companyName: 'Quantum Systems', contactEmail: 'info@quantumsystems.com', status: 'pending', submittedOn: '2025-09-24' },
    { id: '13', employerId: 'EMP013', companyName: 'Bluewave Software', contactEmail: 'hello@bluewave.com', status: 'approved', submittedOn: '2025-09-23' },
    { id: '14', employerId: 'EMP014', companyName: 'EcoTech Solutions', contactEmail: 'info@ecotech.com', status: 'rejected', submittedOn: '2025-09-22' },
    { id: '15', employerId: 'EMP015', companyName: 'SmartEdge Technologies', contactEmail: 'support@smartedge.com', status: 'pending', submittedOn: '2025-09-21' },
    { id: '16', employerId: 'EMP016', companyName: 'DataBridge Corp', contactEmail: 'contact@databridge.com', status: 'approved', submittedOn: '2025-09-20' },
    { id: '17', employerId: 'EMP017', companyName: 'NeuralWorks', contactEmail: 'team@neuralworks.ai', status: 'pending', submittedOn: '2025-09-19' },
    { id: '18', employerId: 'EMP018', companyName: 'GlobalWare Ltd', contactEmail: 'admin@globalware.com', status: 'approved', submittedOn: '2025-09-18' },
    { id: '19', employerId: 'EMP019', companyName: 'BrightFuture Solutions', contactEmail: 'info@brightfuture.com', status: 'rejected', submittedOn: '2025-09-17' },
    { id: '20', employerId: 'EMP020', companyName: 'CodeCrafters', contactEmail: 'support@codecrafters.io', status: 'pending', submittedOn: '2025-09-16' },
    { id: '21', employerId: 'EMP021', companyName: 'TechVista Pvt Ltd', contactEmail: 'contact@techvista.in', status: 'approved', submittedOn: '2025-09-15' },
    { id: '22', employerId: 'EMP022', companyName: 'Infinity Systems', contactEmail: 'hello@infinitysys.com', status: 'pending', submittedOn: '2025-09-14' },
    { id: '23', employerId: 'EMP023', companyName: 'ByteForce Labs', contactEmail: 'info@byteforce.com', status: 'rejected', submittedOn: '2025-09-13' },
    { id: '24', employerId: 'EMP024', companyName: 'Skyline Technologies', contactEmail: 'team@skyline.com', status: 'approved', submittedOn: '2025-09-12' },
  ];
};

