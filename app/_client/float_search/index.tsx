'use client'
import { useEffect } from "react";

export default function ImportBsJS() {
  useEffect(() => {
    require("./script");
  }, []);
  return null;
}
