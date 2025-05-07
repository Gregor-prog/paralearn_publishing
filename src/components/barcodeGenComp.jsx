"use client";
import React, { useRef, useState } from "react";

import Barcode from "react-barcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaDownload } from "react-icons/fa";

const BarcodeGenComponent = () => {
  const [isbn, setIsbn] = useState("");
  const [error, setError] = useState("");
  const barcodeRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      setError("Please, just input the 13 ISBN digits without hyphen!");
    } else {
      setError("");
    }
    const newValue = value.replace(/[^0-9]/g, "").slice(0, 13);
    setIsbn(newValue);
  };

  const formatIsbn = (isbn) => {
    if (isbn.length === 13) {
      return `ISBN: ${isbn.slice(0, 3)}-${isbn.slice(3, 6)}-${isbn.slice(
        6,
        11
      )}-${isbn.slice(11, 12)}-${isbn.slice(12)}`;
    }
    return "ISBN: " + isbn;
  };

  const downloadImage = () => {
    document.querySelector(".isbnNumbers")?.classList.remove("mt-4"); // Temporary fix for PDF download;
    document.querySelector(".isbnNumbers")?.classList.add("-mt-4"); // Temporary fix for PDF download;

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
          canvas.height / scale
        );
        pdf.save("barcode.pdf");
      });

    document.querySelector(".isbnNumbers")?.classList.remove("-mt-4"); // Temporary fix for PDF download;
    document.querySelector(".isbnNumbers")?.classList.add("mt-4");
  };

  return (
    <div className="pt-48 mb-12">
      <div
        className="max-w-2xl mx-auto px-6 bg-white rounded-lg py-16 shadow-md"
        id="barcode-generator"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ISBN Barcode Generator
        </h1>

        <main className="flex flex-col items-center space-y-6">
          <input
            value={isbn}
            onChange={handleInputChange}
            placeholder="Enter ISBN-13 code"
            maxLength={13}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className={`w-full max-w-md px-4 py-2 text-center text-black text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {isbn && isbn.length === 13 && (
            <div
              className="w-full max-w-md p-6 border border-gray-200 rounded-md bg-gray-50"
              ref={barcodeRef}
            >
              <div className="text-center text-gray-700 mb-4">
                <span>{formatIsbn(isbn)}</span>
              </div>
              <div className="flex flex-col items-center relative">
                <Barcode
                  value={isbn}
                  displayValue={false}
                  height={100}
                  width={1.8}
                  margin={0}
                />
                <div className="isbnNumbers mt-4 w-full flex justify-between text-sm">
                  <span className="ml-0">{isbn[0]}</span>
                  <span className="ml-0">{isbn.slice(1, 7)}</span>
                  <span className="ml-0">{isbn.slice(7)}</span>
                </div>
                <div className="w-full h-6 relative mt-2">
                  {[0, 2, 49, 51, 98, 100].map((left, index) => (
                    <div
                      key={index}
                      className="absolute w-0.5 h-full bg-black"
                      style={{
                        left: `${left}%`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="mt-4">
            <button
              onClick={downloadImage}
              disabled={isbn.length !== 13}
              className={`bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 flex items-center justify-center transition-colors ${
                isbn.length !== 13 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaDownload className="mr-2" /> Download PDF
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BarcodeGenComponent;