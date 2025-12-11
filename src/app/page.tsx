"use client";

import { useState, useEffect } from "react";
import  Link  from "next/link";
import NotFound from "./not-found";

export default function Home() {
  return (
   <>
   <h1>A handsome slider coming on homepage</h1>
   <Link href="/not-found">Go to error page &gt; </Link>
   </>
  );
}