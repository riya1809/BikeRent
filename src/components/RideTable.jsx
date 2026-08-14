import React from 'react'
import RideRow from './RideRow'

const RideTable = ({ rides, openRide, setOpenRide }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Rider
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Driver
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Vehicle
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Fare
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Date
              </th>

              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody>
            {rides.length > 0 ? (
              rides.map((ride) => (
                <RideRow
                  key={ride.id}
                  ride={ride}
                  isOpen={openRide === ride.id}
                  onClick={() =>
                    setOpenRide(
                      openRide === ride.id ? null : ride.id
                    )
                  }
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-16 text-center"
                >
                  <div className="text-gray-400">
                    <svg
                      className="mx-auto h-12 w-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12h6m-6 4h4M7 4h10a2 2 0 0 1 2 2v14l-4-3-4 3-4-3-4 3V6a2 2 0 0 1 2-2Z"
                      />
                    </svg>

                    <p className="mt-3 font-medium">
                      No rides found
                    </p>

                    <p className="mt-1 text-sm">
                      Try changing your search or filter.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RideTable