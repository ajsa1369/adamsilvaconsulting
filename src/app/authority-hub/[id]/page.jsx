'use client';
import { pillars } from '@/lib/AuthorityPillars';
import Hero from './components/Hero';
import React, { useEffect, useState } from 'react';
import TableOfContent from './components/TableOfContent';
import Introduction from './components/Introduction';
import PillarComponent from './components/PillarComponent';
import CoreStrategies from './components/CoreStrategies';
import Guidelines from './components/Guidelines';
import AuthorityCta from './components/AuthorityCta';

const Page = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if running client-side before accessing window
    if (typeof window === 'undefined') return;

    // 1. Extract the ID from the path using standard browser API
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    const currentId = pathSegments[pathSegments.length - 1].split('?')[0]; // Extract ID

    // 2. Find the matching pillar data object
    const matchingPillar = pillars.find((pillar) => pillar.id === currentId);
    console.log(matchingPillar.id);

    // 3. Update state with the Hero data if found
    if (matchingPillar) {
      setData(matchingPillar);
    } else {
      console.error(`Pillar not found for ID: ${currentId}`);
      // Fallback logic for isolated environments or missing routes
      const fallbackPillar = pillars[0];
      if (fallbackPillar) {
        setHeroData(fallbackPillar);
      } else {
        setHeroData(null);
      }
    }

    setIsLoading(false);
  }, []); // Run once on client mount

  if (isLoading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800">Loading Page...</h1>
      </main>
    );
  }

  return (
    <main>
      <Hero heroData={data.Hero} color={data.TableOfContent.color} />
      {data.TableOfContent.content && (
        <TableOfContent
          content={data.TableOfContent.content}
          color={data.TableOfContent.color}
        />
      )}
      {data.Introduction && (
        <Introduction
          introduction={data.Introduction}
          color={data.TableOfContent.color}
        />
      )}
      {data.Pillars && <PillarComponent Pillars={data.Pillars} />}
  { data.Strategies  && <CoreStrategies
        Strategies={data.Strategies}
        color={data.TableOfContent.color}
      />}
      {data.Guidelines && (
        <Guidelines
          guideline={data.Guidelines}
          color={data.TableOfContent.color}
        />
      )}
      <AuthorityCta
        cta={data.CTA}
        color={data.TableOfContent.colro}
        linearGradient={data.Hero.linearGradient}
      />
    </main>
  );
};

export default Page;
