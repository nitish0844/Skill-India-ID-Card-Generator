import React from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { useHistory } from "react-router-dom"; // Import useHistory

// import Exce

const Excelupload = ({ className }) => {
  // const [excelData, setExcelData] = useState([]);
  const history = useHistory();

  // const serialToDate = (serial) => {
  //   const date = new Date((serial - 25569) * 86400 * 1000); // Convert Excel serial to milliseconds
  //   return (
  //     date.getDate().toString().padStart(2, "0") +
  //     "-" +
  //     (date.getMonth() + 1).toString().padStart(2, "0") +
  //     "-" +
  //     date.getFullYear()
  //   );
  // };

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const sheetData = XLSX.utils.sheet_to_json(sheet, {
          raw: false, // Preserve cell types (like dates)
          dateNF: "DD-MM-YYYY", // Specify the date format you want
        });

        // setExcelData(sheetData);
        history.push("/excel-data", { excelData: sheetData });
      };
      reader.readAsBinaryString(file);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xls, .xlsx",
  });

  return (
    <div
      className={`p-16 mt-10 w-1/3 border z-auto border-dotted border-black bg-green-100 self-center h-1/2 flex flex-col justify-center items-center ${className}`}
      {...getRootProps()}
    >
      <div className="absolute -z-50 inset-0 bg-gradient-to-r from-red-200 to-transparent h-auto w-auto ml-14 rounded-full opacity-70"></div>
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Drop the Excel files here...</p>
      ) : (
        <>
          <p className="text-center font-semibold font-LoginFont z-50">
            Drag and drop Excel files here,
          </p>

          <button className="bg-blue-500 text-white font-semibold font-LoginFont py-2 px-4 z-50 rounded mt-4">
            Select Files
          </button>
          {/* {excelData.length > 0 && (
            <Link to="/excel-data">View Excel Data</Link>
          )} */}
        </>
      )}
    </div>
  );
};

export default Excelupload;
