"use client"
import React, {useState, useEffect } from 'react'
import Link from 'next/link'
import Loader from "@/app/components/Loader";

function policies() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

    return (
        <>
    {loading ? (
    <Loader /> 
  ) : (
    <div className="grid place-content-center place-items-center pb-30 h-screen top_bg_gradient">
          <h3 className="font-medium pb-10 p-5 pt-0 link"><Link href="/resources/policies/privacy">Privacy</Link></h3>
          <h3 className="font-medium pb-10 p-5 pt-0 link"><Link href="/resources/policies/terms">Terms & Conditions</Link></h3>
          <h3 className="font-medium pb-10 p-5 pt-0 link"><Link href="/resources/policies/disclaimer">Disclaimer</Link></h3>
        </div>
        )}
        </>
    )
}

export default policies
