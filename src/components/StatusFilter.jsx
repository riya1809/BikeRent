import React from 'react'

const StatusFilter = ({ status, setStatus }) => {
  return (
        <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full md:w-48 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
    >
      <option value="All">All Status</option>
      <option value="Completed">Completed</option>
      <option value="Ongoing">Ongoing</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default StatusFilter