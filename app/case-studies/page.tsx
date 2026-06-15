"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesHeader from "@/components/CaseStudiesHeader";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import { ALL_CASE_STUDIES } from "@/lib/case-studies";

export default function CaseStudiesPage() {
  const [selectedExpertise, setSelectedExpertise] = useState("All Expertise");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const filteredCaseStudies = useMemo(() => {
    return ALL_CASE_STUDIES.filter((study) => {
      const matchExpertise =
        selectedExpertise === "All Expertise" || study.expertise === selectedExpertise;
      const matchIndustry =
        selectedIndustry === "All Industries" || study.industry === selectedIndustry;
      
      return matchExpertise && matchIndustry;
    });
  }, [selectedExpertise, selectedIndustry]);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F9] text-Black flex flex-col overflow-x-hidden">
      
      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 py-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Main Content Section ───────────────────────────── */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 pb-[40px] flex flex-col">
        
        {/* Header & Filters */}
        <CaseStudiesHeader 
          selectedExpertise={selectedExpertise}
          setSelectedExpertise={setSelectedExpertise}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
        />

        {/* Grid */}
        <CaseStudiesGrid caseStudies={filteredCaseStudies} />
        
      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
