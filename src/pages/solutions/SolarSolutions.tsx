import React from 'react';
import HeaderBanner from '@/components/HeaderBanner';
import { Link } from 'react-router-dom';

const SolarSolutions: React.FC = () => {
    return (
        <>
            <HeaderBanner
                title="Solar Solutions"
                subtitle="Reliable solar energy systems for homes, businesses and industrial sites. On-grid, off-grid and hybrid configurations."
                backgroundImage="/src/assets/hero-bg-2.jpg"
            />

            <section className="container-fluid bg-light py-5">
                <div className="text-center mb-5">
                    <div>
                        <img src="/src/assets/solar/solar-logo-icon.png" width={100} alt="AQTRA" />
                        <img src="/src/assets/solar/solar-logo-txt.png" width={150} alt="AQTRA" />
                    </div>
                    <h2 className="display-5">Solar Energy Solutions</h2>
                    <p className="text-muted">Design, supply and installation of photovoltaic (PV) systems tailored to your needs.</p>
                </div>

                <div className="row justify-content-center g-4">

                    <div className="col-11 mt-4">
                        <div className="row g-4 justify-content-center">

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <Link to="/solar/on-grid" className="text-decoration-none text-dark">
                                    <div className="card h-100 shadow-sm border-0 text-center p-3">
                                        <div className="d-flex justify-content-center mb-3">
                                            <svg width="196px" height="196px" fill="#119d60" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" viewBox="-50.2 -50.2 602.40 602.40" stroke="#119d60" stroke-width="0.00502002">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0">
                                                    <path transform="translate(-50.2, -50.2), scale(18.825)" d="M16,29.19150794380241C19.736689655421035,29.91111432350925,24.29239470776455,29.645721020959847,26.69371116030457,26.693711160304574C29.032100279300554,23.819059745650964,27.3674840809424,19.650496811978172,26.73065015176932,16C26.24381040896004,13.2093086632849,25.33443177295329,10.65602011438422,23.516854273434166,8.483145726565834C21.47050404799837,6.036778518272257,19.181586514252373,3.394830722671606,16,3.171741020348337C12.679290984964917,2.9388961857515765,9.655472264680192,4.948705214366211,7.349507335943818,7.349507335943814C5.093781545438795,9.698004139192854,3.3905869341468575,12.756414050876726,3.678486686613825,15.999999999999998C3.9494784089285018,19.053093777596953,6.667719622998676,21.000096998389928,8.759947534287324,23.240052465712672C10.976802795114027,25.61343494233469,12.81092271934691,28.577359976441304,16,29.19150794380241" fill="#e6f7f0"></path>
                                                </g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.012012"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g>
                                                        <path d="M286.136,410.955c-3.892-3.919-10.224-3.942-14.143-0.053c-3.92,3.891-3.943,10.223-0.053,14.143l4.963,5 c1.955,1.969,4.526,2.955,7.098,2.955c2.547,0,5.095-0.967,7.045-2.902c3.92-3.891,3.943-10.223,0.053-14.143L286.136,410.955z"></path>
                                                        <path d="M347.783,500.499c1.551,0.959,3.358,1.503,5.246,1.503c0.739,0,1.49-0.082,2.241-0.254 c5.384-1.233,8.748-6.597,7.516-11.98l-55.578-242.69h79.561v2.669h-3.605c-5.522,0-10,4.478-10,10s4.478,10,10,10h3.605v3.322 h-3.605c-5.522,0-10,4.478-10,10s4.478,10,10,10h3.605v3.605c0,5.522,4.478,10,10,10s10-4.478,10-10v-3.605h3.604 c5.522,0,10-4.478,10-10s-4.478-10-10-10h-3.604v-3.322h3.604c5.522,0,10-4.478,10-10s-4.478-10-10-10h-3.604v-12.351 c0-0.054-0.007-0.106-0.008-0.16c0.059-3.694-1.933-7.205-5.307-8.993l-96.722-51.283v-38.402h82.037v3.322h-3.605 c-5.522,0-10,4.478-10,10s4.478,10,10,10h3.605v3.322h-3.605c-5.522,0-10,4.478-10,10s4.478,10,10,10h3.605v3.605 c0,5.522,4.478,10,10,10s10-4.478,10-10v-3.605h3.604c5.522,0,10-4.478,10-10s-4.478-10-10-10h-3.604v-3.322h3.604 c5.522,0,10-4.478,10-10s-4.478-10-10-10h-3.604v-12.351c0-0.14-0.015-0.277-0.021-0.415c0.215-3.839-1.8-7.538-5.294-9.391 l-62.76-33.276c-4.878-2.587-10.932-0.728-13.52,4.15c-2.587,4.88-0.729,10.933,4.15,13.52l27.237,14.441h-51.83V74.455 c0-0.058-0.015-0.116-0.02-0.174c-0.033-1.908-0.594-3.803-1.705-5.44L259.276,4.386C257.415,1.643,254.315,0,251.001,0 s-6.414,1.643-8.275,4.386l-42.334,62.398l-99.841,52.937c-3.495,1.853-5.509,5.552-5.294,9.391 c-0.006,0.139-0.021,0.275-0.021,0.415v12.351H91.63c-5.522,0-10,4.478-10,10s4.478,10,10,10h3.605v3.322H91.63 c-5.522,0-10,4.478-10,10s4.478,10,10,10h3.605v3.605c0,5.522,4.478,10,10,10s10-4.478,10-10v-3.605h3.604c5.522,0,10-4.478,10-10 s-4.478-10-10-10h-3.604v-3.322h3.604c5.522,0,10-4.478,10-10s-4.478-10-10-10h-3.604v-3.322h82.036v38.402l-96.721,51.283 c-3.374,1.789-5.366,5.299-5.307,8.994c-0.001,0.054-0.008,0.106-0.008,0.16v12.351H91.63c-5.522,0-10,4.478-10,10s4.478,10,10,10 h3.605v3.322H91.63c-5.522,0-10,4.478-10,10s4.478,10,10,10h3.605v3.605c0,5.522,4.478,10,10,10s10-4.478,10-10v-3.605h3.604 c5.522,0,10-4.478,10-10s-4.478-10-10-10h-3.604v-3.322h3.604c5.522,0,10-4.478,10-10s-4.478-10-10-10h-3.604v-2.669h79.56 l-55.578,242.69c-1.232,5.384,2.132,10.747,7.516,11.98c0.832,0.191,1.66,0.259,2.475,0.24c0.081,0.002,0.162,0.012,0.243,0.012 c2.56,0,5.118-0.977,7.071-2.929l99.107-99.107h66.072l14.125,61.679l-22.753-22.753c-3.906-3.904-10.236-3.904-14.143,0 c-3.905,3.905-3.905,10.237,0,14.143l46.427,45.361L347.783,500.499z M192.703,345.808l21.265,21.265 c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143l-25.456-25.456l30.98-25.789 c4.245-3.533,4.821-9.839,1.288-14.083c-3.531-4.243-9.838-4.822-14.083-1.288l-17.93,14.926l10.395-45.39l86.309,71.844 l-52.269,52.269h-62.463L192.703,345.808z M284.73,172.976h-67.459v-34.101h67.459V172.976z M234.407,247.396h52.354l12.331,53.844 L234.407,247.396z M217.271,227.077v-34.102h67.459v34.102H217.271z M217.271,118.557V84.455h67.459v34.102H217.271z M251.001,27.812l24.86,36.644h-49.721L251.001,27.812z M197.271,91.076v27.481h-51.829L197.271,91.076z M197.271,199.597v27.481 h-51.829L197.271,199.597z M166.328,460.98l13.973-61.016h47.043L166.328,460.98z M275.629,379.964l33.76-33.76l7.731,33.76 H275.629z M304.73,227.077v-27.481l51.829,27.481H304.73z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <h5 className="card-title">On-Grid</h5>
                                        <p className="card-text text-muted small">Grid-tied PV systems — export surplus energy and reduce bills.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <Link to="/solar/off-grid" className="text-decoration-none text-dark">
                                    <div className="card h-100 shadow-sm border-0 text-center p-3">
                                        <div className="d-flex justify-content-center mb-3">
                                            <svg width="196px" height="196px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0">
                                                    <path transform="translate(-2.4, -2.4), scale(0.8999999999999999)" d="M16,28.873189321586064C17.996811831222914,29.24471705712199,20.24422158094974,29.48123466998698,22.003023817183152,28.46540740051416C23.763639791373553,27.448532574676882,24.219370066129752,25.14767586063634,25.36204010191243,23.465977846925075C26.42260034048611,21.905123015014777,27.646205330626763,20.52728529135626,28.529759686964617,18.85983588422644C29.610810838052885,16.81966926852379,31.664471203849057,14.792949262682274,31.150477232272515,12.54200243783726C30.63646807267933,10.290989099726092,27.94337561275505,9.305083150021579,26.047147077458973,7.987667571538855C24.501342377423125,6.913710949110394,22.596066648827655,6.589665978294169,21.04600495132719,5.521862751359144C19.174720455484717,4.232776241837494,18.261310539311033,1.2898476709692246,16.000000000000004,1.066410122173174C13.812009451644894,0.8502172391459969,12.245198041944,3.205792429964073,10.449786208152698,4.474862305678192C8.886091015482382,5.580145464933315,7.320279991671336,6.630534725297691,6.072823524284384,8.083340933877386C4.797785334285924,9.568269223588503,3.715785468840356,11.199460836199492,3.0848316163618,13.052197095784598C2.418772579443401,15.00801640630223,2.1557492286830513,17.06385301709855,2.3129033888595636,19.123990484840338C2.483483601926435,21.36013038593958,2.3209449949544556,24.096536923902633,4.0374300157000835,25.539831225122576C5.846467886132448,27.060947936034452,8.707458081058295,25.780820877893387,10.984277827418637,26.415254410627476C12.800585059754374,26.921366594423894,14.146310008406717,28.52829090191851,16,28.873189321586064" fill="#e6f7f0"></path>
                                                </g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M5 5H9M6 13.5H10M15 5H19M14 13.5H18M16 11.5V15.5M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.71569 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#119d60" stroke-width="1.296" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <h5 className="card-title">Off-Grid</h5>
                                        <p className="card-text text-muted small">Standalone systems with batteries for full independence.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <Link to="/solar/hybrid" className="text-decoration-none text-dark">
                                    <div className="card h-100 shadow-sm border-0 text-center p-3">
                                        <div className="d-flex justify-content-center mb-3">
                                            <svg width="72" height="72" viewBox="0 0 24 24" fill="#e6f7f0" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="3" width="18" height="8" rx="1" stroke="#119d60" strokeWidth="1.2" fill="#e6f7f0" />
                                                <rect x="3" y="13" width="10" height="8" rx="1" stroke="#119d60" strokeWidth="1.2" fill="#e6f7f0" />
                                                <circle cx="17" cy="17" r="3" stroke="#119d60" strokeWidth="1.2" fill="#e6f7f0" />
                                            </svg>
                                        </div>
                                        <h5 className="card-title">Hybrid</h5>
                                        <p className="card-text text-muted small">Grid-connected systems with battery backup and smart control.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <Link to="/solar/pump" className="text-decoration-none text-dark">
                                    <div className="card h-100 shadow-sm border-0 text-center p-3">
                                        <div className="d-flex justify-content-center mb-3">
                                            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 12h10v6H3z" stroke="#119d60" strokeWidth="1.2" fill="#e6f7f0" />
                                                <path d="M17 8c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.239 5 5z" stroke="#119d60" strokeWidth="1.2" fill="#e6f7f0" />
                                                <path d="M21 18v-4" stroke="#119d60" strokeWidth="1.2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <h5 className="card-title">Pumping</h5>
                                        <p className="card-text text-muted small">Solar water pumping solutions for irrigation and remote supply.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12"></div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <Link to="/solar-calculation" className="text-decoration-none text-dark">
                                    <div className="card h-100 shadow-sm border-0 text-center p-3">
                                        <div className="d-flex justify-content-center mb-3">
                                            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#119d60" strokeWidth="1.2" fill="#e6f7f0" />
                                                <path d="M7 8h10M7 12h6M7 16h4" stroke="#119d60" strokeWidth="1.2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <h5 className="card-title">Get Recommendation</h5>
                                        <p className="card-text text-muted small">Answer a few questions to find the right system and estimated area.</p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolarSolutions;
