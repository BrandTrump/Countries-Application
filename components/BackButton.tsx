"use client";
import { useRouter } from "next/navigation";

function BackButton() {
  const route = useRouter();
  return (
    <button
      onClick={() => route.back()}
      className="py-2 px-8 shadow-md rounded-md border my-20 flex gap-2 items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      Back
    </button>
  );
}

export default BackButton;
