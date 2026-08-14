
import { useMemo, useState } from "react";
import { rides } from "../public/data/rides.js";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";
import RideTable from "./components/RideTable";

const App =() =>{
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [openRide, setOpenRide] = useState(null);

  const filteredRides = useMemo(() => {
    return rides.filter((ride) => {
      const matchesSearch = ride.riderName
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || ride.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const completed = rides.filter(
    (ride) => ride.status === "Completed"
  ).length;

  const ongoing = rides.filter(
    (ride) => ride.status === "Ongoing"
  ).length;

  const cancelled = rides.filter(
    (ride) => ride.status === "Cancelled"
  ).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 17h8m-9-4h10M6 20h12a2 2 0 0 0 2-2v-5l-2-5H6l-2 5v5a2 2 0 0 0 2 2Zm1-7h.01M17 13h.01M7 8l1-4h8l1 4"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Ride Management
              </h1>
              <p className="text-sm text-gray-500">
                View and manage all ride records
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ride Records
          </h2>

          <p className="mt-2 text-gray-500">
            Track rider information, drivers, fares and ride status.
          </p>
        </section>

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {completed}
                </p>
              </div>

              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                ✓
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Ongoing</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {ongoing}
                </p>
              </div>

              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                ●
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Cancelled</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {cancelled}
                </p>
              </div>

              <div className="rounded-xl bg-red-100 p-3 text-red-600">
                ×
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <StatusFilter
              status={status}
              setStatus={setStatus}
            />
          </div>
        </section>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredRides.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-800">
              {rides.length}
            </span>{" "}
            rides
          </p>

          {(search || status !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setStatus("All");
              }}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              Clear filters
            </button>
          )}
        </div>

        <RideTable
          rides={filteredRides}
          openRide={openRide}
          setOpenRide={setOpenRide}
        />
      </main>
    </div>
  );
}

export default App;