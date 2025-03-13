import axios from 'axios';
import { useEffect, useState } from 'react';
import { credentials } from '../utils/login';

interface Props {
  name: string;
  age: number;
  gender: string;
}

export const PatientInfo = ({ name, age, gender }: Props) => {

  const [patientInfo, setPatientInfo] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        
        setPatientInfo(res.data[3]);
        console.log("Patient info: ",res.data[3]);
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img 
        src={patientInfo.profile_picture}
        alt={name}
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{patientInfo.name}</h2>
      <div className="w-full space-y-4">
        <div className="flex items-center border-b pb-3">
          <span className="text-gray-600 font-medium w-32">Date Of Birth</span>
          <span className="text-gray-800">{patientInfo.date_of_birth}</span>
        </div>
        <div className="flex items-center border-b pb-3">
          <span className="text-gray-600 font-medium w-32">Gender</span>
          <span className="text-gray-800">{patientInfo.gender}</span>
        </div>
        <div className="flex items-center border-b pb-3">
          <span className="text-gray-600 font-medium w-32">Contact Info.</span>
          <span className="text-gray-800">{patientInfo.phone_number}</span>
        </div>
        <div className="flex items-center border-b pb-3">
          <span className="text-gray-600 font-medium w-32">Emergency Contacts</span>
          <span className="text-gray-800">{patientInfo.emergency_contact}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 font-medium w-32">Insurance Provider</span>
          <span className="text-gray-800">{patientInfo.insurance_type}</span>
        </div>
      </div>
    </div>
  );
}