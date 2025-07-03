import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://arkan2.runasp.net/api/Category");
      setCategories(res.data.data);
    } catch {
      toast.error("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://arkan2.runasp.net/api/Category/${id}`);
      toast.success("Category deleted successfully!");
      fetchCategories();
    } catch {
      toast.error("Failed to delete category");
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.trim()) {
      toast.error("Category name is required");
      return;
    }
    try {
      await axios.post("https://arkan2.runasp.net/api/Category", {
        name: newCategory,
      });
      toast.success("Category added successfully!", {
        theme: "colored",
      });
      setNewCategory("");
      setShowModal(false);
      fetchCategories();
    } catch {
      toast.error("Failed to add category");
    }
  };

  return (
    <div className="p-6 min-h-screen ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categories</h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2 bg-base hover:bg-primary text-white rounded-lg font-semibold shadow transition-colors duration-200"
        >
          + Add New Category
        </button>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <ClipLoader color="#D88317" size={50} />
          </div>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{cat.id}</td>
                  <td className="px-4 py-2">{cat.name}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded shadow text-sm flex items-center gap-2 justify-center"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Modal for adding category */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-6 text-center">
              Add New Category
            </h3>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-base text-white rounded-lg font-semibold shadow transition-colors duration-200"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
