"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Employee } from '@/lib/types';
import { Button } from '../ui/button';

const AccountManagement = ({ employee }: { employee: Employee }) => {
  const [formData, setFormData] = useState<Employee>(employee);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const urls = e.target.value.split(',').map((url) => url.trim());
    setFormData((prev) => ({
      ...prev,
      profile_url: urls.join(','),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Callback goes here to update
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Account Management</h2>

        <div className="mb-5">
          <label htmlFor="fullName" className="block mb-2 text-gray-700 font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-gray-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="employee_role" className="block mb-2 text-gray-700 font-semibold">
            Employee Role
          </label>
          <input
            type="text"
            id="employee_role"
            name="employee_role"
            value={formData.employee_role}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="profile_url" className="block mb-2 text-gray-700 font-semibold">
            Profile URL(s) (comma separated)
          </label>
          <input
            type="text"
            id="profile_url"
            name="profile_url"
            value={formData.profile_url}
            onChange={handleProfileUrlChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default AccountManagement;