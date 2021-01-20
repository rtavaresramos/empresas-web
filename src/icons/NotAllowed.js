import React from "react";

export default function ShowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill="var(--danger)"
      />
      <line x1="12.5" y1="5" x2="12.5" y2="16" stroke="var(--danger)" />
      <line x1="11.5" y1="5" x2="11.5" y2="16" stroke="var(--danger)" />
      <rect x="11" y="17" width="2" height="2" fill="var(--danger)" />
    </svg>
  );
}
