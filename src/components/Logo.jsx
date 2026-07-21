'use client';

import React from 'react';

export default function Logo({ className = '', light = false }) {
  const turboColor = light ? '#FFFFFF' : '#424547';
  const techColor = '#E31E24';
  const nodeGrey = light ? '#CBD5E1' : '#6C7072';

  return (
    <div className={`inline-flex items-center select-none cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 320 95"
        className="h-10 sm:h-12 w-auto transition-transform duration-300 hover:scale-[1.02]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* TURBO Bold Brand Text */}
        <text
          x="5"
          y="38"
          fill={turboColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Outfit', 'Montserrat', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="36"
          letterSpacing="1"
        >
          TURBO
        </text>

        {/* TECH Red Brand Text */}
        <text
          x="5"
          y="78"
          fill={techColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Outfit', 'Montserrat', 'Arial', sans-serif"
          fontWeight="700"
          fontSize="36"
          letterSpacing="1"
        >
          TECH
        </text>

        {/* Circuit Board Network Traces extending from TECH */}
        <g fill="none">
          {/* 1. Top Angled Trace -> Large Grey Node */}
          <path
            d="M 124 55 L 140 55 L 158 36 L 178 36"
            stroke={techColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="178" cy="36" r="4.5" fill={nodeGrey} />

          {/* 2. Upper Middle Trace -> Hollow Red Node */}
          <path
            d="M 124 64 L 138 64 L 146 51 L 162 51"
            stroke={techColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="162" cy="51" r="3" stroke={techColor} strokeWidth="1.8" fill={light ? "#0B0F17" : "#FFFFFF"} />

          {/* 3. Longest Center Trace -> Large Grey Node */}
          <path
            d="M 124 71 L 180 71 L 190 59 L 210 59"
            stroke={techColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="210" cy="59" r="5" fill={nodeGrey} />

          {/* 4. Lower Middle Trace with Wrench Silhouette -> Small Red Node */}
          <path
            d="M 124 77 L 168 77 L 174 71 L 184 71"
            stroke={techColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Mini Wrench silhouette outline on path */}
          <path
            d="M 185 71 M 186 69.5 C 187.5 68 189.5 68 191 69.5 L 193 71 C 194.5 72.5 194.5 74.5 193 76 L 191 74.5"
            stroke={techColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="202" cy="71" r="2.8" fill={techColor} />

          {/* 5. Bottom Angled Trace -> Small Grey Node */}
          <path
            d="M 124 82 L 136 82 L 148 76 L 200 76"
            stroke={techColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="200" cy="76" r="2.5" fill={nodeGrey} />
        </g>
      </svg>
    </div>
  );
}
