import React from "react";
import { Link } from "react-router-dom";
import { GREEN } from "../lib/theme.js";

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-5 py-24 text-center">
      <p className="text-sm font-bold" style={{ color: GREEN }}>404</p>
      <h1 className="text-3xl font-extrabold mt-2" style={{ color: GREEN }}>Page not found</h1>
      <p className="text-[#5B6660] mt-3">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-2.5 rounded-md font-semibold text-sm text-white"
        style={{ backgroundColor: GREEN }}
      >
        Back to Home
      </Link>
    </section>
  );
}
