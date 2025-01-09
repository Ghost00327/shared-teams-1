import Badge from './Badge';

interface TableSectionProps {
  title: string;
  columns: string[];
  data?: any[]; // We'll type this properly once we know the data structure
}

function TableSection({ title, columns }: TableSectionProps) {
const widths = {
    0: 'w-[40%]',  // First column
    1: 'w-[25%]',  // Member column
    2: 'w-[15%]',  // Status/Due column
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
          {/* We'll add table rows here once we have the data */}
          <tr className="text-left">
            {columns.map((column, index) => {
              return (
                <td key={index} className={`py-2 px-4 text-base sm:text-lg md:text-xl lg:text-[18px] ${widths[index as keyof typeof widths]} ${
                  index === 0 ? 'text-primary-blue hover:underline cursor-pointer' : 
                  index === 2 ? '' : 'text-custom-gray'
                }`}>
                  {index === 2 && ['Support Needed', 'Update Needed', 'Specialized Support'].includes(column) ? 
                    <Badge status={column} /> : 
                    column
                  }
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableSection; 