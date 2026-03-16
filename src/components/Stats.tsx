import { Users, Zap, Award } from 'lucide-react';
import Counter from './Counter';

export default function Stats() {
  const stats = [
    { icon: <Users size={32} />, value: 2000, unit: '+', label: 'Active Customers' },
    { icon: <Zap size={32} />, value: 1, unit: 'MW +', label: 'Installed Capacity' },
    { icon: <Award size={32} />, value: 10, unit: '', label: 'Years of Experience' },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-text-wrapper">
                <h3 className="stat-value"><Counter target={stat.value}/> {stat.unit}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}