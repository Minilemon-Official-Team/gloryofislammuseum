import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PageTranslator from '../components/PageTranslator';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageTranslator />
      <Header />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
