import Header from '@/components/Header';

export default function Maintenance() {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Total Requests</h3>
            <div className="text-3xl font-bold text-[#3498db]">8</div>
            <div className="text-sm text-gray-500 mt-2">All maintenance requests</div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Open</h3>
            <div className="text-3xl font-bold text-[#e74c3c]">3</div>
            <div className="text-sm text-gray-500 mt-2">Pending review</div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">In Progress</h3>
            <div className="text-3xl font-bold text-[#f39c12]">2</div>
            <div className="text-sm text-gray-500 mt-2">Currently being handled</div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Completed</h3>
            <div className="text-3xl font-bold text-[#27ae60]">3</div>
            <div className="text-sm text-gray-500 mt-2">Resolved requests</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#2c3e50]">Maintenance Requests</h3>
            <button className="bg-[#3498db] text-white px-4 py-2 rounded-lg hover:bg-[#2980b9]">
              New Request
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Description</th>
                  <th className="text-left py-3 px-4">Location</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">#001</td>
                  <td className="py-3 px-4">Elevator malfunction on 3rd floor</td>
                  <td className="py-3 px-4">Building A</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      Open
                    </span>
                  </td>
                  <td className="py-3 px-4">Mar 1, 2024</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">#002</td>
                  <td className="py-3 px-4">Water leak in parking area</td>
                  <td className="py-3 px-4">Basement</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      In Progress
                    </span>
                  </td>
                  <td className="py-3 px-4">Feb 28, 2024</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">#003</td>
                  <td className="py-3 px-4">HVAC maintenance</td>
                  <td className="py-3 px-4">All floors</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                  <td className="py-3 px-4">Feb 25, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
} 