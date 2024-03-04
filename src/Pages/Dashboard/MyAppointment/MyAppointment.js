import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "react-query";
import { format } from "date-fns";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const currentDateDetails = new Date();
  const todayDate = format(currentDateDetails, "PP");

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="pl-5 mb-9">
      <div className="py-9 flex justify-between">
        <h2 className="text-3xl">My Appointments :</h2>
        <h2 className="text-xl">
          <span className="hover:bg-gray-700 hover:p-3 hover:border-none hover:text-white border-2 p-2 cursor-pointer text-gray-800 border-gray-600 rounded-md">
            {todayDate}
          </span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>NO</th>
              <th>Patient</th>
              <th>Treatment</th>
              <th>Times</th>
              <th>Appointment Date</th>
              <th>Applied Date and Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, i) => 
              <tr className="hover" key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatmentTitle}</td>
                <td>{booking.slot}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.currentDate}</td>
                <td>
                  <button className="hover:bg-red-600 bg-red-500 p-2 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            )}

            {
                // bookings.map(booking => <div></div>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
