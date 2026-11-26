"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface DiaryEntry {
  label: string;
  file: string;
}

// Replace YOUR_STORE_ID with the subdomain ID of your 'myblob' store
// Example: "https://vercel-storage.com"
const BLOB_BASE_URL =
  process.env.NEXT_PUBLIC_BLOB_BASE_URL ||
  "https://hkswalswyfqtjjmg.public.blob.vercel-storage.com";

const DIARY_ENTRIES: DiaryEntry[] = [
  { label: "July 1944", file: "Jul44.pdf" },
  { label: "August 1944", file: "Aug44.pdf" },
  { label: "September 1944", file: "Sep44.pdf" },
  { label: "October 1944", file: "Oct44.pdf" },
  { label: "November 1944", file: "Nov44.pdf" },
  { label: "December 1944", file: "Dec44.pdf" },
  { label: "January 1945", file: "Jan45.pdf" },
  { label: "February 1945", file: "Feb45.pdf" },
  { label: "March 1945", file: "Mar45.pdf" },
  { label: "April 1945", file: "Apr45.pdf" },
  { label: "May 1945", file: "May45.pdf" },
  { label: "June 1945", file: "Jun45.pdf" },
];

export default function WarDiaryPage() {
  const router = useRouter();

  const openPdf = (file: string) => {
    window.open(`${BLOB_BASE_URL}/${file}`, "_blank", "noopener,noreferrer");
  };

  const handleClose = () => {
    if (window.opener) {
      window.close();
    } else if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div style={{ position: "relative", padding: "24px 0" }}>
       <style>{`
        .close-btn {
          position: fixed;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #ccc;
          background-color: #f4f4f4;
          color: #333;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, color 0.2s;
          z-index: 1000;
        }

        .close-btn:hover {
          background-color: #e2e2e2;
          color: #000;
        }

        .pdf-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
          gap: 10px;
          max-width: 900px;
          margin: 16px auto;
          padding: 0 16px;
        }

        .pdf-grid button {
          width: 100%;
          min-height: 48px;
          padding: 10px 12px;
          font-size: 14px;
          cursor: pointer;
          background-color: #f4f4f4;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .pdf-grid button:hover {
          background-color: #e2e2e2;
        }

        .header-intro {
          text-align: center;
          padding: 0 48px;
        }

        .source {
          max-width: 900px;
          margin: 24px auto 0;
          padding: 0 16px;
          text-align: center;
          font-size: 14px;
          line-height: 1.5;
        }

        .source p {
          margin: 4px 0;
        }
      `}</style>

      <button
        type="button"
        className="close-btn"
        onClick={handleClose}
        aria-label="Close page"
        title="Close"
      >
        &times;
      </button>

      <div className="header-intro">
        <h2>War Diary of the 18th Canadian Field Ambulance</h2>
        <h3>
          Edmond served with the 18th Canadian Field Ambulance from 3rd December 1943 to June 1st 1945
        </h3>
        <p>
          War Diary entries are only shown for the time the unit was deployed to France, Belguim, Holland and Germany</p>
		  <p>Edmond is not mentioned anywhere but he would have been involved in all activities
        </p>
      </div>

      <div className="pdf-grid">
        {DIARY_ENTRIES.map((entry) => (
          <button
            key={entry.file}
            type="button"
            onClick={() => openPdf(entry.file)}
          >
            {entry.label}
          </button>
        ))}
      </div>
      <div className="source">
        <p>Source of all documents is Library and Archives Canada</p>
        <p>TITLE : 18th Field Ambulance, Royal Canadian Army Medical Corps</p>
        <p>REFERENCE NUMBERS:</p>
        <p>RG24-C-3, Volume number: 15885, File number: 200, 1944/07 to 1944/11 SUMMARIES</p>
        <p>RG24-C-3, Volume number: 15886, File number: 200, 1944/12 to 1945/03 SUMMARIES</p>
        <p>RG24-C-3, Volume number: 15887, File number: 200, 1945/04 to 1945/06 SUMMARIES</p>
      </div>
    </div>
  );
}
