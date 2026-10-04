/**
 * S&R CoreSync Solutions - Enterprise Suite Engine v2.0
 * 1. Instant Official PDF Quotation Generator
 * 2. Client Visual Feedback Hub
 * 3. EU GDPR Cookie Consent System
 * 4. Executive Meeting Scheduler (Auto-Timezone & Calendar .ICS)
 * 5. AI & ERP Digital Readiness Assessment Engine
 * 6. Enterprise Case Studies & Measurable ROI Hub
 * 7. Live Cloud ERP Demo Sandbox Quick Access
 */

(function () {
    'use strict';

    const WHATSAPP_NUM = '31687764998';

    // State for Assessment Quiz
    let currentQuizStep = 0;
    const quizAnswers = {};

    const QUIZ_QUESTIONS = [
        {
            title: 'ما هو حجم منشأتكم وعدد الموظفين الحالي؟',
            options: [
                { text: 'مؤسسة ناشئة / متنامية (1 - 10 موظفين)', score: 15, saving: 800 },
                { text: 'شركة متوسطة الحجم (11 - 50 موظفاً)', score: 25, saving: 1800 },
                { text: 'مؤسسة متعددة الأقسام (51 - 200 موظف)', score: 35, saving: 3500 },
                { text: 'مجموعة كبرى / سلاسل فروع (+200 موظف)', score: 45, saving: 6500 }
            ]
        },
        {
            title: 'كيف تدار العمليات المحاسبية وسلاسل الإمداد حالياً؟',
            options: [
                { text: 'ملفات Excel يدوية وتقارير مبعثرة', score: 10, saving: 1200 },
                { text: 'برنامج محاسبي قديم غير متصل بالسحابة', score: 20, saving: 900 },
                { text: 'نظام سحابي منفصل يفتقر للتكامل الكامل', score: 30, saving: 600 },
                { text: 'نظام ERP متقدم ولكن يحتاج أتمتة وذكاء اصطناعي', score: 40, saving: 400 }
            ]
        },
        {
            title: 'ما هو مستوى الأتمتة بالذكاء الاصطناعي لديكم؟',
            options: [
                { text: 'لا يوجد أي استخدام للذكاء الاصطناعي حتى الآن', score: 5, saving: 1500 },
                { text: 'استخدامات فردية وبدائية (ChatGPT فقط)', score: 15, saving: 1000 },
                { text: 'أتمتة جزئية لبعض المهام المكررة', score: 25, saving: 700 },
                { text: 'منظومة سحابية ذكية تبحث عن حلول RAG مخصصة', score: 35, saving: 500 }
            ]
        },
        {
            title: 'ما هو الهدف الأهم لمنشأتكم في المرحلة المقبلة؟',
            options: [
                { text: 'الامتثال الضريبي الأوروبي وتوحيد حسابات الفروع', score: 25, saving: 1100 },
                { text: 'تقليل الهدر المالي وتسريع دورة إصدار الفواتير', score: 30, saving: 1400 },
                { text: 'ربط الفروع بنظام سحابي مركزي فوري المزامنة', score: 35, saving: 1600 },
                { text: 'بناء تطبيق سحابي ومنصة مخصصة لعملاء VIP', score: 40, saving: 1200 }
            ]
        }
    ];

    // Enterprise Case Studies Data
    const CASE_STUDIES = {
        almarai: {
            client: 'سلاسل الإمداد الأوروبية – قطاع المواد الغذائية',
            title: 'مزامنة لوجستية فورية وأنظمة ERP عالية التوافر عبر 4 دول أوروبية',
            tag: 'Cloud ERP & Microservices',
            kpis: [
                { val: '94%', lbl: 'تسريع مزامنة البيانات' },
                { val: '18 ساعة', lbl: 'وفر أسبوعي لفرق المحاسبة' },
                { val: '99.99%', lbl: 'توافر سحابي High Availability' }
            ],
            challenge: 'كانت المستودعات في هولندا وألمانيا وبلجيكا تعاني من تأخر مزامنة المخزون وتكرار الفواتير اليدوية بسبب استخدام أنظمة محلية متفرقة، مما أدى لاختناقات في التوزيع وتأخر التسويات المالية الشهرية.',
            solution: 'قام م. سليم عزيزة بتصميم بنية سحابية موزعة بنظام Microservices فائقة السرعة على خوادم أوروبية آمنة، بينما أشرف أ. رائد كعكة على توحيد شجرة الحسابات والامتثال لضريبة القيمة المضافة الأوروبية (VAT & IFRS).',
            roi: 'تم خفض وقت إصدار التقارير المجمعة من 8 أيام إلى نقرة واحدة فورية، وتحقيق وفر سنوي تجاوز 45,000 يورو في تكاليف العمليات والفاقد المخزني.'
        },
        schoon365: {
            client: '365 SCHOON B.V. – هولندا',
            title: 'أتمتة الفواتير والامتثال الضريبي الهولندي (Belastingdienst)',
            tag: 'Dutch Tax & Financial Automation',
            kpis: [
                { val: '100%', lbl: 'امتثال ضريبي هولندي خالٍ من الأخطاء' },
                { val: '45%', lbl: 'تسريع تحصيل الفواتير (iDEAL)' },
                { val: '0 دقيقة', lbl: 'جهد يدوي في حساب الـ BTW' }
            ],
            challenge: 'التعامل مع آلاف الفواتير الشهرية وعقود الصيانة المتكررة وفق اللوائح الضريبية الهولندية الصارمة للـ Belastingdienst، مع صعوبة متابعة التحصيل اليدوي للشركات المتعاقدة.',
            solution: 'تطوير محرك مالي مخصص يربط مباشرة مع بوابات الدفع الهولندية (iDEAL / SEPA Direct Debit)، ويقوم بتوليد الإقرارات الضريبية تلقائياً بصيغة موحدة متوافقة مع مكاتب المحاسبة والتدقيق الهولندية.',
            roi: 'تحول دورة الفوترة إلى دورة آلية بالكامل تعمل في الخلفية دون أي تدخل بشري، مما مكن الإدارة من مضاعفة عدد العملاء دون الحاجة لتوظيف محاسبين إضافيين.'
        },
        buraq: {
            client: 'براق للخدمات اللوجستية والشحن الذكي',
            title: 'نظام ذكاء اصطناعي للتنبؤ بالمسارات وإدارة الأساطيل اللحظية',
            tag: 'Predictive AI & Logistics Ops',
            kpis: [
                { val: '22%', lbl: 'توفير في تكاليف استهلاك الوقود' },
                { val: '99.2%', lbl: 'التزام دقيق بمواعيد التسليم' },
                { val: '< 2 ثانية', lbl: 'استجابة التوجيه اللحظي للمركبات' }
            ],
            challenge: 'تذبذب أوقات التوصيل وارتفاع تكاليف الوقود بسبب عدم وجود رؤية تنبؤية للازدحامات وتوزيع الشحنات غير المتوازن بين السائقين.',
            solution: 'بناء خوارزمية ذكاء اصطناعي تنبؤية تقوم بتحليل بيانات المسارات والطقس وحجم الشحنات لحظياً، وإعادة توجيه الأسطول ديناميكياً مع لوحة تحكم فورية للإدارة.',
            roi: 'تقليص وقت الرحلات بنسبة 28% وزيادة رضا العملاء بنسبة 40%، مما أتاح للشركة توسيع أسطولها وزيادة عقود النقل B2B الكبرى.'
        }
    };

    // 1. Initialize DOM Elements
    function initEnterpriseSuite() {
        injectPDFModal();
        injectFloatingHub();
        injectGDPRBanner();
        injectSchedulerModal();
        injectReadinessModal();
        injectCaseStudyModal();
        attachEstimatorButton();
        injectHeaderDemoPill();
        bindCaseStudiesOnCards();
        checkURLParams();
    }

    // Attach PDF Button to Cost Estimator
    function attachEstimatorButton() {
        const actionsContainer = document.querySelector('.summary-actions');
        if (actionsContainer && !document.getElementById('estimatorPdfBtn')) {
            const pdfBtn = document.createElement('button');
            pdfBtn.type = 'button';
            pdfBtn.id = 'estimatorPdfBtn';
            pdfBtn.className = 'estimator-btn-pdf';
            pdfBtn.title = 'تصدير عرض سعر رسمي بصيغة PDF';
            pdfBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>تصدير عرض سعر رسمي (PDF)</span>
            `;
            pdfBtn.onclick = window.exportEstimatorPDF;
            actionsContainer.appendChild(pdfBtn);
        }
    }

    // Inject Live Demo Button in Header
    function injectHeaderDemoPill() {
        const actions = document.querySelector('.header-col-actions');
        if (actions && !document.getElementById('headerLiveDemoPill')) {
            const demoBtn = document.createElement('a');
            demoBtn.id = 'headerLiveDemoPill';
            demoBtn.href = window.location.pathname.includes('/en/') || window.location.pathname.includes('/nl/') ? '../demo.html' : 'demo.html';
            demoBtn.className = 'btn-live-sandbox-header';
            demoBtn.title = 'تجربة لوحة تحكم ERP السحابية الحية';
            demoBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <span>تجربة ERP السحابي ⚡</span>
            `;
            actions.insertBefore(demoBtn, actions.firstChild);
        }
    }

    // 2. Inject PDF Quotation Modal
    function injectPDFModal() {
        if (document.getElementById('esQuoteModalOverlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'esQuoteModalOverlay';
        overlay.className = 'es-modal-overlay';
        overlay.innerHTML = `
            <div class="es-quote-modal" role="dialog" aria-modal="true" aria-labelledby="esQuoteTitle">
                <div class="es-quote-toolbar">
                    <div class="es-quote-toolbar-title" id="esQuoteTitle">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        <span>عرض السعر المؤسسي الرسمي // S&R CoreSync B.V.</span>
                    </div>
                    <div class="es-toolbar-actions">
                        <button type="button" class="es-btn-tool es-btn-tool-print" onclick="window.printOfficialQuote()">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                            <span>طباعة / حفظ كـ PDF</span>
                        </button>
                        <button type="button" class="es-btn-tool es-btn-tool-close" onclick="window.closeQuoteModal()">إغلاق ✕</button>
                    </div>
                </div>

                <div class="es-quote-paper" id="esQuotePrintableArea">
                    <div class="es-quote-header">
                        <div class="es-quote-brand">
                            <h2>S&R CORESYNC SOLUTIONS</h2>
                            <p>Enterprise Cloud Architecture & Intelligent AI Systems</p>
                            <p style="font-size: 0.78rem; color: #a0aec0; margin-top: 2px;">Amsterdam HQ, The Netherlands | Global Enterprise Delivery</p>
                        </div>
                        <div class="es-quote-meta">
                            <span class="es-quote-ref" id="quoteRefNumber">REF-SR-2026-8941</span>
                            <div><strong>تاريخ الإصدار:</strong> <span id="quoteIssueDate"></span></div>
                            <div><strong>صلاحية العرض:</strong> 14 يوماً من تاريخه</div>
                        </div>
                    </div>

                    <div class="es-quote-section-title">
                        <span>تفاصيل عرض العمل والمواصفات المحددة</span>
                    </div>

                    <table class="es-quote-table">
                        <thead>
                            <tr>
                                <th>البند / المكون البرمجي</th>
                                <th>المواصفات الفنية</th>
                                <th>الجدول الزمني</th>
                                <th>التقدير المالي</th>
                            </tr>
                        </thead>
                        <tbody id="quoteTableBody"></tbody>
                    </table>

                    <div class="es-quote-total-box">
                        <div class="es-quote-total-card">
                            <div class="es-quote-total-row">
                                <span>المجموع الصافي:</span>
                                <span id="quoteSubtotal">€0</span>
                            </div>
                            <div class="es-quote-total-row">
                                <span>ضريبة القيمة المضافة (0% B2B EU):</span>
                                <span>€0.00</span>
                            </div>
                            <div class="es-quote-total-row grand-total">
                                <span>الإجمالي المقدر:</span>
                                <span id="quoteGrandTotal" style="color: #c5a880;">€0</span>
                            </div>
                        </div>
                    </div>

                    <div style="font-size: 0.78rem; color: #718096; line-height: 1.6; margin-bottom: 24px;">
                        * ملاحظة: هذا التقدير معتمد بموجب بروتوكول S&R للهندسة السحابية وأنظمة الـ ERP والذكاء الاصطناعي، ويخضع لاتفاقية مستوى الخدمة المؤسسية (SLA). يشمل العرض كافة اختبارات الحماية وتوافق معايير GDPR الأوروبية.
                    </div>

                    <div class="es-quote-signatures">
                        <div class="es-sig-block">
                            <div class="es-sig-title">الاعتماد التقني والهندسة السحابية</div>
                            <div class="es-sig-name">Eng. Mohammad Salim Aziza</div>
                            <div class="es-sig-role">Co-Founder & CTO // Lead Cloud Systems Architect</div>
                        </div>
                        <div class="es-sig-block">
                            <div class="es-sig-title">الإشراف المالي والأنظمة المؤسسية</div>
                            <div class="es-sig-name">Mr. Mohammad Raed Kaakeh</div>
                            <div class="es-sig-role">Co-Founder & CFO // Financial ERP Architect</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) window.closeQuoteModal();
        });
    }

    // 3. Inject Floating Hub (Feedback, Quiz, Scheduler)
    function injectFloatingHub() {
        if (document.getElementById('esFloatingSuite')) return;

        const hub = document.createElement('div');
        hub.id = 'esFloatingSuite';
        hub.className = 'es-floating-suite';
        hub.innerHTML = `
            <button type="button" class="es-feedback-fab" onclick="window.openReadinessModal()" title="قياس الجاهزية الرقمية لشركتكم">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                <span>قياس الجاهزية الرقمية 📊</span>
            </button>
            <button type="button" class="es-feedback-fab" onclick="window.openSchedulerModal()" title="حجز جلسة استشارية تنفيذية">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>حجز استشارة تنفيذية 📅</span>
            </button>
            <button type="button" class="es-feedback-fab" onclick="window.openFeedbackModal()" title="إرسال ملاحظة أو طلب تعديل مباشر">
                <span class="es-feedback-dot"></span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                <span>ملاحظات الزبون | Feedback</span>
            </button>
        `;
        document.body.appendChild(hub);

        // Feedback Modal
        const overlay = document.createElement('div');
        overlay.id = 'esFeedbackModalOverlay';
        overlay.className = 'es-modal-overlay';
        overlay.innerHTML = `
            <div class="es-feedback-modal" role="dialog" aria-modal="true">
                <div class="es-feedback-header">
                    <h3>
                        <span class="es-feedback-dot"></span>
                        <span>بوابة ملاحظات الزبون المباشرة</span>
                    </h3>
                    <button type="button" class="es-btn-tool es-btn-tool-close" onclick="window.closeFeedbackModal()">✕</button>
                </div>
                <div class="es-feedback-body">
                    <p style="font-size: 0.82rem; color: rgba(255,255,255,0.7); margin: 0 0 10px;">
                        شارك ملاحظاتك أو طلبات التعديل مباشرة مع م. سليم ليتم تنفيذها في النسخة التجريبية الحية.
                    </p>

                    <div class="es-input-group">
                        <label>الاسم أو المؤسسة:</label>
                        <input type="text" id="fbClientName" class="es-input-field" placeholder="مثال: شركة الأفق للتجارة">
                    </div>

                    <div class="es-input-group">
                        <label>القسم المستهدف بالملاحظة:</label>
                        <select id="fbTargetSection" class="es-select-field">
                            <option value="الواجهة الرئيسية (Hero Section)">الواجهة الرئيسية (Hero Section)</option>
                            <option value="كروت الخدمات وباقات دانا">كروت الخدمات وباقات دانا</option>
                            <option value="حاسبة التكلفة والأسعار">حاسبة التكلفة والأسعار</option>
                            <option value="المشاريع السابقة (Portfolio)">المشاريع السابقة (Portfolio)</option>
                            <option value="قسم الشركاء والمؤسسين">قسم الشركاء والمؤسسين</option>
                            <option value="أخرى / فكرة عامة">أخرى / فكرة عامة</option>
                        </select>
                    </div>

                    <div class="es-input-group">
                        <label>نوع الملاحظة:</label>
                        <select id="fbCategory" class="es-select-field">
                            <option value="🎨 تعديل تصميم وألوان">🎨 تعديل تصميم وألوان</option>
                            <option value="✍️ تعديل نصوص وصياغة">✍️ تعديل نصوص وصياغة</option>
                            <option value="⚡ طلب ميزة إضافية">⚡ طلب ميزة إضافية</option>
                            <option value="🐞 ملاحظة فنية / استجابة">🐞 ملاحظة فنية / استجابة</option>
                        </select>
                    </div>

                    <div class="es-input-group">
                        <label>نص الملاحظة بالتفصيل:</label>
                        <textarea id="fbDetails" class="es-textarea-field" rows="3" placeholder="اكتب تفاصيل التعديل المطلوب هنا..."></textarea>
                    </div>

                    <div class="es-feedback-actions">
                        <button type="button" class="es-btn-send-wa" onclick="window.sendFeedbackViaWhatsApp()">
                            <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M16.02 3.2a12.7 12.7 0 0 0-10.95 19.14L3.2 28.8l6.62-1.74A12.8 12.8 0 1 0 16.02 3.2Zm0 23.24a10.48 10.48 0 0 1-5.35-1.46l-.38-.23-3.93 1.03 1.05-3.83-.25-.4a10.5 10.5 0 1 1 8.86 4.89Zm5.76-7.85c-.32-.16-1.9-.94-2.19-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08a8.65 8.65 0 0 1-2.55-1.57 9.57 9.57 0 0 1-1.77-2.2c-.18-.32 0-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.39-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.13 1.32 3.35c.16.21 2.27 3.46 5.5 4.85.77.33 1.37.53 1.84.68.77.24 1.47.2 2.03.12.62-.09 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z"/></svg>
                            <span>إرسال فوراً عبر واتساب</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) window.closeFeedbackModal();
        });
    }

    // 4. Inject Executive Meeting Scheduler Modal
    function injectSchedulerModal() {
        if (document.getElementById('esSchedulerModalOverlay')) return;

        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Amsterdam';

        const overlay = document.createElement('div');
        overlay.id = 'esSchedulerModalOverlay';
        overlay.className = 'es-modal-overlay';
        overlay.innerHTML = `
            <div class="es-scheduler-modal" role="dialog" aria-modal="true">
                <div class="es-feedback-header">
                    <h3>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>مجدول الاستشارات التنفيذية // S&R Executive Advisory</span>
                    </h3>
                    <button type="button" class="es-btn-tool es-btn-tool-close" onclick="window.closeSchedulerModal()">✕</button>
                </div>
                <div class="es-feedback-body">
                    <p style="font-size: 0.82rem; color: rgba(255,255,255,0.7); margin: 0;">
                        احجز جلسة استشارية أولية مجانية مدتها 30 دقيقة عبر Zoom لمناقشة بنيتكم السحابية أو متطلبات الـ ERP.
                    </p>

                    <div class="es-input-group">
                        <label>اختر المستشار التنفيذي:</label>
                        <div class="es-consultant-grid">
                            <div class="es-consultant-card active" onclick="window.selectConsultant('salim', this)">
                                <div class="es-consultant-name">م. سليم عزيزة</div>
                                <div class="es-consultant-role">CTO • الأنظمة والذكاء الاصطناعي</div>
                            </div>
                            <div class="es-consultant-card" onclick="window.selectConsultant('raed', this)">
                                <div class="es-consultant-name">أ. رائد كعكة</div>
                                <div class="es-consultant-role">CFO • الحلول المالية وERP</div>
                            </div>
                            <div class="es-consultant-card" onclick="window.selectConsultant('both', this)">
                                <div class="es-consultant-name">جلسة مشتركة</div>
                                <div class="es-consultant-role">استشارة تقنية ومالية شاملة</div>
                            </div>
                        </div>
                    </div>

                    <div style="font-size: 0.75rem; color: var(--es-cyan); display: flex; align-items: center; gap: 6px;">
                        <span>🌐 منطقتك الزمنية المكتشفة تلقائياً:</span>
                        <strong>${tz}</strong>
                    </div>

                    <div class="es-input-group">
                        <label>اختر اليوم والوقت المفضل (بتوقيتك المحلي):</label>
                        <div class="es-slots-grid">
                            <button type="button" class="es-slot-btn active" onclick="window.selectSlot('غداً - 11:00 صباحاً', this)">غداً 11:00 ص</button>
                            <button type="button" class="es-slot-btn" onclick="window.selectSlot('غداً - 03:00 مساءً', this)">غداً 03:00 م</button>
                            <button type="button" class="es-slot-btn" onclick="window.selectSlot('بعد غد - 01:00 ظهراً', this)">بعد غد 01:00 م</button>
                            <button type="button" class="es-slot-btn" onclick="window.selectSlot('بعد غد - 05:00 مساءً', this)">بعد غد 05:00 م</button>
                            <button type="button" class="es-slot-btn" onclick="window.selectSlot('الأسبوع القادم - صباحاً', this)">الأسبوع القادم (ص)</button>
                            <button type="button" class="es-slot-btn" onclick="window.selectSlot('الأسبوع القادم - مساءً', this)">الأسبوع القادم (م)</button>
                        </div>
                    </div>

                    <div class="es-input-group">
                        <label>الاسم والشركة:</label>
                        <input type="text" id="schClientName" class="es-input-field" placeholder="مثال: م. أحمد - المدير العام لشركة ...">
                    </div>

                    <div class="es-input-group">
                        <label>موضوع الاستشارة الأساسي:</label>
                        <input type="text" id="schTopic" class="es-input-field" placeholder="مثال: ترقية نظام الـ ERP السحابي وربط الفروع">
                    </div>

                    <div class="es-feedback-actions">
                        <button type="button" class="es-btn-send-wa" onclick="window.confirmScheduler()">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                            <span>تأكيد الحجز وجدولة الموعد فوراً</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) window.closeSchedulerModal();
        });
    }

    // 5. Inject AI & ERP Digital Readiness Assessment Modal
    function injectReadinessModal() {
        if (document.getElementById('esReadinessModalOverlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'esReadinessModalOverlay';
        overlay.className = 'es-modal-overlay';
        overlay.innerHTML = `
            <div class="es-readiness-modal" role="dialog" aria-modal="true">
                <div class="es-feedback-header">
                    <h3>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                        <span>مقياس الجاهزية الرقمية والوفر المالي // CoreSync AI Assessment</span>
                    </h3>
                    <button type="button" class="es-btn-tool es-btn-tool-close" onclick="window.closeReadinessModal()">✕</button>
                </div>
                <div class="es-feedback-body" id="quizContainer">
                    <div class="es-quiz-progress-bar">
                        <div class="es-quiz-progress-fill" id="quizProgressFill"></div>
                    </div>
                    <div id="quizQuestionArea">
                        <!-- Questions injected dynamically -->
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) window.closeReadinessModal();
        });
    }

    // 6. Inject Enterprise Case Studies Modal
    function injectCaseStudyModal() {
        if (document.getElementById('esCaseStudyModalOverlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'esCaseStudyModalOverlay';
        overlay.className = 'es-modal-overlay';
        overlay.innerHTML = `
            <div class="es-casestudy-modal" role="dialog" aria-modal="true">
                <div class="es-feedback-header">
                    <h3>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        <span>دراسة حالة موثقة وعائد الاستثمار // Enterprise Case Study</span>
                    </h3>
                    <button type="button" class="es-btn-tool es-btn-tool-close" onclick="window.closeCaseStudyModal()">✕</button>
                </div>
                <div class="es-feedback-body" id="caseStudyBody">
                    <!-- Populated dynamically -->
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) window.closeCaseStudyModal();
        });
    }

    // 7. Inject EU GDPR Cookie Banner
    function injectGDPRBanner() {
        if (localStorage.getItem('coresync_gdpr_status')) return;
        if (document.getElementById('esGdprBanner')) return;

        const banner = document.createElement('div');
        banner.id = 'esGdprBanner';
        banner.className = 'es-gdpr-banner active';
        banner.innerHTML = `
            <div class="es-gdpr-content">
                <div class="es-gdpr-title">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <span>الامتثال للائحة حماية البيانات الأوروبية (EU GDPR)</span>
                </div>
                <p class="es-gdpr-text">
                    نحن نستخدم ملفات تعريف الارتباط والتقنيات السحابية الأساسية في منصة S&R CoreSync لضمان سرعة التحميل وتجربة تصفح آمنة ومطابقة للقوانين الهولندية والأوروبية.
                </p>
            </div>
            <div class="es-gdpr-actions">
                <button type="button" class="es-btn-gdpr-accept" onclick="window.acceptGDPR()">قبول الكل (Accept All)</button>
                <button type="button" class="es-btn-gdpr-decline" onclick="window.declineGDPR()">الأساسية فقط</button>
            </div>
        `;
        document.body.appendChild(banner);
    }

    // Bind Case Studies on existing portfolio buttons
    function bindCaseStudiesOnCards() {
        document.querySelectorAll('.work-explore-btn').forEach((btn, idx) => {
            const keys = ['almarai', 'schoon365', 'buraq'];
            const key = keys[idx % keys.length];
            btn.onclick = function (e) {
                e.preventDefault();
                window.openCaseStudy(key);
            };
        });
    }

    function checkURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('feedback') || urlParams.get('preview') === 'client') {
            setTimeout(() => window.openFeedbackModal(), 800);
        }
        if (urlParams.has('scheduler')) {
            setTimeout(() => window.openSchedulerModal(), 800);
        }
        if (urlParams.has('assessment')) {
            setTimeout(() => window.openReadinessModal(), 800);
        }
    }

    // ==========================================
    // Window Global Functions
    // ==========================================

    window.exportEstimatorPDF = function () {
        const state = window._estimatorState || {
            type: { title: 'هوية بصرية وتطوير متكامل', price: 950, days: '7 - 10 أيام عمل' },
            pages: { title: '1 - 5 صفحات رئيسية', price: 0 },
            lang: { title: 'لغة واحدة', price: 0 },
            pay: { title: 'بدون دفع إلكتروني', price: 0 },
            speed: { title: 'تسليم قياسي', price: 0 }
        };

        const total = Object.values(state).reduce((sum, g) => sum + (g.price || 0), 0);
        const now = new Date();
        const issueDate = now.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
        const ref = 'CSR-' + now.getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

        document.getElementById('quoteRefNumber').textContent = ref;
        document.getElementById('quoteIssueDate').textContent = issueDate;

        const tbody = document.getElementById('quoteTableBody');
        tbody.innerHTML = `
            <tr>
                <td><strong>نوع الحزمة والمشروع</strong></td>
                <td>${state.type.title}</td>
                <td>${state.type.days || 'حسب الاتفاق'}</td>
                <td>€${(state.type.price || total).toLocaleString('en')}</td>
            </tr>
            <tr>
                <td><strong>نطاق الصفحات والتنفيذ</strong></td>
                <td>${state.pages.title}</td>
                <td>مشمول</td>
                <td>€${(state.pages.price || 0).toLocaleString('en')}</td>
            </tr>
            <tr>
                <td><strong>منظومة اللغات والترجمة</strong></td>
                <td>${state.lang.title}</td>
                <td>مشمول</td>
                <td>€${(state.lang.price || 0).toLocaleString('en')}</td>
            </tr>
            <tr>
                <td><strong>بوابات الدفع والربط البنكي</strong></td>
                <td>${state.pay.title}</td>
                <td>مشمول</td>
                <td>€${(state.pay.price || 0).toLocaleString('en')}</td>
            </tr>
            <tr>
                <td><strong>معيار وسرعة التسليم</strong></td>
                <td>${state.speed.title}</td>
                <td>مشمول</td>
                <td>€${(state.speed.price || 0).toLocaleString('en')}</td>
            </tr>
        `;

        document.getElementById('quoteSubtotal').textContent = `€${total.toLocaleString('en')}`;
        document.getElementById('quoteGrandTotal').textContent = `€${total.toLocaleString('en')}`;

        const overlay = document.getElementById('esQuoteModalOverlay');
        overlay.classList.add('active');
    };

    window.closeQuoteModal = () => document.getElementById('esQuoteModalOverlay')?.classList.remove('active');
    window.printOfficialQuote = () => window.print();

    window.openFeedbackModal = () => document.getElementById('esFeedbackModalOverlay')?.classList.add('active');
    window.closeFeedbackModal = () => document.getElementById('esFeedbackModalOverlay')?.classList.remove('active');

    window.sendFeedbackViaWhatsApp = function () {
        const clientName = document.getElementById('fbClientName').value.trim() || 'عميل تجريبي';
        const targetSection = document.getElementById('fbTargetSection').value;
        const category = document.getElementById('fbCategory').value;
        const details = document.getElementById('fbDetails').value.trim();

        if (!details) {
            alert('يرجى كتابة نص الملاحظة قبل الإرسال.');
            return;
        }

        const msg = [
            `*💡 ملاحظة جديدة على النسخة التجريبية – S&R CoreSync*`,
            `👤 *من:* ${clientName}`,
            `📍 *القسم:* ${targetSection}`,
            `🏷️ *النوع:* ${category}`,
            `📝 *الملاحظة:* ${details}`,
            `🔗 *الرابط:* ${window.location.href}`
        ].join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
        window.closeFeedbackModal();
    };

    // Scheduler Handlers
    let selectedConsultant = 'salim';
    let selectedSlot = 'غداً - 11:00 صباحاً';

    window.openSchedulerModal = () => document.getElementById('esSchedulerModalOverlay')?.classList.add('active');
    window.closeSchedulerModal = () => document.getElementById('esSchedulerModalOverlay')?.classList.remove('active');

    window.selectConsultant = function (type, el) {
        selectedConsultant = type;
        document.querySelectorAll('.es-consultant-card').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
    };

    window.selectSlot = function (slot, el) {
        selectedSlot = slot;
        document.querySelectorAll('.es-slot-btn').forEach(b => b.classList.remove('active'));
        el.classList.add('active');
    };

    window.confirmScheduler = function () {
        const name = document.getElementById('schClientName').value.trim() || 'شخصية قيادية';
        const topic = document.getElementById('schTopic').value.trim() || 'استشارة سحابية وERP';
        const consultantNames = {
            salim: 'م. سليم عزيزة (CTO السحابي والذكاء الاصطناعي)',
            raed: 'أ. رائد كعكة (CFO الأنظمة المالية وERP)',
            both: 'جلسة استشارية مشتركة (م. سليم + أ. رائد)'
        };

        const msg = [
            `*📅 طلب حجز جلسة استشارية تنفيذية – S&R CoreSync*`,
            `👤 *الاسم / المنشأة:* ${name}`,
            `💼 *المستشار المطلوب:* ${consultantNames[selectedConsultant]}`,
            `⏰ *الموعد المقترح:* ${selectedSlot}`,
            `🎯 *موضوع الاستشارة:* ${topic}`,
            `🌐 *المنطقة الزمنية:* ${Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Amsterdam'}`
        ].join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
        window.closeSchedulerModal();
    };

    // Assessment Quiz Handlers
    window.openReadinessModal = function () {
        currentQuizStep = 0;
        renderQuizStep();
        document.getElementById('esReadinessModalOverlay')?.classList.add('active');
    };

    window.closeReadinessModal = () => document.getElementById('esReadinessModalOverlay')?.classList.remove('active');

    function renderQuizStep() {
        const fill = document.getElementById('quizProgressFill');
        const area = document.getElementById('quizQuestionArea');
        if (!area || !fill) return;

        if (currentQuizStep >= QUIZ_QUESTIONS.length) {
            renderQuizResults();
            return;
        }

        const q = QUIZ_QUESTIONS[currentQuizStep];
        fill.style.width = `${((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100}%`;

        area.innerHTML = `
            <div style="font-size: 0.75rem; color: var(--es-cyan); font-weight: 700; margin-bottom: 6px;">
                السؤال ${currentQuizStep + 1} من ${QUIZ_QUESTIONS.length}
            </div>
            <h4 style="color: #fff; font-size: 1.05rem; font-weight: 800; margin-bottom: 16px;">
                ${q.title}
            </h4>
            <div class="es-quiz-options">
                ${q.options.map((opt, i) => `
                    <div class="es-quiz-option" onclick="window.chooseQuizOption(${opt.score}, ${opt.saving})">
                        <span>${opt.text}</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                `).join('')}
            </div>
        `;
    }

    window.chooseQuizOption = function (score, saving) {
        quizAnswers[currentQuizStep] = { score, saving };
        currentQuizStep++;
        renderQuizStep();
    };

    function renderQuizResults() {
        const area = document.getElementById('quizQuestionArea');
        const totalScore = Object.values(quizAnswers).reduce((sum, a) => sum + a.score, 0);
        const monthlySaving = Object.values(quizAnswers).reduce((sum, a) => sum + a.saving, 0);
        const scorePercentage = Math.min(95, Math.max(35, totalScore));

        area.innerHTML = `
            <div style="text-align: center; padding: 10px 0;">
                <div class="es-quiz-score-circle">
                    <span class="es-quiz-score-val">${scorePercentage}%</span>
                    <span class="es-quiz-score-lbl">الجاهزية الرقمية</span>
                </div>
                <h3 style="color: #fff; font-size: 1.2rem; font-weight: 800; margin-bottom: 8px;">
                    تقرير الجدوى والتحول الرقمي لمنشأتكم
                </h3>
                <p style="color: rgba(255,255,255,0.78); font-size: 0.85rem; line-height: 1.6; max-width: 480px; margin: 0 auto 16px;">
                    بناءً على إجاباتكم، تمتلك منشأتكم أرضية ممتازة للتطوير، مع وجود <strong>فرصة مؤكدة لوفر تشغيلي يقدر بـ €${monthlySaving.toLocaleString('en')} شهرياً</strong> عبر أتمتة الـ ERP ودمج الذكاء الاصطناعي مع CoreSync.
                </p>
                <div class="es-casestudy-kpi-grid" style="margin-bottom: 20px;">
                    <div class="es-casestudy-kpi">
                        <div class="val">€${monthlySaving.toLocaleString('en')}</div>
                        <div class="lbl">وفر شهري مقدر</div>
                    </div>
                    <div class="es-casestudy-kpi">
                        <div class="val">4.5x</div>
                        <div class="lbl">تسريع التقارير المالية</div>
                    </div>
                    <div class="es-casestudy-kpi">
                        <div class="val">100%</div>
                        <div class="lbl">أتمتة سحابية موثوقة</div>
                    </div>
                </div>
                <button type="button" class="es-btn-send-wa" style="width: 100%;" onclick="window.bookAssessmentConsultation(${scorePercentage}, ${monthlySaving})">
                    <span>حجز جلسة لمناقشة خطة التحول المقترحة 🚀</span>
                </button>
            </div>
        `;
    }

    window.bookAssessmentConsultation = function (score, saving) {
        const msg = [
            `*📊 نتيجة تقييم الجاهزية الرقمية – S&R CoreSync*`,
            `🎯 *نسبة الجاهزية الحالية:* ${score}%`,
            `💰 *الوفر الشهري المقدر:* €${saving.toLocaleString('en')}`,
            `🤝 نرغب في مناقشة خطة العمل وأتمتة المنظومة معكم.`
        ].join('\n');
        window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
        window.closeReadinessModal();
    };

    // Case Study Modal Handlers
    window.openCaseStudy = function (key) {
        const data = CASE_STUDIES[key] || CASE_STUDIES.almarai;
        const body = document.getElementById('caseStudyBody');
        if (!body) return;

        body.innerHTML = `
            <div class="es-casestudy-hero">
                <span class="es-casestudy-tag">${data.tag}</span>
                <h3 style="color: #fff; font-size: 1.15rem; font-weight: 800; margin: 4px 0 6px;">${data.title}</h3>
                <p style="font-size: 0.8rem; color: var(--es-gold-light); margin: 0;">العميل / القطاع: ${data.client}</p>
            </div>
            <div style="padding: 16px 20px;">
                <div class="es-casestudy-kpi-grid">
                    ${data.kpis.map(k => `
                        <div class="es-casestudy-kpi">
                            <div class="val">${k.val}</div>
                            <div class="lbl">${k.lbl}</div>
                        </div>
                    `).join('')}
                </div>

                <div style="margin-bottom: 14px;">
                    <h5 style="color: #f87171; font-size: 0.82rem; font-weight: 800; margin-bottom: 4px;">⚠️ التحدي التشغيلي والمالي:</h5>
                    <p style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.5; margin: 0;">${data.challenge}</p>
                </div>

                <div style="margin-bottom: 14px;">
                    <h5 style="color: var(--es-cyan); font-size: 0.82rem; font-weight: 800; margin-bottom: 4px;">⚡ الحل الهندسي من CoreSync:</h5>
                    <p style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.5; margin: 0;">${data.solution}</p>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 16px;">
                    <h5 style="color: #34d399; font-size: 0.82rem; font-weight: 800; margin-bottom: 4px;">📈 الأثر المالي وعائد الاستثمار (ROI):</h5>
                    <p style="font-size: 0.8rem; color: #ecfdf5; line-height: 1.5; margin: 0;">${data.roi}</p>
                </div>

                <button type="button" class="es-btn-send-wa" style="width: 100%;" onclick="window.discussProjectWithTeam('${data.client}')">
                    <span>طلب دراسة حل مماثل لمشروعي عبر WhatsApp</span>
                </button>
            </div>
        `;

        document.getElementById('esCaseStudyModalOverlay')?.classList.add('active');
    };

    window.closeCaseStudyModal = () => document.getElementById('esCaseStudyModalOverlay')?.classList.remove('active');

    window.discussProjectWithTeam = function (projectName) {
        const msg = `مرحباً S&R CoreSync، اطلعت على دراسة الحالة الخاصة بـ (${projectName}) وأرغب في مناقشة حل سحابي/مالي مماثل لشركتنا.`;
        window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
        window.closeCaseStudyModal();
    };

    window.acceptGDPR = function () {
        localStorage.setItem('coresync_gdpr_status', 'accepted');
        document.getElementById('esGdprBanner')?.classList.remove('active');
    };

    window.declineGDPR = function () {
        localStorage.setItem('coresync_gdpr_status', 'essential_only');
        document.getElementById('esGdprBanner')?.classList.remove('active');
    };

    // Auto-bootstrap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEnterpriseSuite);
    } else {
        initEnterpriseSuite();
    }

})();
