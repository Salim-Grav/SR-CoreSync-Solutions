/**
 * S&R CORESYNC SOLUTIONS - MASTER INTERACTIVE ENGINE
 * Emulating the refined user experience of dananajmah.com
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* -------------------------------------------------------------
     1. Interactive Desktop Fluid Cursor Trail (canvas#trail)
     ------------------------------------------------------------- */
  const canvas = document.getElementById('trail');
  if (canvas && window.innerWidth >= 1200) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const points = [];
    const maxPoints = 25;

    window.addEventListener('mousemove', (e) => {
      points.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      });
      if (points.length > maxPoints) {
        points.shift();
      }
    });

    function renderTrail() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.age++;
        const ratio = 1 - (point.age / maxPoints);
        if (ratio <= 0) continue;

        ctx.beginPath();
        ctx.arc(point.x, point.y, ratio * 7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${ratio * 0.35})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
        ctx.fill();
      }

      requestAnimationFrame(renderTrail);
    }
    renderTrail();
  }

  /* -------------------------------------------------------------
     2. Back to Top Button with Scroll Progress
     ------------------------------------------------------------- */
  const goTopBtn = document.getElementById('goTop');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (goTopBtn) {
      if (scrollY > 300) {
        goTopBtn.style.opacity = '1';
        goTopBtn.style.pointerEvents = 'auto';
      } else {
        goTopBtn.style.opacity = '0';
        goTopBtn.style.pointerEvents = 'none';
      }
    }
  });

  if (goTopBtn) {
    goTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -------------------------------------------------------------
     3. Direct Call Modal Manager
     ------------------------------------------------------------- */
  const callModal = document.getElementById('directCallModal');
  const openCallModalBtns = document.querySelectorAll('.open-call-modal');
  const closeCallModalBtn = document.getElementById('closeCallModalBtn');

  openCallModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (callModal) {
        callModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeCallModalBtn && callModal) {
    closeCallModalBtn.addEventListener('click', () => {
      callModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (callModal) {
    callModal.addEventListener('click', (e) => {
      if (e.target === callModal) {
        callModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* -------------------------------------------------------------
     4. Interactive Project Case Study Modal
     ------------------------------------------------------------- */
  const projectModal = document.getElementById('projectModal');
  const projectTriggers = document.querySelectorAll('.work-project-trigger');
  const projectCloseBtn = document.getElementById('projectModalCloseBtn');
  const projectBackdrop = document.getElementById('projectModalBackdrop');

  const projectData = {
    'coresync-erp': {
      title: 'CoreSync Cloud ERP Suite',
      type: 'نظام سحابي ومالي متكامل',
      desc: 'بناء وتخصيص منظومة ERP متكاملة تربط مستودعات ومبيعات ومحاسبة الشركة في هولندا مع الفوترة الإلكترونية والدفع المباشر عبر بنوك هولندا وبوابة iDEAL.',
      quote: 'تحويل جذري لآلية إدارة المخزون والفواتير مع إلغاء 100% من أخطاء المطابقة المحاسبية.',
      stats: 'تمت معالجة أكثر من 45,000 فاتورة بدقة 100%'
    },
    'finpulse-ai': {
      title: 'FinPulse AI Analytics',
      type: 'منصة ذكاء اصطناعي وتحليل مالي',
      desc: 'منصة سحابية متقدمة تعتمد على الذكاء الاصطناعي لفحص القوائم المالية، التنبؤ بالتدفقات النقدية المستقبلية، وكشف التعثر المالي مبكراً.',
      quote: 'رؤى استباقية وتوقعات مالية دقيقة قلصت مخاطر السيولة بنسبة تفوق 35%.',
      stats: 'توفير 20 ساعة عمل محاسبي أسبوعياً لكل منشأة'
    },
    'omnichannel-retail': {
      title: 'RetailFlow Global Omni-Channel',
      type: 'تطبيقات جوال وتجارة متكاملة',
      desc: 'تطبيق جوال فائق السرعة لمنظومة بيع تجزئة مع ربط مستودعات متعددة الفروع ونظام ولاء عملاء متصل بنظام المحاسبة المركزي.',
      quote: 'تجربة تسوق سلسة ضاعفت معدل المبيعات بنسبة 60% في أول شهرين.',
      stats: 'أكثر من 100,000 مستخدم نشط شهرياً'
    },
    'rpa-compliance': {
      title: 'AutoTax & RPA Compliance Bot',
      type: 'روبوت أتمتة وامتثال ضريبي',
      desc: 'محرك أتمتة مالي يقوم بسحب البيانات البنكية، وتصنيف المصروفات، ورفع الإقرارات الضريبية تلقائياً وفق الأنظمة المعمول بها في هولندا والخليج.',
      quote: 'إلغاء العمل اليدوي في مطابقة الكشوف البنكية وتصفير الغرامات المحاسبية.',
      stats: 'نسبة أتمتة بلغت 98.5% من إجمالي القيود'
    }
  };

  projectTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const pKey = trigger.getAttribute('data-project');
      const data = projectData[pKey];
      if (data && projectModal) {
        document.getElementById('pmTitle').textContent = data.title;
        document.getElementById('pmType').textContent = data.type;
        document.getElementById('pmDescription').textContent = data.desc;
        document.getElementById('pmQuote').textContent = '“' + data.quote + '”';
        document.getElementById('pmStats').textContent = data.stats;
        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeProjModal = () => {
    if (projectModal) {
      projectModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  if (projectCloseBtn) projectCloseBtn.addEventListener('click', closeProjModal);
  if (projectBackdrop) projectBackdrop.addEventListener('click', closeProjModal);

  // Close modals on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (callModal) callModal.classList.remove('active');
      closeProjModal();
      document.body.style.overflow = '';
    }
  });

  /* -------------------------------------------------------------
     5. Interactive Tabs (Work & Pricing)
     ------------------------------------------------------------- */
  function setupTabs(btnSelector, contentSelector) {
    const buttons = document.querySelectorAll(btnSelector);
    const panes = document.querySelectorAll(contentSelector);

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-tab-target');

        buttons.forEach(b => b.classList.remove('active'));
        panes.forEach(p => {
          p.classList.remove('active');
          p.style.display = 'none';
        });

        btn.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
          targetPane.style.display = 'block';
        }
      });
    });
  }

  setupTabs('.work-tab-btn', '.work-tab-pane');
  setupTabs('.pricing-tab-btn', '.pricing-tab-pane');

  /* -------------------------------------------------------------
     6. Accordion (FAQ)
     ------------------------------------------------------------- */
  const accordionItems = document.querySelectorAll('.accordion-faq_item');
  accordionItems.forEach(item => {
    const action = item.querySelector('.accordion-action');
    if (action) {
      action.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        accordionItems.forEach(i => i.classList.remove('active'));
        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  /* -------------------------------------------------------------
     7. Animated Stats Counters (Odometer Effect)
     ------------------------------------------------------------- */
  const statsSection = document.getElementById('stats');
  let animatedStats = false;

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          const counters = document.querySelectorAll('.odometer-counter');
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const increment = target / 35;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.ceil(current);
              }
            }, 30);
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  /* -------------------------------------------------------------
     8. High-Conversion Consultation Contact Form
     ------------------------------------------------------------- */
  const consultForm = document.getElementById('mainConsultForm');
  const alertSuccess = document.getElementById('alertSuccessBox');

  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = consultForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري معالجة الطلب وإرساله للشركاء...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        consultForm.reset();
        if (alertSuccess) {
          alertSuccess.style.display = 'flex';
          if (window.lucide) window.lucide.createIcons();
          alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 800);
    });
  }

  /* -------------------------------------------------------------
     9. Mobile Navigation Drawer Toggle
     ------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('btnOpenMobileMenu');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileDrawerBtn = document.getElementById('btnCloseMobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMobileDrawer = () => {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (closeMobileDrawerBtn) closeMobileDrawerBtn.addEventListener('click', closeMobileDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileDrawer));
});
