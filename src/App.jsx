import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardView from './components/views/DashboardView';
import MyClassesView from './components/views/MyClassesView';
import MyGradesView from './components/views/MyGradesView';
import FullScheduleView from './components/views/FullScheduleView';
import MessagesView from './components/views/MessagesView';
import SettingsView from './components/views/SettingsView';

import ChatModal from './components/modals/ChatModal';
import EventModal from './components/modals/EventModal';
import ProjectModal from './components/modals/ProjectModal';
import StatsDetailModal from './components/modals/StatsDetailModal';
import NotificationDropdown from './components/modals/NotificationDropdown';
import NewLessonModal from './components/modals/NewLessonModal';

import {
  studentProfile as initialProfile,
  linkedTeachers as initialTeachers,
  upcomingEvents as initialEvents,
  scheduleAgenda as initialSchedule,
  myProjects as initialProjects,
  statCardsData as initialStats,
  sampleChatMessages as initialChatMessages,
  myClassesList as initialClasses,
  notificationsList as initialNotifications
} from './data/mockData';

export default function App() {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Core Data States
  const [profile, setProfile] = useState(initialProfile);
  const [teachers, setTeachers] = useState(initialTeachers);
  const [events, setEvents] = useState(initialEvents);
  const [scheduleItems, setScheduleItems] = useState(initialSchedule);
  const [projects, setProjects] = useState(initialProjects);
  const [statsData, setStatsData] = useState(initialStats);
  const [classes, setClasses] = useState(initialClasses);
  const [chatMessages, setChatMessages] = useState(initialChatMessages);
  const [notifications, setNotifications] = useState(initialNotifications);

  // Interactivity States
  const [selectedDay, setSelectedDay] = useState(18);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [activeChatTeacher, setActiveChatTeacher] = useState(null);
  const [activeEventModal, setActiveEventModal] = useState(null);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeStatModal, setActiveStatModal] = useState(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isNewLessonOpen, setIsNewLessonOpen] = useState(false);

  // Unread notifications count
  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  // Handlers
  const handleSendMessage = (teacherId, text) => {
    const newMsg = {
      id: Date.now(),
      sender: profile.fullName,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text,
      isMe: true
    };
    setChatMessages(prev => ({
      ...prev,
      [teacherId]: [...(prev[teacherId] || []), newMsg]
    }));
  };

  const handleToggleRsvp = (eventId) => {
    setEvents(prev => prev.map(e => {
      if (e.id === eventId) {
        return { ...e, registered: !e.registered };
      }
      return e;
    }));
    if (activeEventModal && activeEventModal.id === eventId) {
      setActiveEventModal(prev => ({ ...prev, registered: !prev.registered }));
    }
  };

  const handleAddLesson = (newLesson) => {
    setScheduleItems(prev => [...prev, newLesson]);
    setSelectedDay(newLesson.day);
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleUpdateProfile = (updatedData) => {
    setProfile(prev => ({
      ...prev,
      name: updatedData.name,
      lastName: updatedData.lastName,
      fullName: `${updatedData.name} ${updatedData.lastName}`,
      email: updatedData.email,
      studentId: updatedData.studentId
    }));
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of Smartech Dashboard?")) {
      alert("You have been safely logged out.");
    }
  };

  return (
    <main className="min-h-screen bg-[#c9b8cf] p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans antialiased text-[#4a3847]">
      {/* Main Dashboard Large Container Card with Rounded Corners & Soft Ambient Shadow */}
      <div className="w-full max-w-[1440px] bg-[#f5ede6] rounded-3xl lg:rounded-[2.5rem] dash-container-shadow border border-[#ded0db]/80 flex overflow-hidden min-h-[780px]">
        {/* Fixed Left Sidebar on #ece3e8 background */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          profile={profile}
          unreadCount={teachers.reduce((acc, t) => acc + (t.unread || 0), 0)}
          onLogoutClick={handleLogout}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[92vh]">
          {/* Top Bar with greeting, search pill, notification bell */}
          <Topbar
            studentName={profile.name.toUpperCase()}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onOpenNotifications={() => setIsNotificationOpen(true)}
            unreadNotifications={unreadNotificationsCount}
            onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
            onOpenProfileModal={() => setActiveTab('settings')}
          />

          {/* Dynamic View Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <DashboardView
                teachers={teachers}
                events={events}
                scheduleItems={scheduleItems}
                projects={projects}
                statsData={statsData}
                selectedDay={selectedDay}
                onSelectDay={setSelectedDay}
                onTeacherClick={(t) => setActiveChatTeacher(t)}
                onEventClick={(e) => setActiveEventModal(e)}
                onProjectClick={(p) => setActiveProjectModal(p)}
                onStatClick={(s) => setActiveStatModal(s)}
                onSeeMoreTeachers={() => setActiveTab('messages')}
                onSeeMoreEvents={() => setActiveTab('schedule')}
                onSeeMoreStats={() => setActiveStatModal(statsData.rating)}
                onAddScheduleItem={() => setIsNewLessonOpen(true)}
                onOpenFullSchedule={() => setActiveTab('schedule')}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'classes' && (
              <MyClassesView
                classes={classes}
                onTeacherClick={(t) => setActiveChatTeacher(t)}
              />
            )}

            {activeTab === 'grades' && (
              <MyGradesView
                profile={profile}
                statsData={statsData}
                classes={classes}
              />
            )}

            {activeTab === 'schedule' && (
              <FullScheduleView
                scheduleItems={scheduleItems}
                onAddLesson={() => setIsNewLessonOpen(true)}
                onSelectDay={setSelectedDay}
              />
            )}

            {activeTab === 'messages' && (
              <MessagesView
                teachers={teachers}
                chatMessages={chatMessages}
                onSendMessage={handleSendMessage}
              />
            )}

            {activeTab === 'settings' && (
              <SettingsView
                profile={profile}
                onUpdateProfile={handleUpdateProfile}
              />
            )}
          </div>
        </div>
      </div>

      {/* Global Interactive Modals */}
      {activeChatTeacher && (
        <ChatModal
          teacher={activeChatTeacher}
          messages={chatMessages[activeChatTeacher.id] || []}
          onClose={() => setActiveChatTeacher(null)}
          onSendMessage={handleSendMessage}
        />
      )}

      {activeEventModal && (
        <EventModal
          event={activeEventModal}
          onClose={() => setActiveEventModal(null)}
          onToggleRsvp={handleToggleRsvp}
        />
      )}

      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}

      {activeStatModal && (
        <StatsDetailModal
          statData={activeStatModal}
          onClose={() => setActiveStatModal(null)}
        />
      )}

      {isNotificationOpen && (
        <NotificationDropdown
          notifications={notifications}
          onClose={() => setIsNotificationOpen(false)}
          onMarkAllAsRead={handleMarkAllNotificationsRead}
          onClearAll={handleClearNotifications}
        />
      )}

      {isNewLessonOpen && (
        <NewLessonModal
          onClose={() => setIsNewLessonOpen(false)}
          onAddLesson={handleAddLesson}
          defaultDay={selectedDay}
        />
      )}
    </main>
  );
}
