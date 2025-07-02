import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
    
const ProjectsDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    projectLink: "",
    attachment: null,
    categoryId: "",
  });
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://arkan2.runasp.net/api/Service"
        );
        setProjects(response.data.data.items);
      } catch {
        // No need to set error here, as it's not used in the component
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Fetch categories when modal opens
  const openModal = async () => {
    setShowModal(true);
    if (categories.length === 0) {
      try {
        const res = await axios.get("https://arkan2.runasp.net/api/Category");
        setCategories(res.data.data);
      } catch {
        toast.error("Failed to load categories");
      }
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setForm({ name: "", projectLink: "", attachment: null, categoryId: "" });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setForm((prev) => ({ ...prev, attachment: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.projectLink ||
      !form.attachment ||
      !form.categoryId
    ) {
      toast.error("Please fill all fields and select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("Name", form.name);
    formData.append("ProjectLink", form.projectLink);
    formData.append("Attachment", form.attachment);
    formData.append("CategoryId", form.categoryId);
    try {
      await axios.post("https://arkan2.runasp.net/api/Service", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Project added successfully!");
      closeModal();
      // Optionally, refresh projects list
      const response = await axios.get("https://arkan2.runasp.net/api/Service");
      setProjects(response.data.data.items);
    } catch {
      toast.error("Failed to add project.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://arkan2.runasp.net/api/Service/${id}`);
      setProjects((prev) => prev.filter((project) => project.id !== id));
      toast.success("Project deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch {
      toast.error("Failed to delete project.", {
        position: "top-right",
        autoClose: 3000,
      });
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
    <div className="p-4 min-h-screen ">
      <ToastContainer />
      <div className="flex justify-end mb-6">
        <button
          onClick={openModal}
          className="px-6 py-2 bg-base hover:bg-primary text-white rounded-lg font-semibold shadow transition-colors duration-300"
        >
          + Add New Project
        </button>
      </div>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-6 text-center">
              Add New Project
            </h3>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Link
                </label>
                <input
                  type="text"
                  name="projectLink"
                  value={form.projectLink}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Attachment
                </label>
                <input
                  type="file"
                  name="attachment"
                  accept="image/*"
                  ref={fileInputRef}
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
                  name="categoryId"
                  value={form.categoryId}
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
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary hover:bg-second text-white rounded-lg font-semibold shadow transition-colors duration-200"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight drop-shadow-sm">
        Projects Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.attachment}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => handleDelete(project.id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                title="Delete Project"
              >
                <FaTrash size={16} />
              </button>
            </div>
            <div className="flex-1 flex flex-col p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3
                  className="text-lg font-bold text-gray-800 truncate"
                  title={project.name}
                >
                  {project.name}
                </h3>
                <span className="text-xs bg-second text-white px-3 py-1 rounded-full font-semibold">
                  {project.categoryName}
                </span>
              </div>
              <div className="mt-auto pt-4 flex justify-end">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-base hover:bg-primary text-white rounded-lg font-medium shadow transition-colors duration-300 text-sm"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDashboard;
