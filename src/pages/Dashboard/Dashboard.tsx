const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Dashboard
      </h1>

      <p className="text-gray-600">
        Welcome to your dashboard 👋
      </p>

      {/* Simple cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="text-sm text-gray-500">Total Inventory</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">120</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="text-sm text-gray-500">Total Tasks</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">35</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="text-sm text-gray-500">Pending Tasks</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">8</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
