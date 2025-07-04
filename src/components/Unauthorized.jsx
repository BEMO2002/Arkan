import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">غير مصرح لك بالدخول</h1>
      <p className="text-lg text-gray-700 mb-6">ليس لديك الصلاحية للوصول إلى هذه الصفحة.</p>
      <Link to="/login" className="text-blue-600 hover:underline">العودة لتسجيل الدخول</Link>
    </div>
  );
};

export default Unauthorized; 