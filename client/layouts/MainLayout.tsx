import { Container } from '@mui/material';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'Турфирма'}</title>
        <meta name="description" content={`Турфирма. ` + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Турфирма'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Container>{children}</Container>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
