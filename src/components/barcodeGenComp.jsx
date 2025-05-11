"use client";
import React, { useRef, useState } from "react";
import Barcode from "react-barcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import { FaDownload } from "react-icons/fa";
// import "../assets/barcode.css"

const BarcodeGenComponent = () => {
  const [isbn, setIsbn] = useState("");
  const [error, setError] = useState("");
  const barcodeRef = useRef(null);

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (/[^0-9]/.test(value)) {
      setError("Please, just input the 13 ISBN digits without hyphen!");
    } else {
      setError("");
    }
    let newValue = value.replace(/[^0-9]/g, "").slice(0, 13);
    
    setIsbn(newValue);
  };

  const formatIsbn = (isbn) => {
    if (isbn.length === 13) {
      return `ISBN: ${isbn.slice(0, 3)}-${isbn.slice(3, 6)}-${isbn.slice(
        6,
        11,
      )}-${isbn.slice(11, 12)}-${isbn.slice(12)}`;
    }
    return "ISBN: " + isbn;
  };

  const downloadImage = () => {
    document.querySelector(".isbnNumbers")?.classList.remove("mt-4") // Temporary fix for PDF download;
    document.querySelector(".isbnNumbers")?.classList.add("-mt-4") // Temporary fix for PDF download;

    const scale = 3;
    const extraHeight = 20;

    if (barcodeRef.current)
      html2canvas(barcodeRef.current, {
        scale: scale,
        height: barcodeRef.current.offsetHeight + extraHeight,
        windowHeight: barcodeRef.current.offsetHeight + extraHeight,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "px", [
          canvas.width / scale,
          canvas.height / scale,
        ]);
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          canvas.width / scale,
          canvas.height / scale,
        );
        pdf.save("barcode.pdf");
      });
    
      // Reformat UI
      document.querySelector(".isbnNumbers")?.classList.remove("-mt-4") // Temporary fix for PDF download;
      document.querySelector(".isbnNumbers")?.classList.add("mt-4")
  };

  return (
    <div className="flex flex-col gap-5 py-40 justify-center items-center px-4 " id="barcode-generator">
      <h1 className="text-xl md:text-4xl text-center">Barcode Generator</h1>

      <main className="flex flex-col gap-4  bg-theme-light p-10  rounded-xl">
        <input
          value={isbn}
          onChange={handleInputChange}
          placeholder="Enter ISBN-13 code"
          maxLength={13}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className={`text-black p-2 text-2xl border border-gray-400 rounded text-center h5 ${error ? "" : ""}`}
        />
        {error && <div className="error-message text-red-600">{error}</div>}
        {isbn && isbn.length === 13 && (
          <div className=" mt-5 text-center" ref={barcodeRef}>
            <div className="font-bold text-lg mb-1">
              <span>{formatIsbn(isbn)}</span>
            </div>
            <div className="relative inline-block bg-white">
              <Barcode
                value={isbn}
                displayValue={false}
                height={100}
                width={1.8}
                margin={0}
              />
              <div className="flex text-[23px] font-semibold bg-white mt-4">
                <span style={{ marginLeft: -20 }}>{isbn[0]}</span>
                <span style={{ marginLeft: "10%" }}>{isbn.slice(1, 7)}</span>
                <span style={{ marginLeft: "15%" }}>{isbn.slice(7)}</span>
              </div>
              <div className="">
                {[0, 2, 49, 51, 98, 100].map((left, index) => (
                  <div className="absolute top-0 bottom-1 border-l-2 border-black"
                    key={index}
                    style={{
                      left: `${left}%`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className=" mt-5 flex flex-col items-center justify-center">
          <button
            onClick={downloadImage}
            className="bg-[#adadad] rounded-md py-2 px-4 flex items-center justify-center"
          >
            <FaDownload className="mr-2" /> Download PDF
          </button>
        </div>
      </main>
    </div>
  );
};

export default BarcodeGenComponent;