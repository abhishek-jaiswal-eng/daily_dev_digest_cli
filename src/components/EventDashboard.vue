<template>
  <div class="page-wrapper">
    <header class="page-header">
      <h1>Today's Events</h1>
      <p class="subheading">See what’s happening today</p>
    </header>
    <main class="event-list-wrapper">
      <div v-if="events.length" class="event-list">
        <div v-for="event in events" :key="event.id" class="event-card">
          <div>
            <h2>{{ event.title }}</h2>
            <p>{{ formatTime(event.created_at) }}</p>
          </div>
          <div class="right-column">
            <p class="event-description">{{ event.description }}</p>
          </div>


        </div>
      </div>
      <div v-else class="no-events">No events scheduled for today.</div>
    </main>
  </div>
</template>
<script>
import { fetchEventList } from '@/utils/apis/events';
export default {
  name: 'EventDashboard',
  data() {
    return {
      events: [],
      loading: false
    }
  },
  created() {
    this.fetchUserEventList();
  },
  methods: {
    async fetchUserEventList() {
      try {
        this.loading = true;
        const { data } = await fetchEventList();
        this.events = data.data;
      } catch(error) {
        this.events = [];
      } finally {
        this.loading = false;
      }
    },
    formatTime(datetime) {
      const options = { hour: '2-digit', minute: '2-digit' };
      return new Date(datetime).toLocaleTimeString([], options);
    },
  }
}
</script>
<style scoped>
.page-wrapper {
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.subheading {
  font-size: 1rem;
  color: #666;
}

.event-list-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.event-list {
  display: grid;
  gap: 1.5rem;
}

.event-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.left-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.event-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.event-card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #222;
}

.event-time {
  /* color: #888; */
  /* font-size: 0.9rem; */
  /* margin-bottom: 0.75rem; */
}

.event-description {
  color: #444;
  font-size: 1rem;
}

.no-events {
  text-align: center;
  color: #999;
  font-size: 1.1rem;
}
</style>
