import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

const ContactFormDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const statusOptions = ["Accepted", "Pending"];

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://arkan2.runasp.net/api/ContactForm");
      setContacts(res.data.data.items);
    } catch {
      toast.error("Failed to fetch contact forms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://arkan2.runasp.net/api/ContactForm/${id}`);
      toast.success("Contact form deleted successfully!", {
        theme: "colored",
      });
      fetchContacts();
    } catch {
      toast.error("Failed to delete contact form");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSelectedContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (
      !selectedContact.name ||
      !selectedContact.phoneNumber ||
      !selectedContact.businessField ||
      !selectedContact.message ||
      !selectedContact.status
    ) {
      toast.error("All fields are required.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("Name", selectedContact.name);
      formData.append("PhoneNumber", selectedContact.phoneNumber);
      formData.append("BusinessField", selectedContact.businessField);
      formData.append("Message", selectedContact.message);
      formData.append("Status", selectedContact.status);

      console.log(
        "Sending update data (FormData):",
        Object.fromEntries(formData)
      );
      const response = await axios.put(
        `https://arkan2.runasp.net/api/ContactForm/${selectedContact.id}/status`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            accept: "*/*",
          },
        }
      );
      console.log("API Response:", response.data);
      toast.success("Contact updated successfully!");
      closeModal();
      fetchContacts();
    } catch (error) {
      toast.error("Failed to update contact");
      console.error("Update error:", error.response?.data);
    }
  };

  const handleAccept = async (contact) => {
    if (
      !contact.name?.trim() ||
      !contact.phoneNumber?.trim() ||
      !contact.businessField?.trim() ||
      !contact.message?.trim() ||
      !contact.status?.trim()
    ) {
      toast.error(
        "Contact data is incomplete or invalid. Please update it first."
      );
      setSelectedContact(contact);
      setShowModal(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Name", contact.name);
      formData.append("PhoneNumber", contact.phoneNumber);
      formData.append("BusinessField", contact.businessField);
      formData.append("Message", contact.message);
      formData.append("Status", "Accepted");

      console.log(
        "Sending accept data (FormData):",
        Object.fromEntries(formData)
      );
      const response = await axios.put(
        `https://arkan2.runasp.net/api/ContactForm/${contact.id}/status`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            accept: "*/*",
          },
        }
      );
      console.log("API Response:", response.data);
      toast.success("Contact accepted successfully!");
      fetchContacts();
    } catch (error) {
      toast.error("Failed to accept contact");
      console.error("Accept error:", error.response?.data);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <ClipLoader color="#D88317" size={50} />
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen ">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight drop-shadow-sm">
        Contact Forms
      </h2>
      {loading ? (
        <div>Loading...</div>
      ) : contacts.length === 0 ? (
        <div>No contact forms found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group p-6 relative"
            >
              <button
                onClick={() => handleDelete(contact.id)}
                className="absolute top-3 right-3 bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                title="Delete"
              >
                <FaTrash />
              </button>
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    contact.status === "Accepted"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {contact.status}
                </span>
              </div>
              <div className="mb-1">
                <span className="font-semibold">Name:</span> {contact.name}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Phone:</span>{" "}
                {contact.phoneNumber}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Business Field:</span>{" "}
                {contact.businessField}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Message:</span>{" "}
                {contact.message}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Submitted At:</span>{" "}
                {new Date(contact.submittedAt).toLocaleString()}
              </div>
              <div className="flex gap-3 mt-4 justify-end">
                {contact.status !== "Accepted" && (
                  <button
                    onClick={() => handleAccept(contact)}
                    className="flex items-center gap-2 px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold shadow transition-colors duration-200"
                  >
                    <FaCheck /> Accept
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedContact(contact);
                    setShowModal(true);
                  }}
                  className="flex items-center gap-2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow transition-colors duration-200"
                >
                  <FaEdit /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showModal && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn border border-gray-200">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Edit Contact
            </h3>
            <form onSubmit={handleUpdate} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={selectedContact.name || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={selectedContact.phoneNumber || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Business Field
                </label>
                <input
                  type="text"
                  name="businessField"
                  value={selectedContact.businessField || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={selectedContact.message || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={selectedContact.status || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition-colors duration-200"
                >
                  <FaEdit /> Save
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex items-center gap-2 px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold shadow transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormDashboard;
