import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const barChartData = [
  { month: "Jan", newLicense: 800, renewedLicense: 400 },
  { month: "Feb", newLicense: 600, renewedLicense: 500 },
  { month: "Mar", newLicense: 700, renewedLicense: 600 },
  { month: "Apr", newLicense: 400, renewedLicense: 400 },
  { month: "May", newLicense: 500, renewedLicense: 300 },
  { month: "Jun", newLicense: 600, renewedLicense: 500 },
  { month: "Jul", newLicense: 400, renewedLicense: 400 },
  { month: "Aug", newLicense: 500, renewedLicense: 300 },
  { month: "Sep", newLicense: 600, renewedLicense: 400 },
  { month: "Oct", newLicense: 500, renewedLicense: 300 },
  { month: "Nov", newLicense: 400, renewedLicense: 400 },
  { month: "Dec", newLicense: 300, renewedLicense: 200 },
];

const linkedLicenseData = [
  { name: "0 Linked License", value: 31, color: "#5b47b9" },
  { name: "1-3 Linked License", value: 12, color: "#69d2e7" },
  { name: "3+ Linked License", value: 57, color: "#f87171" },
];

const activeLicenseData = [
  { name: "Active License", value: 52, color: "#f87171" },
  { name: "Application Processing", value: 17, color: "#69d2e7" },
  { name: "Expired License", value: 31, color: "#5b47b9" },
];

export function DashboardContentBody() {
  console.log('Recharts loaded:', BarChart != null, PieChart != null);

  return (
    <div className="flex-1 space-y-6 overflow-y-auto p-6" style={{ minHeight: '100vh' }}>
      {/* License Statistics */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">32,340</h2>
        <p className="text-sm text-gray-600">
          Number of New License Issued & Renewed
        </p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="rounded-lg border bg-white p-4 shadow-sm" style={{ minHeight: '400px' }}>
          <h3 className="mb-4 text-lg font-semibold">License Trends</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="newLicense" fill="#f87171" name="New License" />
                <Bar dataKey="renewedLicense" fill="#5b47b9" name="Renewed License" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Charts Container */}
        <div className="grid grid-cols-1 gap-6">
          {/* Linked License Pie Chart */}
          <div className="rounded-lg border bg-white p-4 shadow-sm" style={{ minHeight: '300px' }}>
            <h3 className="mb-2 text-lg font-semibold">
              Percentage of commercial buildings linked with license
            </h3>
            <p className="mb-4 text-2xl font-bold text-[#f87171]">88%</p>
            <div style={{ width: '100%', height: '200px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={linkedLicenseData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                  >
                    {linkedLicenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Active License Pie Chart */}
          <div className="rounded-lg border bg-white p-4 shadow-sm" style={{ minHeight: '300px' }}>
            <h3 className="mb-2 text-lg font-semibold">
              Percentage of Active Trade License
            </h3>
            <p className="mb-4 text-2xl font-bold text-[#f87171]">57%</p>
            <div style={{ width: '100%', height: '200px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activeLicenseData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                  >
                    {activeLicenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
