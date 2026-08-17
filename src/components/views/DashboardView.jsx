import React from 'react';
import LinkedTeachersCard from '../LinkedTeachersCard';
import UpcomingEventsCard from '../UpcomingEventsCard';
import ScheduleCard from '../ScheduleCard';
import ProjectsCard from '../ProjectsCard';
import StatsColumn from '../StatsColumn';

export default function DashboardView({
  teachers = [],
  events = [],
  scheduleItems = [],
  projects = [],
  statsData,
  selectedDay = 18,
  onSelectDay,
  onTeacherClick,
  onEventClick,
  onProjectClick,
  onStatClick,
  onSeeMoreTeachers,
  onSeeMoreEvents,
  onSeeMoreStats,
  onAddScheduleItem,
  onOpenFullSchedule,
  searchQuery = ''
}) {
  // Filter items if user typed into search bar
  const query = searchQuery.toLowerCase().trim();

  const filteredTeachers = query 
    ? teachers.filter(t => t.name.toLowerCase().includes(query) || t.subject.toLowerCase().includes(query) || t.role.toLowerCase().includes(query))
    : teachers;

  const filteredEvents = query
    ? events.filter(e => e.title.toLowerCase().includes(query) || (e.description && e.description.toLowerCase().includes(query)))
    : events;

  const filteredSchedule = query
    ? scheduleItems.filter(s => s.title.toLowerCase().includes(query) || s.instructor.toLowerCase().includes(query))
    : scheduleItems;

  const filteredProjects = query
    ? projects.filter(p => p.title.toLowerCase().includes(query) || p.code.toLowerCase().includes(query))
    : projects;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
      {/* Left 8/12 / 9/12 Main Content Grid */}
      <div className="xl:col-span-8 2xl:col-span-9 flex flex-col space-y-5">
        {/* Row 1: Linked Teachers + Upcoming Events side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <LinkedTeachersCard
            teachers={filteredTeachers}
            onTeacherClick={onTeacherClick}
            onSeeMore={onSeeMoreTeachers}
          />
          <UpcomingEventsCard
            events={filteredEvents}
            onEventClick={onEventClick}
            onSeeMore={onSeeMoreEvents}
          />
        </div>

        {/* Row 2: My Schedule (Calendar + Agenda items) */}
        <ScheduleCard
          scheduleItems={filteredSchedule}
          selectedDay={selectedDay}
          onSelectDay={onSelectDay}
          onAddScheduleItem={onAddScheduleItem}
          onOpenFullSchedule={onOpenFullSchedule}
        />

        {/* Row 3: My Projects (Homework 15 & Homework 16) */}
        <ProjectsCard
          projects={filteredProjects}
          onProjectClick={onProjectClick}
          onSeeMore={() => {}}
        />
      </div>

      {/* Right Column: 3 Stacked Stat Cards with Circular Rings */}
      <div className="xl:col-span-4 2xl:col-span-3">
        <StatsColumn
          statsData={statsData}
          onStatClick={onStatClick}
          onSeeMore={onSeeMoreStats}
        />
      </div>
    </div>
  );
}
