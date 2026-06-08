import React from "react";

const comparisonFeatures = [
  { name: "Keyword Research", starter: true, pro: true, advanced: true, enterprise: true },
  { name: "On-Page SEO", starter: true, pro: true, advanced: true, enterprise: true },
  { name: "Technical SEO", starter: false, pro: true, advanced: true, enterprise: true },
  { name: "Contact Strategy", starter: false, pro: true, advanced: true, enterprise: true },
  { name: "Link Building", starter: false, pro: false, advanced: true, enterprise: true },
  { name: "Local SEO", starter: false, pro: true, advanced: true, enterprise: true },
  { name: "Monthly Reporting", starter: true, pro: true, advanced: true, enterprise: true },
  { name: "Dedicated SEO Manager", starter: false, pro: false, advanced: true, enterprise: true },
  { name: "Strategy Calls", starter: false, pro: false, advanced: "Quarterly", enterprise: "Weekly" },
  { name: "Support", starter: "Support", pro: "Support", advanced: "Support", enterprise: "Support" },
];

const renderValue = (value: boolean | string) => {
  if (value === true) {
    return (
      <svg className="w-[18px] h-[18px] mx-auto text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-neutral-800 font-bold text-lg">—</span>;
  }
  return <span className="text-neutral-700 text-[13px]">{value}</span>;
};

export default function PricingComparison() {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-4 mb-16 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
      <h2 className="text-[28px] font-dm-sans font-medium mb-8 text-neutral-900">
        Pricing Comparison
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#EFEFEF] text-[14px] font-dm-sans text-neutral-800">
              <th className="py-4 px-6 font-semibold border-x border-neutral-300 w-1/4">
                Features
              </th>
              <th className="py-4 px-6 font-semibold text-center w-[18%]">
                Starter
              </th>
              <th className="py-4 px-6 font-semibold bg-Black text-White border-x border-Black text-center w-[21%]">
                Pro <span className="text-[10px] font-normal text-neutral-400 ml-1">(Most Popular)</span>
              </th>
              <th className="py-4 px-6 font-semibold border-r border-neutral-300 text-center w-[18%]">
                Advanced
              </th>
              <th className="py-4 px-6 font-semibold border-r border-neutral-300 text-center w-[18%]">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((feature, idx) => {
              const isLast = idx === comparisonFeatures.length - 1;
              const borderBottomClass = isLast ? "border-b border-neutral-300" : "";
              return (
                <tr key={idx} className="text-[14px] font-dm-sans text-neutral-700 bg-transparent">
                  <td className={`py-4 px-6 border-x border-neutral-300 ${borderBottomClass}`}>
                    {feature.name}
                  </td>
                  <td className={`py-4 px-6 text-center ${borderBottomClass}`}>
                    {renderValue(feature.starter)}
                  </td>
                  <td className={`py-4 px-6 text-center border-x border-Black ${isLast ? "border-b border-Black" : ""}`}>
                    {renderValue(feature.pro)}
                  </td>
                  <td className={`py-4 px-6 text-center border-r border-neutral-300 ${borderBottomClass}`}>
                    {renderValue(feature.advanced)}
                  </td>
                  <td className={`py-4 px-6 text-center border-r border-neutral-300 ${borderBottomClass}`}>
                    {renderValue(feature.enterprise)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
