import React from 'react';
import { Layout } from '../components/Layout';
import { ThemeToggle } from '../components/ThemeToggle';

const Home: React.FC = () => (
  <Layout>
    <header className="flex justify-between items-center p-4">
      <h1 className="text-4xl font-bold">بحر الأكواد</h1>
      <ThemeToggle />
    </header>
    <section className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl mb-4">مرحباً بك في عالم الأكواد!</h2>
      <p>الموقع تحت التطوير وسيأتي قريباً بأفكار خارقة للطبيعة.</p>
    </section>
  </Layout>
);

export default Home;
