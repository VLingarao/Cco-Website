import { useEffect, useState } from "react";
import "./Stats.css";

const Stats = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const targetValues = {
      clients: 2000,
      projects: 4000,
      teamMembers: 25,
      years: 8,
    };

    const incrementStats = (stateUpdater, target) => {
      let count = 0;
      const increment = Math.ceil(target / 2000); 
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          stateUpdater(target);
          clearInterval(interval);
        } else {
          stateUpdater(count);
        }
      }, 30); 
    };

    incrementStats(setClients, targetValues.clients);
    incrementStats(setProjects, targetValues.projects);
    incrementStats(setTeamMembers, targetValues.teamMembers);
    incrementStats(setYears, targetValues.years);
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-header">
        <h1>Lets grow together!</h1>
        <p>
        Our collaboration with aspirants spans throughout the world with hundreds 
        of universities and courses in contention. Success runs in our portfolio. 
        Our assistance has proved wonderful for realizing many dreams!
        </p>
      </div>
      <div className="stats">
        <div className="stat-item">
          <h2>{clients}K+</h2>
          <p>Global Happy Students</p>
        </div>
        <div className="stat-item">
          <h2>{projects}K+</h2>
          <p>International Colleges</p>
        </div>
        <div className="stat-item">
          <h2>{teamMembers}+</h2>
          <p>Team Members</p>
        </div>
        <div className="stat-item">
          <h2>{years}+</h2>
          <p>Glorious Years</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
