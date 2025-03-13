import { Download } from 'lucide-react';
import type { LabResult } from '../types';

interface Props {
  results: LabResult[];
}

export const LabResults = ({ results }: Props) => {
  const labCategories = [
    { name: 'Blood Tests', icon: <Download className="w-5 h-5" /> },
    { name: 'CT Scans', icon: <Download className="w-5 h-5" /> },
    { name: 'Radiology Reports', icon: <Download className="w-5 h-5" /> },
    { name: 'X-Rays', icon: <Download className="w-5 h-5" /> },
    { name: 'Urine Test', icon: <Download className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Lab Results</h3>
      <div className="space-y-3">
        {labCategories.map((category, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            <span className="text-gray-800">{category.name}</span>
            {category.icon}
          </div>
        ))}
      </div>
    </div>
  );
};