import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

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
          <a className="text-white px-4">
            <button
              onClick={(e, id) => editEmployee(e, employee.id)}
              className="bg-slate-600 hover:bg-slate-800 rounded px-4 py-2"
            >
              Edit
            </button>
          </a>
          <a className="text-white px-4">
            <button
              onClick={(e, id) => deleteEmployee(e, employee.id)}
              className="bg-slate-600 hover:bg-slate-800 rounded px-4 py-2"
            >
              Delete
            </button>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Employee;
