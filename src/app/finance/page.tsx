import Header from '@/components/Header';

export default function Finance() {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Administration Fund</h3>
            <div className="text-3xl font-bold text-[#3498db]">$25,000</div>
            <div className="text-sm text-gray-500 mt-2">Last updated: March 1, 2024</div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Capital Works Fund</h3>
            <div className="text-3xl font-bold text-[#3498db]">$50,000</div>
            <div className="text-sm text-gray-500 mt-2">Last updated: March 1, 2024</div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Total Balance</h3>
            <div className="text-3xl font-bold text-[#3498db]">$75,000</div>
            <div className="text-sm text-gray-500 mt-2">Combined funds</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Description</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-right py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Mar 1, 2024</td>
                  <td className="py-3 px-4">Quarterly Maintenance Fee</td>
                  <td className="py-3 px-4">Income</td>
                  <td className="py-3 px-4 text-right text-green-600">+$5,000</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Feb 28, 2024</td>
                  <td className="py-3 px-4">Elevator Repair</td>
                  <td className="py-3 px-4">Maintenance</td>
                  <td className="py-3 px-4 text-right text-red-600">-$2,500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">Feb 25, 2024</td>
                  <td className="py-3 px-4">Insurance Premium</td>
                  <td className="py-3 px-4">Insurance</td>
                  <td className="py-3 px-4 text-right text-red-600">-$1,800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
} 