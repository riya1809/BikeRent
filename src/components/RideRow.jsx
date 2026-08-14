import React from 'react'

const RideRow = ({ ride, isOpen, onClick }) => {
  const statusStyles = {
    Completed: "bg-green-100 text-green-700 border-green-200",
    Ongoing: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Cancelled: "bg-red-100 text-red-700 border-red-200",
  };
  return (
   <>
      <tr
        onClick={onClick}
        className="cursor-pointer border-b border-gray-100 transition hover:bg-indigo-50/50"
      >
        <td className="px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
              {ride.riderName.charAt(0)}
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                {ride.riderName}
              </p>
              <p className="text-xs text-gray-400">Rider</p>
            </div>
          </div>
        </td>

        <td className="px-6 py-5 text-gray-700">
          {ride.driverName}
        </td>

        <td className="px-6 py-5">
          <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
            {ride.vehicleNumber}
          </span>
        </td>

        <td className="px-6 py-5">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusStyles[ride.status]}`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {ride.status}
          </span>
        </td>

        <td className="px-6 py-5 font-semibold text-gray-800">
          ₹{ride.fare}
        </td>

        <td className="px-6 py-5 text-gray-500">
          {ride.date}
        </td>

        <td className="px-6 py-5 text-gray-400">
          <svg
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </td>
      </tr>

      {isOpen && (
        <tr className="bg-indigo-50/40">
          <td colSpan="7" className="px-6 py-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Pickup
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {ride.pickup}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Destination
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {ride.destination}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Distance
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {ride.distance}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Duration
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {ride.duration}
                </p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default RideRow