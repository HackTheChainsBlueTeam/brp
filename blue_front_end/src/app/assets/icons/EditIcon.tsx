import * as React from "react"

function EditIcon({className=""}:any) {
  return ( 
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.905 2.525a1.667 1.667 0 00-2.357 0L3.953 11.12a1.667 1.667 0 00-.488 1.178v4.36c0 .466.377.842.842.842h13.328a.833.833 0 000-1.667h-6.61l7.415-7.415c.651-.651.651-1.707 0-2.357l-3.535-3.536zM8.668 15.833l8.594-8.594-3.536-3.535-8.594 8.594v3.536h3.536z"
        fill="#08001C"
      />
    </svg>
  );
}

export default EditIcon;