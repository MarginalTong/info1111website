import Header from '@/components/Header';

export default function Committee() {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Committee Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="border rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">JD</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">John Doe</h4>
                  <p className="text-[#3498db]">Chairperson</p>
                  <p className="text-sm text-gray-500">Since: Jan 2024</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#2ecc71] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">JS</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Jane Smith</h4>
                  <p className="text-[#3498db]">Secretary</p>
                  <p className="text-sm text-gray-500">Since: Jan 2024</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#e74c3c] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">RJ</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Robert Johnson</h4>
                  <p className="text-[#3498db]">Treasurer</p>
                  <p className="text-sm text-gray-500">Since: Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Committee Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Financial Management</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Budget planning and oversight</li>
                <li>Expense approval</li>
                <li>Financial reporting</li>
                <li>Fund allocation</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Property Maintenance</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Regular inspections</li>
                <li>Maintenance scheduling</li>
                <li>Contractor management</li>
                <li>Emergency repairs</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Community Relations</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Resident communication</li>
                <li>Dispute resolution</li>
                <li>Community events</li>
                <li>Newsletter publication</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Compliance</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>By-law enforcement</li>
                <li>Legal compliance</li>
                <li>Insurance management</li>
                <li>Safety regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 