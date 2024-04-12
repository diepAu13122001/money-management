import React, { ReactNode } from "react"

interface cellProps {
  content: string;
  subtext: string;
  icon: ReactNode;
  tabColor: string;
  textColor: string;
}

interface rowProps {
  cells: cellProps[];
}

export interface tableProps {
  title: string[];
  data: rowProps[];
  name: string;
  sortBy: string[];
  size: string;
}

export const Table = ({ tableData }) => {

  return (
    <div className={`divide-y divide-gray-200 ${tableData.size} bg-white rounded-md drop-shadow-sm`}>
      <div className="flex p-3 w-full justify-between items-center">
        <p className="text-[16px] font-semibold">{tableData.name}</p>
        <select name="sort" className="focus:outline-none font-light text-[12px] text-right">
          {tableData.sortBy.map(option =>
            <option value={`${option}`}>{option}</option>
          )}
        </select>
      </div>
      <table className="divide-y divide-gray-200 table-auto text-left w-full">
        <thead>
          <tr className="leading-8 text-sm bg-gray-100">
            {tableData.title.map(item =>
              <th className="px-5 py-2">{item}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map(item => (
            <tr className="hover:bg-gray-200 cursor-pointer">
              {item.cells.map(cell => (
                <td className={`px-5 py-2 ${cell.textColor}`}>
                  <div className="flex items-center text-nowrap">
                    {cell.icon}
                    <div>
                      <p className={`text-[14px] leading-3 ${cell.tabColor} px-3 py-2 rounded-md`}>{cell.content}</p>
                      <p className="text-[11px] leading-3 px-3 text-gray-600">{cell.subtext}</p>
                    </div>
                  </div>


                </td>
              ))}

            </tr>
          )
          )}
        </tbody>
      </table>
    </div>



  );
}