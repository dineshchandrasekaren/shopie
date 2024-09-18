import React from "react";

interface IconProps {
  className?: string;
  height?: string | number;
  width?: string | number;
}
export const Exit: React.FC<IconProps> = ({
  className = "",
  height = "8",
  width = "8",
}) => (
  <svg
    stroke="currentColor"
    className={`${className} h-${height} w-${width} `}
    fill="none"
    stroke-width="0"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
      fill="currentColor"
    ></path>
  </svg>
);
export const Uploader: React.FC<IconProps> = ({
  className = "",
  height = "8",
  width = "8",
}) => (
  <svg
    className={`${className} h-${height} w-${width} `}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
    ></path>
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="m320 255.79-64-64-64 64m64 192.42V207.79"
    ></path>
  </svg>
);

export const Sun: React.FC<IconProps> = ({
  className = "",
  height = "8",
  width = "8",
}) => (
  <svg
    className={`${className} h-${height} w-${width} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
  >
    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
);

export const Moon: React.FC<IconProps> = ({
  className = "",
  height = "8",
  width = "8",
}) => (
  <svg
    className={`${className} h-${height} w-${width} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
  >
    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
);

export const Info: React.FC<IconProps> = ({
  className = "",
  height = "6",
  width = "6",
}) => (
  <svg
    className={`shrink-0 stroke-current h-${height} w-${width} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

export const Alert: React.FC<IconProps> = ({
  className = "",
  height = "6",
  width = "6",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${height} w-${width} shrink-0 stroke-current ${className}  `}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
