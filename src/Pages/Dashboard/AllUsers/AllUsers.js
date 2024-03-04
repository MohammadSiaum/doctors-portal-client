import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },

  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0) {
            toast.success('Make ADMIN successfully')
            refetch();
        }
      })
  }
  return (
    <div className="p-7">
      <h2 className="text-3xl mb-5">All users :</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}

            {users.map((user, i) => 
              <tr key={user._id} className="hover">
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  { 
                      user?.role ==='admin' ?
                        <p>Admin</p>
                      : <button onClick={()=> handleMakeAdmin(user._id)} className='hover:bg-blue-600 bg-blue-500 p-2 text-white rounded'>Make Admin</button>
                    }
                </td>
                <td><button className='hover:bg-red-600 bg-red-500 p-2 text-white rounded'>Delete</button></td>
              </tr>

            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
