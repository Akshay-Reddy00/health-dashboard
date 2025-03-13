import React from 'react';

interface Props {
  name: string;
  age: number;
  gender: string;
}

export const PatientInfo = ({ name, age, gender }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img 
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
        alt={name}
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
      <div className="w-full space-y-4">
        <div className="flex items-center border-b pb-3">
          <span className="text-gray-600 font-medium w-32">Date Of Birth</span>
          <span className="text-gray-800">August 23, 1996</span>
        </div>
        <div className="flex items-center border-b pb-3">
          <span className="text-gray-600 font-medium w-32">Gender</span>
          <span className="text-gray-800">{gender}</span>
        </div>
        <div className="flex items-center border-b pb-3">
          <span className="text-gray-600 font-medium w-32">Contact Info.</span>
          <span className="text-gray-800">(415) 555-1234</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 font-medium w-32">Emergency Contacts</span>
          <span className="text-gray-800">(415) 555-5678</span>
        </div>
      </div>
    </div>
  );
}