import React, { useEffect, useState, useMemo } from "react";
import IDCardImage from "../../assets/Images/IDMain.jpg"; // Replace with your ID card image URL
import MainPageNav from "../mainpage/MainPageNav";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Helmet } from "react-helmet";
// import Image from "../../assets/Images/logo.png";

const GenerateIDCardPage = ({ location }) => {
  const { state } = location;
  // const excelData = state ? state.excelData : [];

  const excelData = useMemo(() => {
    return state ? state.excelData : [];
  }, [state]);

  const title = "Skill-Hub Generator";

  const [profileImages, setProfileImages] = useState({});

  // useEffect(() => {
  //   // Preload profile images
  //   const loadImage = (user, index) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.src =
  //         (user && user.imge) ||
  //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80";

  //       img.onload = () => {
  //         resolve(img);
  //       };

  //       img.onerror = (error) => {
  //         reject(error);
  //       };
  //     });
  //   };

  //   // Load all profile images and wait for them to be loaded
  //   Promise.all(excelData.map(loadImage))
  //     .then((loadedImages) => {
  //       setProfileImages(loadedImages);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading profile images:", error);
  //     });
  // }, [excelData]);

  // useEffect(() => {
  //   // Preload profile images
  //   const loadImageElements = excelData.map((user, index) => {
  //     return (
  //       <img
  //         key={index}
  //         src={
  //           user && user.Image
  //             ? user.Image
  //             : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  //         }
  //         alt="Profile"
  //         style={{
  //           height: "150px",
  //           width: "120px",
  //           display: "none", // Initially hide the images
  //         }}
  //         onError={() => console.log(index, "error")} // Call handleImageError on image load error
  //       />
  //     );
  //   });

  //   setProfileImages(loadImageElements);
  // }, [excelData]);

  useEffect(() => {
    // Preload profile images
    const loadImageElements = excelData.map((user, index) => {
      const img = new Image();
      img.src =
        user && user.Image
          ? user.Image
          : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80";

      img.onload = () => {
        // Image loaded successfully
        setProfileImages((prevImages) => {
          // Update the state with the loaded image element
          const updatedImages = [...prevImages];
          updatedImages[index] = img;
          return updatedImages;
        });
      };

      return img; // Return the image element
    });

    Promise.all(loadImageElements)
      .then((loadedImages) => {
        setProfileImages(loadedImages);
      })
      .catch((error) => {
        console.error("Error loading profile images:", error);
      });
  }, [excelData]);

  // const handleDownloadClick = () => {
  //   const pdf = new jsPDF("p", "mm", "a4");

  //   excelData.forEach((user, index) => {
  //     // Select the element you want to convert to a PDF (the entire card container in this case)
  //     const cardContainer = document.getElementById(`card-${index}`);

  //     // Use html2canvas to capture the cardContainer as an image

  //     html2canvas(cardContainer)
  //       .then((canvas) => {
  //         // Create a new PDF document

  //         // Calculate the height of the PDF based on the captured canvas
  //         const imgData = canvas.toDataURL("image/png");
  //         const imgWidth = 100; // Width of the A4 paper in mm
  //         const pageHeight = (imgWidth / canvas.width) * canvas.height;

  //         const yOffset = (pdf.internal.pageSize.getHeight() - pageHeight) / 2;

  //         // Center the card within the PDF horizontally
  //         const xOffset = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
  //         // pdf.addImage(imgData, "PNG", xOffset, 0, imgWidth, pageHeight);
  //         pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, pageHeight);

  //         const profileImage = profileImages[index];

  //         console.log(profileImage);

  //         if (profileImage) {
  //           pdf.addImage(
  //             profileImage,
  //             "PNG",
  //             xOffset + 30,
  //             yOffset + 42,
  //             35,
  //             40
  //           );
  //           pdf.save(`id_card_${user.NAME}.pdf`);
  //         } else {
  //           console.error("Profile image not loaded for user:", user.NAME);
  //         }

  //         // Download the PDF with a specific name (e.g., "id_card_1.pdf", "id_card_2.pdf", etc.)
  //         // pdf.save(`id_card_${user.NAME}.pdf`);
  //       })
  //       .catch((error) => {
  //         console.error("Error while generating canvas:", error);
  //       });
  //   });
  // };

  const handleDownloadClick = () => {
    // Create a new PDF document
    const pdf = new jsPDF("p", "mm", "a4");

    // Function to add a user's card to the PDF
    const addUserCardToPDF = (user, index) => {
      // Add a new page for each user (except the first one)
      if (index > 0) {
        pdf.addPage();
      }

      // Select the element you want to convert to a PDF (the entire card container in this case)
      const cardContainer = document.getElementById(`card-${index}`);

      // Use html2canvas to capture the cardContainer as an image
      html2canvas(cardContainer).then((canvas) => {
        // Calculate the height of the PDF based on the captured canvas
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 100; // Width of the A4 paper in mm
        const pageHeight = (imgWidth / canvas.width) * canvas.height;

        // Center the card horizontally
        const xOffset = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;

        const yOffset = (pdf.internal.pageSize.getHeight() - pageHeight) / 2;

        // Add the captured image to the PDF
        // pdf.addImage(imgData, "PNG", xOffset, 0, imgWidth, pageHeight);
        pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, pageHeight);

        const profileImage = profileImages[index];
        if (profileImage) {
          // Adjust the position and size of the profile image as needed
          pdf.addImage(profileImage, "PNG", xOffset + 30, yOffset + 42, 35, 40);
        }

        // If this is the last user, save the PDF file
        if (index === excelData.length - 1) {
          pdf.save("id_cards.pdf");
        } else {
          // Add the next user's card to the PDF
          addUserCardToPDF(excelData[index + 1], index + 1);
        }
      });
    };

    // Start the process by adding the first user's card to the PDF
    addUserCardToPDF(excelData[0], 0);
  };

  // console.log(profileImages);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainPageNav />
      <div className="flex flex-col items-center justify-center h-screen self-center pb-10 mt-IDPAdding">
        <div className="flex items-center justify-center mt-5">
          <button
            className="bg-blue-500 text-white font-semibold font-LoginFont py-2 px-4 rounded mb-6"
            onClick={handleDownloadClick}
          >
            Download
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10 relative" id="card">
          {excelData.map((user, index) => (
            <div
              className="relative card top-24"
              id={`card-${index}`}
              key={index}
            >
              <img
                src={IDCardImage}
                alt="ID Card"
                className="w-96 h-IDCard object-cover"
                style={{ height: "600px", width: "350px" }}
              />

              <div className="absolute -mt-1 top-0 -left-3 w-full h-full flex flex-col justify-center items-center ml-3">
                <img
                  src={
                    user.Image ||
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  }
                  alt="Profile"
                  className="w-150 h-150 rounded-md"
                  style={{ height: "150px", width: "120px" }}
                />
                <p className="text-black font-medium">{user.NAME}</p>
                <p className="text-black font-medium mt-1">{user.DOB}</p>
                <p className="text-black font-medium mt-1">{user.CAN_ID}</p>
                <p className="text-black font-medium mt-1">{user.COURSE}</p>
                <p className="text-black font-medium">{user.START}</p>
                <p className="text-black font-medium">{user.END}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateIDCardPage;
