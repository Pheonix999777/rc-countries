import React from "react";
import "./form.css";

export function Form() {
  return (
    <div className="content-div">
      <form>
        <div className="input-div">
          <input className="inp" type="text" placeholder="Search for a country…" />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                fill="#848484"
              />
            </svg>
          </span>
        </div>
      </form>

      <div className="dropdown">
        <button>
          Filter by Region
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z" fill="black" />
          </svg>
        </button>
        <ul className="content">
          <li><a href="#">Africa</a></li>
          <li><a href="#">America</a></li>
          <li><a href="#">Asia</a></li>
          <li><a href="#">Europe</a></li>
          <li><a href="#">Oceania</a></li>
        </ul>
      </div>
    </div>
  );
}
