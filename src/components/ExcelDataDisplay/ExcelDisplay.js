import React from "react";
import MainPageNav from "../mainpage/MainPageNav";
import { Link } from "react-router-dom";

const ExcelDisplay = ({ location }) => {
  const { state } = location;
  const excelData = state ? state.excelData : [];

  return (
    <div className="bg-white">
      <MainPageNav />
      <div className="flex justify-center items-center min-h-min pt-10 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Excel Data</h1>
          <table className="table-auto w-full">
            <thead>
              <tr>
                {excelData.length > 0 &&
                  Object.keys(excelData[0]).map((header, index) => (
                    <th key={index} className="px-4 py-2 border">
                      {header}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-2 border text-center"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <Link
              to={{
                pathname: "/generate-id-card",
                state: { excelData }, // Pass the data as state
              }}
              //   to="/generate-id-card"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              Generate ID Card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelDisplay;
