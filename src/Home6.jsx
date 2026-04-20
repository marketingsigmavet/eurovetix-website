import React, { useEffect, useMemo, useRef, useState } from 'react';
import Preloader from './components/home6/Preloader';
import Header from './components/home6/Header';
import MobileMenu from './components/home6/MobileMenu';
import StickyHeader from './components/home6/StickyHeader';
import SearchPopup from './components/home6/SearchPopup';
import SidebarArea from './components/home6/SidebarArea';
import HeroSection from './components/home6/HeroSection';
import AboutSection from './components/home6/AboutSection';
import FeatureSection from './components/home6/FeatureSection';
import ChooseSection from './components/home6/ChooseSection';
import MarqueeSection from './components/home6/MarqueeSection';
import VideoSection from './components/home6/VideoSection';
import ServiceSection from './components/home6/ServiceSection';
import ProjectSection from './components/home6/ProjectSection';
import ProcessSection from './components/home6/ProcessSection';
import TeamSection from './components/home6/TeamSection';
import CtaSection from './components/home6/CtaSection';
import TestimonialSection from './components/home6/TestimonialSection';
import PricingSection from './components/home6/PricingSection';
import ContactSection from './components/home6/ContactSection';
import BrandsSection from './components/home6/BrandsSection';
import BlogSection from './components/home6/BlogSection';
import ContactWrapper from './components/home6/ContactWrapper';
import NewsletterSection from './components/home6/NewsletterSection';
import FooterSection from './components/home6/FooterSection';

const TEMPLATE_SCRIPTS = [
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/wow.min.js',
  '/assets/js/splite-type.min.js',
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-template-src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.templateSrc = src;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function setInitialCharStyles(chars, animationType) {
  chars.forEach((char) => {
    char.style.display = 'inline-block';
    char.style.opacity = '0';
    char.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    switch (animationType) {
      case 'slide-down':
        char.style.transform = 'translateY(-20px)';
        break;
      case 'rotate':
        char.style.transform = 'rotate(-90deg)';
        break;
      case 'zoom-in':
        char.style.transform = 'scale(0)';
        break;
      case 'fade-up':
        char.style.transform = 'translateY(20px)';
        break;
      case 'bounce-in':
        char.style.transform = 'scale(0.5)';
        break;
      case 'flip':
        char.style.transform = 'rotateY(90deg)';
        break;
      default:
        char.style.transform = 'translateX(20px)';
    }
  });
}

function revealChars(chars, animationType) {
  chars.forEach((char, index) => {
    window.setTimeout(() => {
      char.style.opacity = '1';
      char.style.transform =
        animationType === 'rotate'
          ? 'rotate(0deg)'
          : animationType === 'zoom-in'
            ? 'scale(1)'
            : animationType === 'fade-up'
              ? 'translateY(0)'
              : animationType === 'bounce-in'
                ? 'scale(1)'
                : animationType === 'flip'
                  ? 'rotateY(0deg)'
                  : animationType === 'slide-down'
                    ? 'translateY(0)'
                    : 'translateX(0)';
    }, index * 30);
  });
}

function initTitleAnimations() {
  if (!window.SplitType) return () => {};

  const elements = Array.from(document.querySelectorAll('.sec-title, .title-anim')).filter(
    (element) => !element.dataset.titleAnimated,
  );

  if (!elements.length) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const animationType = element.getAttribute('data-animation') || 'slide-right';
        const chars = element.querySelectorAll('.char');
        revealChars(Array.from(chars), animationType);
        observer.unobserve(element);
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((element) => {
    element.dataset.titleAnimated = 'true';
    const split = new window.SplitType(element, { types: 'chars' });
    const animationType = element.getAttribute('data-animation') || 'slide-right';
    setInitialCharStyles(split.chars, animationType);
    observer.observe(element);
  });

  return () => observer.disconnect();
}

function initWowAnimations() {
  if (!window.WOW) return () => {};
  const wow = new window.WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false,
  });
  wow.init();
  window.setTimeout(() => {
    if (typeof wow.sync === 'function') wow.sync();
  }, 100);
  return () => {};
}

function initSwipers() {
  if (!window.Swiper) return () => {};

  const instances = [];
  const create = (selector, options) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (element.swiper) return;
      instances.push(new window.Swiper(element, options));
    });
  };

  create('.hero-slider-6', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: false,
    pagination: {
      el: '.hero-slider-6 .swiper-pagination, .swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: '.hero-slider-6 .swiper-button-next, .swiper-button-next',
      prevEl: '.hero-slider-6 .swiper-button-prev, .swiper-button-prev',
    },
  });

  create('.brands-slider', {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: { delay: 7000, disableOnInteraction: false },
    breakpoints: {
      1200: { slidesPerView: 6 },
      992: { slidesPerView: 5 },
      767: { slidesPerView: 4 },
      575: { slidesPerView: 3 },
      0: { slidesPerView: 2 },
    },
  });

  create('.about-slider', {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      0: { slidesPerView: 1 },
      575: { slidesPerView: 1 },
      912: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
    },
  });

  create('.testi-slider-6', {
    spaceBetween: 24,
    speed: 1500,
    loop: true,
    autoplay: false,
    navigation: {
      prevEl: '.testi-slider-6-wrap .array-prev, .array-prev',
      nextEl: '.testi-slider-6-wrap .array-next, .array-next',
    },
    breakpoints: {
      1024: { slidesPerView: 2 },
      768: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  });

  create('.project-slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: false,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: '.project-slider-wrap .array-prev, .array-prev',
      prevEl: '.project-slider-wrap .array-next, .array-next',
    },
  });

  return () => {
    instances.forEach((instance) => {
      try {
        instance.destroy(true, true);
      } catch {
        // ignore destroy errors during hot reload/unmount
      }
    });
  };
}

export default function Home6() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [sticky, setSticky] = useState(false);
  const cleanupRef = useRef([]);

  const staticSections = useMemo(
    () => (
      <>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <ChooseSection />
        <MarqueeSection />
        <VideoSection />
        <ServiceSection />
        <ProjectSection />
        <ProcessSection />
        <TeamSection />
        <CtaSection />
        <TestimonialSection />
        <PricingSection />
        <ContactSection />
        <BrandsSection />
        <BlogSection />
        <ContactWrapper />
        <NewsletterSection />
        <FooterSection />
      </>
    ),
    [],
  );

  useEffect(() => {
    document.body.id = 'body';
    document.body.className = 'bg-theme3';
    document.documentElement.classList.add('no-js');

    const onScroll = () => setSticky(window.scrollY > 100);
    const onAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        event.preventDefault();
        return;
      }
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      const headerOffset = 110;
      const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
      setSidebarOpen(false);
      setSearchOpen(false);
    };

    const timer = window.setTimeout(() => setShowPreloader(false), 900);

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onAnchorClick);

    let cancelled = false;
    (async () => {
      try {
        for (const src of TEMPLATE_SCRIPTS) {
          if (cancelled) return;
          await loadScript(src);
        }
      } catch (error) {
        console.error('Template scripts failed to load:', error);
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onAnchorClick);
      cleanupRef.current.forEach((cleanup) => cleanup && cleanup());
      cleanupRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (showPreloader) return undefined;

    const timer = window.setTimeout(() => {
      cleanupRef.current.forEach((cleanup) => cleanup && cleanup());
      cleanupRef.current = [initSwipers(), initWowAnimations(), initTitleAnimations()];
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
    }, 120);

    return () => window.clearTimeout(timer);
  }, [showPreloader]);

  useEffect(() => {
    document.body.classList.toggle('body-visible', mobileMenuOpen);
    return () => document.body.classList.remove('body-visible');
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle('search-active', searchOpen);
    return () => document.body.classList.remove('search-active');
  }, [searchOpen]);

  useEffect(() => {
    document.body.classList.toggle('open-sidebar', sidebarOpen);
    return () => document.body.classList.remove('open-sidebar');
  }, [sidebarOpen]);

  return (
    <div className="page-wrapper bg-theme3 overflow-visible">
      {showPreloader && <Preloader onClose={() => setShowPreloader(false)} />}
      <Header
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenSidebar={() => setSidebarOpen(true)}
      />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <StickyHeader sticky={sticky} onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <SearchPopup isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <SidebarArea isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {staticSections}
    </div>
  );
}
