import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaEdit, FaCheck, FaPlus } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import api from "../utils/axiosConfig";
import { useAuth } from "../context/AuthContext";

const CreatServices = () => {
  const { roles } = useAuth();
  const isAdmin = roles && roles.includes("Admin");
  const isSales = roles && roles.includes("Sales");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    ClientName: "",
    SalesName: "",
    Descriptions: "",
    Phone: "",
    ServiceName: "",
    TypeOfService: "",
    CategoryId: "",
  });
  const [selectedService, setSelectedService] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  // مراقبة تغييرات services state
  useEffect(() => {
    console.log("Services state changed:", services.length, "items");
  }, [services]);

  // Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/Form/getAll?pageSize=100&pageIndex=1");
        setServices(response.data.data.items || []);
      } catch {
        setError("Failed to fetch services");
        toast.error("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Fetch categories when modal opens
  useEffect(() => {
    if (showModal) {
      api
        .get("/Category")
        .then((res) => setCategories(res.data.data || []))
        .catch(() => {
          setCategories([]);
          toast.error("Failed to fetch categories");
        });
    }
  }, [showModal]);

  // Delete service by id
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?"))
      return;
    try {
      await api.delete(`/Form/${id}`);
      setServices((prev) => prev.filter((service) => service.id !== id));
      toast.success("Service deleted successfully");
    } catch {
      toast.error("Failed to delete service");
    }
  };

  // Open update modal with service data
  const handleUpdateClick = (service) => {
    setSelectedService(service);
    setShowUpdateModal(true);
  };

  // Close update modal
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedService(null);
  };

  // Handle status update
  const handleStatusUpdate = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const formData = new FormData();
      formData.append("ClientName", selectedService.clientName);
      formData.append("SalesName", selectedService.salesName);
      formData.append("Descriptions", selectedService.descriptions);
      formData.append("Phone", selectedService.phone);
      formData.append("ServiceName", selectedService.serviceName);
      formData.append("TypeOfService", selectedService.typeOfService);
      formData.append("CategoryId", selectedService.categoryId);
      formData.append("Status", "Accepted");

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value} (type: ${typeof value})`);
      }

      const response = await api.put(
        `/Form/${selectedService.id}/status`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Status update response:", response);
      toast.success("Service status updated to Accepted");
      closeUpdateModal();
      // Refresh services
      const res = await api.get("/Form/getAll?pageSize=100&pageIndex=1");
      console.log("New services data:", res.data);
      setServices(res.data.data.items || []);
      console.log(
        "Services state updated with",
        res.data.data.items?.length,
        "items"
      );
    } catch (err) {
      console.error("Status update error:", err);
      if (err.response && err.response.data && err.response.data.errors) {
        err.response.data.errors.forEach((error) => {
          toast.error(error);
        });
      } else {
        toast.error(`Error updating status: ${err.message}`);
      }
    } finally {
      setFormLoading(false);
    }
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add New Service
  const handleAddService = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const formData = new FormData();
      formData.append("ClientName", form.ClientName);
      formData.append("SalesName", form.SalesName);
      formData.append("Descriptions", form.Descriptions);
      formData.append("Phone", form.Phone);
      formData.append("ServiceName", form.ServiceName);
      formData.append("TypeOfService", form.TypeOfService);
      formData.append("CategoryId", form.CategoryId);

      console.log("=== DEBUGGING ===");
      console.log("Form state:", form);
      console.log("FormData entries:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value} (type: ${typeof value})`);
      }

      const response = await api.post("/Form/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response);
      toast.success("Service created successfully!", {
        theme: "colored",
      });
      setShowModal(false);
      setForm({
        ClientName: "",
        SalesName: "",
        Descriptions: "",
        Phone: "",
        ServiceName: "",
        TypeOfService: "",
        CategoryId: "",
      });
      // Refresh services list
      console.log("Refreshing services list...");
      const res = await api.get("/Form/getAll?pageSize=100&pageIndex=1");
      console.log("New services data:", res.data);
      setServices(res.data.data.items || []);
      console.log(
        "Services state updated with",
        res.data.data.items?.length,
        "items"
      );
    } catch (err) {
      toast.error(`Error creating service: ${err.message}`);
    } finally {
      setFormLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <ClipLoader color="#D88317" size={50} />
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="p-6 min-h-screen">
      {/* Add New Service Button */}
      <div className="flex justify-end mb-6">
        {isAdmin && (
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 bg-base hover:bg-primary text-white rounded-lg font-semibold shadow transition-colors duration-300 flex items-center gap-2"
          >
            <FaPlus /> Add New Service
          </button>
        )}
      </div>

      {/* Add New Service Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-6 text-center">
              Add New Service
            </h3>
            <form onSubmit={handleAddService} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  name="ClientName"
                  value={form.ClientName}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sales Name
                </label>
                <input
                  type="text"
                  name="SalesName"
                  value={form.SalesName}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Descriptions
                </label>
                <textarea
                  name="Descriptions"
                  value={form.Descriptions}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  name="Phone"
                  value={form.Phone}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Name
                </label>
                <input
                  type="text"
                  name="ServiceName"
                  value={form.ServiceName}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Type Of Service
                </label>
                <input
                  type="text"
                  name="TypeOfService"
                  value={form.TypeOfService}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  name="CategoryId"
                  value={form.CategoryId}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-base hover:bg-primary duration-300 text-white rounded-lg font-semibold flex items-center gap-2"
                  disabled={formLoading}
                >
                  {formLoading ? (
                    "Adding..."
                  ) : (
                    <>
                      <FaPlus /> Add Service
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Status Modal */}
      {showUpdateModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative animate-fadeIn">
            <button
              onClick={closeUpdateModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-6 text-center">
              Update Service Status
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  value={selectedService.clientName}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Name
                </label>
                <input
                  type="text"
                  value={selectedService.serviceName}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Current Status
                </label>
                <input
                  type="text"
                  value={selectedService.status}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="mb-4">
                Are you sure you want to update this service status to{" "}
                <strong>Accepted</strong>?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={closeUpdateModal}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStatusUpdate}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold flex items-center gap-2"
                  disabled={formLoading}
                >
                  {formLoading ? (
                    "Updating..."
                  ) : (
                    <>
                      <FaCheck /> Confirm
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight drop-shadow-sm">
        Services
      </h2>

      {services.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No services found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group p-6 relative"
            >
              <div className="absolute top-3 right-3 flex gap-2">
                {isAdmin && (
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                )}
                {(isAdmin || isSales) && (
                  <button
                    onClick={() => handleUpdateClick(service)}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    title="Update Status"
                  >
                    <FaEdit />
                  </button>
                )}
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.status === "Accepted"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {service.status}
                </span>
              </div>

              <div className="mb-1">
                <span className="font-semibold">Service:</span>{" "}
                {service.serviceName}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Client:</span>{" "}
                {service.clientName}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Sales:</span>{" "}
                {service.salesName}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Description:</span>{" "}
                {service.descriptions}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Phone:</span> {service.phone}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Type:</span>{" "}
                {service.typeOfService}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Category:</span>{" "}
                {service.categoryName}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Submitted At:</span>{" "}
                {new Date(service.submittedAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreatServices;
