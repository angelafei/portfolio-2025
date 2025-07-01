"use client"; // This is a client component

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './portfolioCarousel.css';

const portfolioItems = [
  {
    title: 'Trend Micro',
    description: 'Closely collaborated with PMs, HIE, and marketing teams from different countries to jointly design and develop web pages that meet diverse market requirements while ensuring high usability and an excellent user experience.',
    image: '/trendmicro-homepage.png'
  },
  {
    title: 'NowTV',
    description: 'NowTV is a brand under the UK-based Sky Group. During my tenure, I was responsible for developing the official website and the NowTV Player, and closely collaborated with over a hundred engineers from various disciplines to maintain and enhance a large-scale codebase.',
    image: '/nowtv.png'
  },
  {
    title: 'Cameo',
    description: 'Collaborated with the Environmental Protection Administration (EPA) of the Executive Yuan to leverage large-scale IoT environmental sensing data across multiple counties and cities, develop an easy-to-use user interface, analyze potential pollution hotspots, and detect sudden pollution incidents in real time.',
    image: '/cameo-case-ai-02-content-01.jpg'
  },
  {
    title: 'Dudoo',
    description: 'Dudoo is an internal startup brand under the Foxconn Group. It initially focused on providing restaurant recommendation services and later expanded into POS system development, collaborating with numerous restaurants. During my tenure, I was responsible for assisting in the development of the official website and the POS system interface.',
    image: '/dudoo.png'
  },
  {
    title: 'Stackla',
    description: 'Stackla is a user-generated content (UGC) platform dedicated to helping brands and businesses collect, manage, curate, moderate, and showcase user-generated content from social media and other channels to enhance marketing effectiveness and improve conversion rates. During my tenure, I was involved in the development and optimization of the platform.',
    image: '/stackla.webp'
  },
  {
    title: 'Handcrafted bags',
    description: 'From selecting the fabric to every single stitch, each step is done by hand with great care to craft every detail meticulously.',
    image: '/S__242098181.jpg',
    photo: true
  },
  {
    title: 'Camouflage mini backpack',
    description: 'Every stitch is infused with passion and crafted by hand with care, creating heartfelt pieces for a beautiful life.',
    image: '/S__242098182.jpg',
    photo: true
  },
  {
    title: 'Handcrafted long wallet',
    description: 'Fox-patterned fabric blended with soft padding is patiently quilted, each tender stitch weaving a plush, dimensional surface that wraps the long wallet in the timeless elegance of handcrafted artistry.',
    image: '/S__242098183.jpg',
    photo: true
  },
  {
    title: 'Striped Skirt',
    description: 'Clean tailoring and a contoured waistband, adorned with a delicate side zipper, softly trace the graceful simplicity of muted stripes.',
    image: '/S__242098180.jpg',
    photo: true
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  adaptiveHeight: true
};

const PortfolioCarousel = () => {
  return (
    <section id="portfolio" className="portfolio-carousel-section">
      <h2 className="section-title">Portfolio</h2>
      <Slider {...settings}>
        {portfolioItems.map((item, index) => (
          <div key={index} className="carousel-card">
            <div className={ item.photo ? 'carousel-image is-photo' : 'carousel-image' }>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="carousel-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PortfolioCarousel;
