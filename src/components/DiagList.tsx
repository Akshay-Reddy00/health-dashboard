import { format } from 'date-fns';
import type { DiagnosticRecord } from '../types';

interface Props {
  diagnostics: DiagnosticRecord[];
}

export const DiagnosticList = ({ diagnostics }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Diagnostic List</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Problem/Diagnosis</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Description</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-3 px-4 text-sm text-gray-800">Hypertension</td>
              <td className="py-3 px-4 text-sm text-gray-600">Chronic high blood pressure</td>
              <td className="py-3 px-4">
                <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
                  Under Observation
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm text-gray-800">Type 2 Diabetes</td>
              <td className="py-3 px-4 text-sm text-gray-600">Insulin resistance and elevated blood sugar</td>
              <td className="py-3 px-4">
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                  Cured
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm text-gray-800">Asthma</td>
              <td className="py-3 px-4 text-sm text-gray-600">Recurrent episodes of bronchial constriction</td>
              <td className="py-3 px-4">
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800">
                  Inactive
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};