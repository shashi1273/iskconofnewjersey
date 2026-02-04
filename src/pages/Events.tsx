import { Calendar, Clock } from 'lucide-react';

const upcomingEvents = [
  { title: 'Bhagavad Gita 10-Week Course', date: 'Feb 05, 2026', time: '8:00-9:00 PM', description: 'Join us for a comprehensive 10-week journey through the Bhagavad Gita.' },
  { title: 'Vijaya Ekadasi', date: 'Feb 12, 2026', time: 'All Day', description: 'Auspicious fasting day with extended kirtan and spiritual programs.' },
  { title: 'Amalaki Vrata Ekadashi', date: 'Feb 27, 2026', time: 'All Day', description: 'Special Ekadashi observance with temple programs throughout the day.' },
  { title: 'Nityananda Trayodasi Festival', date: 'Jan 30, 2026', time: '6:00 PM', description: 'Grand celebration of the appearance day of Lord Nityananda with abhisheka, kirtan, and feast.' },
];

const recurringPrograms = [
  { day: 'Monday - Saturday', program: 'Morning Program', time: '4:30 AM - 9:00 AM' },
  { day: 'Monday - Saturday', program: 'Evening Arati', time: '7:00 PM' },
  { day: 'Saturday', program: 'Bhagavad Gita Class', time: '6:00 PM' },
  { day: 'Sunday', program: 'Sunday School', time: '5:00 PM - 6:00 PM' },
  { day: 'Sunday', program: 'Evening Program & Feast', time: '6:00 PM' },
];

export default function Events() {
  return (
    <div>
      {/* Header with Background Image */}
      <section className="relative py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/70 to-dark z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/temple-event.avif)' }}
        />
        <div className="relative z-20">
          <p className="text-gold uppercase tracking-widest text-sm mb-2">Calendar</p>
          <h1 className="font-heading text-5xl text-white">Events & Festivals</h1>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto px-4">
            Join us for weekly programs, monthly festivals, and special celebrations throughout the year.
          </p>
        </div>
      </section>

      {/* Recurring Programs */}
      <section className="py-16 px-4 border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-8 text-center">Weekly Schedule</h2>
          <div className="bg-charcoal rounded-lg overflow-hidden">
            {recurringPrograms.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-white/10 last:border-0">
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <p className="text-white font-medium">{item.program}</p>
                    <p className="text-white/50 text-sm">{item.day}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0 ml-9 sm:ml-0">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-gold">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm">{event.date}</span>
                </div>
                <h3 className="font-heading text-xl text-white mb-2">{event.title}</h3>
                <p className="text-white/50 text-sm mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {event.time}
                </p>
                <p className="text-white/70 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
