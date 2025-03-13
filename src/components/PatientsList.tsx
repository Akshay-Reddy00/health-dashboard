import React from 'react';
import { MoreVertical, Search } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
  imageUrl: string;
}

interface Props {
  patients: Patient[];
  selectedPatientId: string;
  onPatientSelect: (id: string) => void;
}

export const PatientsList = ({ patients, selectedPatientId, onPatientSelect }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patients</h2>
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search patients..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="space-y-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            onClick={() => onPatientSelect(patient.id)}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
              selectedPatientId === patient.id ? 'bg-cyan-50' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <img
                src={patient.imageUrl}
                alt={patient.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-800">{patient.name}</h3>
                <p className="text-sm text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};