import { format } from 'date-fns';
import type { DiagnosisRecord } from '../types';

interface Props {
  diagnoses: DiagnosisRecord[];
}

export const DiagnosisHistory = ({ diagnoses }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Diagnosis History</h3>
      <div className="space-y-4">
        {diagnoses.map((diagnosis, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium text-gray-800">{diagnosis.condition}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(diagnosis.date), 'MMM dd, yyyy')}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              diagnosis.status === 'Active' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {diagnosis.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};