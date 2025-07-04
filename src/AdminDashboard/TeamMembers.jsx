import React, { useEffect, useState } from 'react';
import api from '../utils/axiosConfig';
import { FaTrash } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeamMembers = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', position: '', attachment: null });
  const [formLoading, setFormLoading] = useState(false);
  const fileInputRef = React.useRef();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get('/Team');
        setTeam(res.data.data);
      } catch {
        toast.error('Failed to load team members');
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this member?')) return;
    setDeletingId(id);
    try {
      await api.delete(`/Team/${id}`);
      setTeam((prev) => prev.filter((member) => member.id !== id));
      toast.success('Member deleted successfully!');
    } catch {
      toast.error('Failed to delete member.');
    } finally {
      setDeletingId(null);
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setForm({ name: '', position: '', attachment: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachment') {
      setForm((prev) => ({ ...prev, attachment: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!form.name || !form.position || !form.attachment) {
      toast.error('Please fill all fields and select a file.');
      return;
    }
    setFormLoading(true);
    const formData = new FormData();
    formData.append('Name', form.name);
    formData.append('Position', form.position);
    formData.append('Attachment', form.attachment);
    try {
      await api.post('/Team', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Team member added successfully!');
      closeModal();
      setLoading(true);
      const res = await api.get('/Team');
      setTeam(res.data.data);
    } catch {
      toast.error('Failed to add team member.');
    } finally {
      setFormLoading(false);
      setLoading(false);
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
    <div className="p-4 min-h-screen">
      <div className="flex justify-end mb-6">
        <button
          onClick={openModal}
          className="px-6 py-2 bg-base hover:bg-primary text-white rounded-lg font-semibold shadow transition-colors duration-300"
        >
          + Add New Member
        </button>
      </div>
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
              Add New Team Member
            </h3>
            <form onSubmit={handleAddMember} className="space-y-4">
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
                <label className="block text-sm font-medium mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  value={form.position}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Attachment</label>
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
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary hover:bg-second text-white rounded-lg font-semibold shadow transition-colors duration-200"
                  disabled={formLoading}
                >
                  {formLoading ? <ClipLoader color="#fff" size={20} /> : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight drop-shadow-sm">
        Team Members
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={member.attachment}
                alt={member.name}
                className="w-full h-full object-contain bg-white group-hover:scale-100 transition-transform duration-300"
              />
              <button
                onClick={() => handleDelete(member.id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                title="Delete Member"
                disabled={deletingId === member.id}
              >
                {deletingId === member.id ? (
                  <ClipLoader color="#fff" size={16} />
                ) : (
                  <FaTrash size={16} />
                )}
              </button>
            </div>
            <div className="flex-1 flex flex-col p-5 items-center justify-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2" title={member.name}>
                {member.name}
              </h3>
              <span className="text-sm bg-base text-white px-3 py-1 rounded-full font-semibold mb-2">
                {member.position}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;