import React from 'react';

const PainPoints = () => {
  const painpoints = [
    {
      title: 'The Resource Crunch',
      point:
        'Marketing teams face limited budgets, staff shortages, and an 85% skills gap in AI integration.',
      solution:
        'AI-driven automation acts as a force multiplier, enabling lean teams to achieve unprecedented scale and efficiency while providing immediate access to expert talent.',
    },
    {
      title: 'Visibility Crisis',
      point:
        'Organic traffic drops of 25-40% as AI engines answer queries directly, bypassing websites entirely.',
      solution:
        'AEO and GEO strategies shift focus from ranking for clicks to being cited as authorities by AI engines, securing visibility in the new paradigm.',
    },
    {
      title: 'Data Overwhelm',
      point:
        'Companies analyze less than 40% of collected data, struggling to prove marketing ROI to executives.',
      solution:
        'AI-powered analytics transform raw data into strategic intelligence, with clear dashboards linking tactics to business KPIs.',
    },
    {
      title: 'Engagement Gap',
      point:
        'Customer acquisition costs 5-25x more than retention, yet marketing often feels impersonal and transactional.',
      solution:
        'Next-best-action AI decisioning enables personalization at scale, creating tailored experiences that build long-term loyalty.',
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-4 flex-col max-w-5xl">
        <h5 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
          Addressing Critical Business Pain Points
        </h5>
        <p className="text-lg md:text-xl text-neutral-700 max-w-4xl text-center leading-relaxed">
          Adam Silva Consulting provides direct, tactical solutions to the most
          pressing challenges businesses face in 2025
        </p>
      </div>

      {/* Pain Points Cards */}
      <div className="flex flex-wrap items-stretch justify-center mt-12 gap-8 max-w-7xl mx-auto">
        {painpoints.map((item, index) => (
          <div
            key={index}
            // Responsive widths: Full on mobile, half on tablet, fixed height removed
            className="w-full sm:w-[45%] lg:w-[45%] flex flex-col p-6 border border-neutral-300 rounded-xl shadow-xl bg-white transition hover:shadow-2xl"
          >
            <h6 className="text-2xl font-bold mb-4 text-neutral-800">
              {item.title}
            </h6>
            <div className="mb-4">
              <strong className="text-lg font-bold text-neutral-600">Pain Point: </strong>
              <span className="text-neutral-700 text-lg">{item.point}</span>
            </div>
            <div className="mt-auto pt-2 ">
              <strong className="text-lg font-bold text-neutral-700">ASC Solution:</strong>
              <span className="text-neutral-600 text-lg"> {item.solution}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Transformation Metrics CTA */}
      <div className="mt-16 w-full max-w-7xl mx-auto rounded-2xl bg-[#0F6CBB] p-10 flex flex-col items-center justify-center gap-10 shadow-2xl">
        <h5 className="text-3xl  font-bold text-white text-center">
          Transformation Metrics
        </h5>
        <div className="flex flex-wrap items-stretch justify-center w-full gap-8">
          {[
            { value: '80%', label: 'Increase in Marketing Efficiency' },
            { value: '40%-60%', label: 'Reduction in Customer Acquisition Costs' },
            { value: '30%', label: 'Improvement in Data Utilization' },
            { value: '50%', label: 'Boost in Customer Retention Rates' },
          ].map((metric, index) => (
            <div
              key={index}
              // Responsive widths for the metrics: half on mobile/tablet, quarter on large screens
              className="flex w-full sm:w-[45%] lg:w-[22%] flex-col items-center  justify-start  p-4 "
            >
              <span className="text-3xl font-bold text-white  ">
                {metric.value}
              </span>
              <span className="text-sm  text-blue-300 text-center mt-2 ">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;