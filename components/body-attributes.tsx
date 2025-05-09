"use client";

import { useEffect } from "react";

export default function BodyAttributes() {
  useEffect(() => {
    console.log("BodyAttributes mounted (Client)"); // Add this line
    document.body.setAttribute("data-client-time", Date.now().toString());
  }, []);

  return null;
}
