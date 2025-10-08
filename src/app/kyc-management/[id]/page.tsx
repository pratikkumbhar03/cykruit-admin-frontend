export default function KycManagementPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>KYC Management for ID: {params.id}</h1>
      {/* Your page content */}
    </div>
  );
}