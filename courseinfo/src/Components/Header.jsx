import React from "react";

export default function Header({ course }) {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
}
