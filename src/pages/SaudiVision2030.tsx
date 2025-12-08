import HeaderBanner from '@/components/HeaderBanner';
import React, { useEffect } from 'react';

const SaudiVision2030: React.FC = () => {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <HeaderBanner title="Saudi Vision 2030" backgroundImage='/src/assets/saudi-vision-banner-1.webp' subtitle='A bold blueprint for transforming Saudi Arabia into a global leader in economic, social, and cultural development.' />
            <div className="saudi-vision-2030">

                {/* Overview */}
                <section className="overview py-5">
                    <div className="container">
                        <h2 className="mb-4">Overview</h2>
                        <p>
                            Saudi Vision 2030 is a strategic framework launched in 2016 by the Kingdom of Saudi Arabia to reduce its dependence on oil, diversify its economy, and develop public service sectors such as health, education, infrastructure, recreation, and tourism. It aims to position Saudi Arabia as a global investment powerhouse and a hub connecting three continents: Asia, Europe, and Africa.
                        </p>
                    </div>
                </section>

<div className='position-relative'>

                <img src="/src/assets/saudi_vision_2030_logo.svg" style={{width: 350, opacity: 0.1}} alt="Saudi Vision 2030 Logo" className="position-absolute top-50 start-50 translate-middle" />
</div>

                {/* The Three Pillars / Themes */}
                <section className="pillars py-5 bg-light">
                    <div className="container">
                        <h2 className="mb-4">The Three Pillars of Vision 2030</h2>

                        {/* Vibrant Society */}
                        <div className="pillar mb-5">
                            <h3>Vibrant Society</h3>
                            <p>
                                The goal of a vibrant society is to create a rich and fulfilling life for all citizens and residents. This includes promoting cultural and entertainment opportunities, preserving Saudi heritage, and improving the quality of life through world-class healthcare and education.
                            </p>
                        </div>

                        {/* Thriving Economy */}
                        <div className="pillar mb-5">
                            <h3>Thriving Economy</h3>
                            <p>
                                A thriving economy focuses on diversifying income sources, empowering the private sector, and creating job opportunities for all. It emphasizes innovation, entrepreneurship, and attracting foreign investment to drive sustainable growth.
                            </p>
                        </div>

                        {/* Ambitious Nation */}
                        <div className="pillar">
                            <h3>Ambitious Nation</h3>
                            <p>
                                An ambitious nation aims to enhance government effectiveness, transparency, and accountability. It seeks to foster a culture of responsibility and volunteerism, ensuring that all citizens contribute to the nation’s progress.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Targets & Goals */}
                <section className="targets py-5">
                    <div className="container">
                        <h2 className="mb-4">Key Targets & Goals</h2>
                        <ul className="list-unstyled">
                            <li className="mb-3">Increase private sector GDP contribution from 40% to 65%.</li>
                            <li className="mb-3">Raise foreign direct investment from 3.8% to 5.7% of GDP.</li>
                            <li className="mb-3">Grow non-oil revenue from SAR 163 billion to SAR 1 trillion.</li>
                            <li className="mb-3">Improve the quality of life index ranking to be among the top 10 globally.</li>
                            <li className="mb-3">Increase the number of volunteers from 11,000 to 1 million.</li>
                            <li className="mb-3">Enhance e-government services and digital transformation.</li>
                        </ul>
                    </div>
                </section>

                {/* Impact & Opportunities */}
                <section className="impact py-5 bg-light">
                    <div className="container">
                        <h2 className="mb-4">Impact & Opportunities</h2>
                        <p>
                            Vision 2030 presents immense opportunities for businesses, society, and the global community. It fosters a dynamic business environment, attracts foreign investment, and drives infrastructure development. The vision also enhances the quality of life for citizens and residents, creating a sustainable and diversified economy for future generations.
                        </p>
                    </div>
                </section>

                {/* Footer / Navigation Element */}
                <footer className="footer py-4 text-center">
                    <div className="container">
                        <a href="https://www.vision2030.gov.sa" target="_blank" rel="noopener noreferrer">
                            <img src="/src/assets/saudi_vision_2030_logo.svg" width="250px" alt="Saudi Vision 2030 Logo" className="mb-3" />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default SaudiVision2030;