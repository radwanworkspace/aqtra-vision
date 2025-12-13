import React from 'react';
import Header from '@/components/Header';
import HeaderBanner from '@/components/HeaderBanner';

const Portfolio: React.FC = () => {
    return (
        <>
            <HeaderBanner
                title="Portfolio"
                subtitle="Showcasing Our Expertise and Successful Projects"
            />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <div className="mb-4 section-title">
                            <h3 >
                                Portfolio Coming Soon
                            </h3>
                        </div>

                        <div className="portfolio-content">
                            {/* <img className='max-w-75 mb-4 mx-2' style={{ maxWidth: 350 }} src="/src/assets/coming-soon.svg" alt="Portfolio Coming Soon" /> */}
                            <img className='max-w-75 mb-4 mx-2' style={{ maxWidth: 350 }} src="/src/assets/under-construction.svg" alt="Portfolio Coming Soon" />
                            {/* <img className='max-w-75 mb-4 mx-2' style={{ maxWidth: 350 }} src="/src/assets/web-design.svg" alt="Portfolio Coming Soon" /> */}
                        </div>

                        <div className="mt-4">
                            <a href="/src/assets/AQTRA_Portfolio.pdf" target='_blank' className="btn btn-primary">
                                Download Portfolio PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;