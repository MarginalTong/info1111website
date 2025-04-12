import Header from '@/components/Header';

export default function Documents() {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#2c3e50]">Document Management</h3>
            <button className="bg-[#3498db] text-white px-4 py-2 rounded-lg hover:bg-[#2980b9]">
              Upload Document
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-[#3498db]">45</p>
              <p className="text-gray-600">Total Documents</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-[#3498db]">12</p>
              <p className="text-gray-600">Meeting Minutes</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-[#3498db]">8</p>
              <p className="text-gray-600">Financial Reports</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-[#3498db]">25</p>
              <p className="text-gray-600">Other Documents</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Date Added</th>
                  <th className="text-left py-3 px-4">Size</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      February Meeting Minutes.pdf
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Minutes</span>
                  </td>
                  <td className="py-3 px-4">Mar 1, 2024</td>
                  <td className="py-3 px-4">2.5 MB</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-[#3498db] hover:underline">View</button>
                      <button className="text-[#3498db] hover:underline">Download</button>
                    </div>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Q4 Financial Report.xlsx
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Financial</span>
                  </td>
                  <td className="py-3 px-4">Feb 28, 2024</td>
                  <td className="py-3 px-4">1.8 MB</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-[#3498db] hover:underline">View</button>
                      <button className="text-[#3498db] hover:underline">Download</button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Building Insurance Policy.pdf
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Insurance</span>
                  </td>
                  <td className="py-3 px-4">Feb 25, 2024</td>
                  <td className="py-3 px-4">3.2 MB</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-[#3498db] hover:underline">View</button>
                      <button className="text-[#3498db] hover:underline">Download</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
} 