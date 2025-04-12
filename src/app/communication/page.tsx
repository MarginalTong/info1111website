import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

export default function Communication() {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#2c3e50]">Announcements</h3>
            <button className="bg-[#3498db] text-white px-4 py-2 rounded-lg hover:bg-[#2980b9]">
              New Announcement
            </button>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold">Building Maintenance Notice</h4>
                  <p className="text-gray-600 mt-2">
                    The elevator maintenance is scheduled for March 15th from 9 AM to 12 PM. Please plan accordingly.
                  </p>
                  <div className="mt-2 space-x-2">
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Maintenance</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">Important</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">Posted: Mar 1, 2024</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold">Quarterly Meeting Reminder</h4>
                  <p className="text-gray-600 mt-2">
                    Don&apos;t forget about our upcoming quarterly meeting on March 15th at 2 PM in Meeting Room A.
                  </p>
                  <div className="mt-2 space-x-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Meeting</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">Posted: Feb 28, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Contact Directory</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Building Manager</h4>
                <p className="text-gray-600">John Smith</p>
                <p className="text-[#3498db]">manager@stratabuilding.com</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Maintenance Team</h4>
                <p className="text-gray-600">24/7 Support</p>
                <p className="text-[#3498db]">maintenance@stratabuilding.com</p>
                <p className="text-gray-600">+1 (555) 123-4568</p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Security Office</h4>
                <p className="text-gray-600">24/7 Security Desk</p>
                <p className="text-[#3498db]">security@stratabuilding.com</p>
                <p className="text-gray-600">+1 (555) 123-4569</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
} 