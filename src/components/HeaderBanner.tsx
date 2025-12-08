import React from 'react';

interface HeaderBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ title, subtitle, backgroundImage }) => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative' as 'relative',
    padding: '4rem 1rem',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <div className="header-banner" style={bannerStyle}>
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(10, 58, 26, 0.5)',
        zIndex: 1,
      }}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="display-4">{title}</h1>
        {subtitle && <p className="lead mt-3">{subtitle}</p>}
      </div>
    </div>
  );
};

export default HeaderBanner;