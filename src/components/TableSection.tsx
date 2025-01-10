import Badge from './Badge';
import { useNavigate } from 'react-router-dom';

interface TableSectionProps {
  title: string;
  columns: string[];
  data?: {
    projectName: string;
    memberName: string;
    due?: string;
    status?: string;
    lastUpdate?: string;
    projectId: string;
  }[];
}

function TableSection({ title, columns, data }: TableSectionProps) {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const widths = {
    0: 'w-[30%]',  // First column
    1: 'w-[23%]',  // Member column
    2: 'w-[20%]',  // Status/Due column
    3: 'w-[20%]'   // Last Update column
  };

  return (
    <div className="bg-white shadow-[0_3px_6px_rgba(0,0,0,0.161)]">
      <table className="w-full rounded-[10px]">
        <thead className="bg-[#F2F2F2] rounded-[4px] p-3 mb-4 font-normal">
          <tr className="text-left">
            {columns.map((column, index) => {
              return (
                <th key={index} className={`py-2 px-4 text-primary-blue text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold ${widths[index as keyof typeof widths]}`}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-left">
              <td 
                onClick={() => handleProjectClick(row.projectId)} 
                className={`py-2 px-4 text-base sm:text-lg md:text-xl lg:text-[18px] ${widths[0]} text-primary-blue hover:underline cursor-pointer`}
              >
                {row.projectName}
              </td>
              <td className={`py-2 px-4 text-base sm:text-lg md:text-xl lg:text-[18px] ${widths[1]} text-custom-gray`}>
                {row.memberName}
              </td>
              <td className={`py-2 px-4 text-base sm:text-lg md:text-xl lg:text-[18px] ${widths[2]}`}>
                {row.status && <Badge status={row.status} />}
              </td>
              <td className={`py-2 px-4 text-base sm:text-lg md:text-xl lg:text-[18px] ${widths[3]} text-custom-gray`}>
                {row.due || row.lastUpdate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSection; 