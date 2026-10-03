import React from 'react';
import { Clapperboard, Eye, MessageSquareQuote, Palette, Ticket, Truck } from 'lucide-react';
import { PROCESS, VALUE_CHAIN } from '../data';

const CHAIN_ICONS = [Clapperboard, Palette, Truck, Eye, MessageSquareQuote, Ticket];

export const WhyCinema: React.FC = () => (
  <section id="why-cinema" className="section">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">Why cinema</span>
        <h2 className="section-title">
          Recognition for the <em>whole theatrical value chain</em>
        </h2>
        <p className="section-desc">
          A film's run in cinemas depends on far more than what appears on screen. The NCAs recognise
          everyone who gets Nigerian stories in front of audiences in cinemas.
        </p>
      </div>

      <div className="grid-3">
        {VALUE_CHAIN.map((item, i) => {
          const Icon = CHAIN_ICONS[i];
          return (
            <div className="card chain-card" key={item.title}>
              <span className="icon"><Icon size={22} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const Process: React.FC = () => (
  <section className="section section-alt">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">How it works</span>
        <h2 className="section-title">From submission to <em>sealed envelope</em></h2>
      </div>
      <div className="grid-3">
        {PROCESS.map((item) => (
          <div className="card process-card" key={item.step}>
            <span className="bar" />
            <span className="step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
