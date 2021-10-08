import React from 'react';
import Layout from './Layout';

// components
import Banner from './snippets/Banner'
import Addresses from './snippets/BlackAddresses'
import About from './snippets/AboutBlack'
import Feature from './snippets/Features'
import CompetitiveAnalysis from './snippets/CompetitiveAnalysis'
import Roadmap from './snippets/Roadmap'
import Team from './snippets/Team'

function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <Banner />
            <Addresses />
            <About />
            <Feature />
            <CompetitiveAnalysis />
            <Roadmap />
            <Team />
        </Layout>
    );
}

export default HomePage;