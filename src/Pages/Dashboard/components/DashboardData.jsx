import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const DashboardData = ({ activeFilter, filterFormData }) => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchData();
  }, [activeFilter, filterFormData]);

  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams({
        filter: activeFilter,
        ...filterFormData,
      }).toString();

      const response = await axiosPublic.get(`/dashboard?${queryParams}`);
      console.log("📊 Fetched Data:", response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("❌ Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleEditClick = (item) => {
    setEditId(item._id);
    setEditData({ ...item });
  };

  const handleChange = (e, field) => {
    setEditData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSave = async (id) => {
    try {
      console.log("🔄 Sending update request for ID:", id, editData);
      const { _id, ...updatedData } = editData;
      const response = await axiosPublic.put(`/dashboard/${id}`, updatedData);

      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item._id === id ? { ...item, ...updatedData } : item
          )
        );
        setEditId(null);
        alert("✅ Data updated successfully!");
      } else {
        alert("⚠ Failed to update data!");
      }
    } catch (error) {
      console.error("❌ Error updating data:", error.response?.data || error.message);
      alert("❌ Update failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="overflow-x-auto w-full text-black">
      {loading ? (
        <p className="text-center py-4">Loading...</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300 whitespace-nowrap">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Select</th>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Company Name</th>
              <th className="border border-gray-300 px-4 py-2">Customer Name</th>
              <th className="border border-gray-300 px-4 py-2">Primary Phone</th>
              <th className="border border-gray-300 px-4 py-2">Cell Phone</th>
              <th className="border border-gray-300 px-4 py-2">State</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Assigned To</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Source</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item._id} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{item._id}</td>
                  {["companyName", "customerName", "primaryPhone", "cellPhone", "state", "email", "assignedTo", "status", "source"].map((field) => (
                    <td key={field} className="border border-gray-300 px-4 py-2">
                      {editId === item._id ? (
                        <input
                          type="text"
                          className="border border-gray-300 px-2 py-1 w-full"
                          value={editData[field] || ""}
                          onChange={(e) => handleChange(e, field)}
                        />
                      ) : (
                        item[field]
                      )}
                    </td>
                  ))}
                  <td className="border border-gray-300 px-4 py-2">
                    {editId === item._id ? (
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded"
                        onClick={() => handleSave(item._id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center py-4">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DashboardData;