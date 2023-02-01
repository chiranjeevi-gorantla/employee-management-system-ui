import React from "react";

const Employee = ({ employee }) => {
  return (
    <tr key={employee.employeeId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-base text-gray-600">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-base text-gray-600">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-base text-gray-600">{employee.emailId}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap font-medium text-right text-sm">
        <div className="pr-20">
          <a href="/#" className="text-white px-4">
            <button className="bg-slate-600 hover:bg-slate-800 rounded px-4 py-2">
              Edit
            </button>
          </a>
          <a href="/#" className="text-white px-4 ">
            <button className="bg-slate-600 hover:bg-slate-800 rounded px-4 py-2">
              Delete
            </button>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Employee;
