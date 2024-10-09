import CoverParticles from '@/components/CoverParticles';
import React from 'react';
import TransitionPage from '../components/TransitionPage';

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] bg-no-repeat bg-gradient-cover">
      <CoverParticles />
      </div>
    </main>
  );
}