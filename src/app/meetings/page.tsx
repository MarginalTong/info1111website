import Header from '@/components/Header';

export default function Meetings() {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#2c3e50]">Upcoming Meetings</h3>
            <button className="bg-[#3498db] text-white px-4 py-2 rounded-lg hover:bg-[#2980b9]">
              Schedule Meeting
            </button>
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold">Quarterly Committee Meeting</h4>
                  <p className="text-gray-600">General updates and financial review</p>
                  <div className="mt-2 space-x-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Committee</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Quarterly</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#3498db] font-semibold">March 15, 2024</p>
                  <p className="text-gray-500">2:00 PM - 4:00 PM</p>
                  <p className="text-gray-500">Meeting Room A</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold">Maintenance Planning</h4>
                  <p className="text-gray-600">Review upcoming maintenance projects</p>
                  <div className="mt-2 space-x-2">
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Maintenance</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#3498db] font-semibold">March 20, 2024</p>
                  <p className="text-gray-500">10:00 AM - 11:30 AM</p>
                  <p className="text-gray-500">Meeting Room B</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Past Meetings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Title</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Attendance</th>
                  <th className="text-left py-3 px-4">Minutes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Feb 15, 2024</td>
                  <td className="py-3 px-4">Monthly Committee Meeting</td>
                  <td className="py-3 px-4">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Committee</span>
                  </td>
                  <td className="py-3 px-4">8/10</td>
                  <td className="py-3 px-4">
                    <button className="text-[#3498db] hover:underline">View</button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Feb 1, 2024</td>
                  <td className="py-3 px-4">Emergency Repairs Discussion</td>
                  <td className="py-3 px-4">
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Maintenance</span>
                  </td>
                  <td className="py-3 px-4">5/5</td>
                  <td className="py-3 px-4">
                    <button className="text-[#3498db] hover:underline">View</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">Jan 15, 2024</td>
                  <td className="py-3 px-4">Annual General Meeting</td>
                  <td className="py-3 px-4">
                    <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">AGM</span>
                  </td>
                  <td className="py-3 px-4">45/50</td>
                  <td className="py-3 px-4">
                    <button className="text-[#3498db] hover:underline">View</button>
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