import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Financial Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span>Administration Fund</span>
              <span className="font-bold text-[#3498db]">$25,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Capital Works Fund</span>
              <span className="font-bold text-[#3498db]">$50,000</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Pending Maintenance</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span>Open Requests</span>
              <span className="font-bold text-[#3498db]">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span>In Progress</span>
              <span className="font-bold text-[#3498db]">2</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Upcoming Meetings</h3>
          <div className="space-y-2">
            <div>
              <span className="block text-gray-600 text-sm">March 15, 2024</span>
              <span>Quarterly Committee Meeting</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Recent Documents</h3>
          <ul className="space-y-2">
            <li className="pb-2 border-b cursor-pointer hover:text-[#3498db]">
              Minutes - February Meeting
            </li>
            <li className="pb-2 border-b cursor-pointer hover:text-[#3498db]">
              Insurance Policy Update
            </li>
            <li className="cursor-pointer hover:text-[#3498db]">
              Maintenance Schedule
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 w-32 h-32 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/images/WechatIMG38.jpg"
          alt="Math Problem"
          width={128}
          height={128}
          className="rounded-lg shadow-lg"
        />
      </div>
    </>
  );
}
