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

    /* =====================================================================
       FEATURE 1: CoreSync AI Concierge Widget
       ===================================================================== */
    const AI_KB = {
        cloud: {
            keywords: ['cloud', 'سحاب', 'aws', 'azure', 'gcp', 'microservices', 'kubernetes', 'devops', 'بنية', 'خوادم', 'hosting'],
            ar: 'نصمم بنى سحابية Hybrid/Multi-Cloud ذات توافر عالٍ (99.99%) على أفضل مزودي الخدمة العالميين. م. سليم عزيزة يقود هذا المجال بخبرة 10+ سنوات على AWS, Azure وGCP.',
            en: 'We architect Hybrid/Multi-Cloud solutions with 99.99% SLA on AWS, Azure & GCP. Led by Eng. Salim Aziza with 10+ years of enterprise cloud expertise.',
            nl: 'Wij ontwerpen Hybrid/Multi-Cloud-architecturen met 99,99% SLA op AWS, Azure en GCP, geleid door Ir. Salim Aziza.'
        },
        erp: {
            keywords: ['erp', 'odoo', 'oracle', 'sap', 'محاسبة', 'accounting', 'مالية', 'finance', 'invoic', 'فاتورة', 'belastingdienst', 'btw', 'vat', 'ضريبة'],
            ar: 'نقدم حلول ERP متكاملة تشمل Odoo وOracle وحلولاً مخصصة، مع خبرة في الامتثال الضريبي الأوروبي (BTW/VAT) والـ IFRS. أ. رائد كعكة هو معماري ERP الرئيسي.',
            en: 'We deliver ERP solutions including Odoo, Oracle, and custom systems. Expert in EU tax compliance (BTW/VAT), IFRS, and multi-currency financials.',
            nl: 'Wij leveren ERP-oplossingen waaronder Odoo en Oracle, inclusief BTW-compliance en IFRS-standaarden onder leiding van dhr. Raed Kaakeh.'
        },
        ai: {
            keywords: ['ai', 'ذكاء', 'artificial', 'machine learning', 'تعلم', 'nlp', 'automation', 'أتمتة', 'predict', 'تنبؤ'],
            ar: 'نبني نماذج ذكاء اصطناعي مخصصة (RAG, NLP, Predictive Analytics) مدمجة في أنظمة ERP السحابية لدعم القرار وأتمتة العمليات.',
            en: 'We build custom AI solutions (RAG pipelines, NLP, Predictive Analytics) integrated directly into cloud ERP systems for intelligent decision support.',
            nl: 'Wij ontwikkelen AI-oplossingen (RAG, NLP, Predictive Analytics) geïntegreerd in cloud-ERP-systemen voor geautomatiseerde besluitvorming.'
        },
        pricing: {
            keywords: ['price', 'cost', 'سعر', 'تكلفة', 'quote', 'عرض', 'prijs', 'kosten', 'offer', 'budget'],
            ar: 'يمكنك طلب عرض سعر رسمي مفصل مباشرةً من خلال أداة "مولّد عرض السعر" في الموقع، أو التواصل مع فريقنا عبر WhatsApp أو البريد الإلكتروني لجدولة اجتماع استشاري مجاني.',
            en: 'Request a detailed official quote directly via our Quote Generator tool on the site, or contact our team via WhatsApp for a free consultation meeting.',
            nl: 'Vraag een gedetailleerde offerte aan via onze offertetool op de website, of neem contact op via WhatsApp voor een gratis consultatie.'
        },
        contact: {
            keywords: ['contact', 'تواصل', 'whatsapp', 'email', 'phone', 'هاتف', 'بريد', 'reach', 'meeting', 'اجتماع', 'schedule', 'afspraak'],
            ar: 'فريقنا متاح 24/6. تواصل معنا:\n📱 WhatsApp: +31 6 87764998\n📧 info@coresync.solutions\n🌐 هولندا – الشرق الأوسط – أوروبا',
            en: 'Our team is available 24/6:\n📱 WhatsApp: +31 6 87764998\n📧 info@coresync.solutions\n🌐 Netherlands · Middle East · Europe',
            nl: 'Ons team is beschikbaar 24/6:\n📱 WhatsApp: +31 6 87764998\n📧 info@coresync.solutions\n🌐 Nederland · Midden-Oosten · Europa'
        },
        default: {
            ar: 'شكراً لتواصلك مع CoreSync AI. يسعدني مساعدتك في كل ما يخص الحلول السحابية وأنظمة ERP والذكاء الاصطناعي. اكتب سؤالك أو اختر أحد الخيارات السريعة.',
            en: 'Thank you for contacting CoreSync AI. I\'m here to help with cloud solutions, ERP systems, AI integration, and more. Type your question or choose a quick option.',
            nl: 'Bedankt voor uw contact met CoreSync AI. Ik help u graag met cloudoplossingen, ERP-systemen en AI-integratie. Typ uw vraag of kies een snelle optie.'
        }
    };

    function detectLang() {
        const lang = document.documentElement.lang || 'ar';
        if (lang.startsWith('en')) return 'en';
        if (lang.startsWith('nl')) return 'nl';
        return 'ar';
    }

    function aiGetResponse(input) {
        const lang = detectLang();
        const q = input.toLowerCase();
        for (const key in AI_KB) {
            if (key === 'default') continue;
            if (AI_KB[key].keywords.some(kw => q.includes(kw))) {
                return AI_KB[key][lang] || AI_KB[key].ar;
            }
        }
        return AI_KB.default[lang] || AI_KB.default.ar;
    }

    function injectAIConcierge() {
        if (document.getElementById('esAiFab')) return;
        const lang = detectLang();
        const labels = {
            ar: { name: 'CoreSync AI Concierge', status: 'متاح الآن', placeholder: 'اكتب سؤالك...', send: 'إرسال', quick: ['☁️ الحلول السحابية', '💼 أنظمة ERP', '🤖 الذكاء الاصطناعي', '💰 طلب عرض سعر', '📞 تواصل معنا'] },
            en: { name: 'CoreSync AI Concierge', status: 'Online now', placeholder: 'Ask me anything...', send: 'Send', quick: ['☁️ Cloud Solutions', '💼 ERP Systems', '🤖 AI Integration', '💰 Request a Quote', '📞 Contact Us'] },
            nl: { name: 'CoreSync AI Concierge', status: 'Nu online', placeholder: 'Stel uw vraag...', send: 'Versturen', quick: ['☁️ Cloudoplossingen', '💼 ERP-systemen', '🤖 AI-integratie', '💰 Offerte aanvragen', '📞 Neem contact op'] }
        };
        const lbl = labels[lang] || labels.ar;
        const welcomeMsg = AI_KB.default[lang] || AI_KB.default.ar;

        const fab = document.createElement('button');
        fab.id = 'esAiFab';
        fab.className = 'es-ai-fab';
        fab.setAttribute('aria-label', 'Open AI Concierge');
        fab.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.6 5.9-4 7.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.5A9 9 0 0 1 3 11a9 9 0 0 1 9-9z"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>`;
        fab.onclick = () => {
            const win = document.getElementById('esAiChatWindow');
            win && win.classList.toggle('active');
        };

        const win = document.createElement('div');
        win.id = 'esAiChatWindow';
        win.className = 'es-ai-chat-window';
        win.innerHTML = `
            <div class="es-ai-chat-header">
                <div class="es-ai-avatar">🤖</div>
                <div class="es-ai-chat-info">
                    <h4>${lbl.name}</h4>
                    <span>${lbl.status}</span>
                </div>
                <button onclick="document.getElementById('esAiChatWindow').classList.remove('active')" style="margin-left:auto;background:none;border:none;color:rgba(255,255,255,0.5);cursor:pointer;font-size:1.2rem;line-height:1;">✕</button>
            </div>
            <div class="es-ai-messages" id="esAiMessages">
                <div class="es-ai-msg es-ai-msg-bot">${welcomeMsg}</div>
            </div>
            <div class="es-ai-quick-replies" id="esAiQuickReplies">
                ${lbl.quick.map(q => `<button class="es-ai-quick-btn" onclick="window.aiSendMessage('${q}')">${q}</button>`).join('')}
            </div>
            <div class="es-ai-input-row">
                <input class="es-ai-input" id="esAiInput" type="text" placeholder="${lbl.placeholder}" />
                <button class="es-ai-send-btn" onclick="window.aiSendFromInput()" title="${lbl.send}">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
            </div>
        `;

        document.body.appendChild(fab);
        document.body.appendChild(win);

        const input = document.getElementById('esAiInput');
        if (input) {
            input.addEventListener('keydown', (e) => { if (e.key === 'Enter') window.aiSendFromInput(); });
        }
    }

    window.aiSendMessage = function(text) {
        const msgs = document.getElementById('esAiMessages');
        if (!msgs) return;
        const userEl = document.createElement('div');
        userEl.className = 'es-ai-msg es-ai-msg-user';
        userEl.textContent = text;
        msgs.appendChild(userEl);
        msgs.scrollTop = msgs.scrollHeight;

        // Typing indicator
        const typingEl = document.createElement('div');
        typingEl.className = 'es-ai-msg es-ai-msg-bot';
        typingEl.id = 'esAiTyping';
        typingEl.innerHTML = '⋯';
        msgs.appendChild(typingEl);
        msgs.scrollTop = msgs.scrollHeight;

        setTimeout(() => {
            const typing = document.getElementById('esAiTyping');
            if (typing) {
                typing.removeAttribute('id');
                typing.innerHTML = aiGetResponse(text).replace(/\n/g, '<br>');
                msgs.scrollTop = msgs.scrollHeight;
            }
        }, 700 + Math.random() * 400);

        const quickReplies = document.getElementById('esAiQuickReplies');
        if (quickReplies) quickReplies.style.display = 'none';
    };

    window.aiSendFromInput = function() {
        const input = document.getElementById('esAiInput');
        if (!input || !input.value.trim()) return;
        window.aiSendMessage(input.value.trim());
        input.value = '';
    };

    /* =====================================================================
       FEATURE 2: Client Project Live Status Tracker
       ===================================================================== */
    const PROJECT_DB = {
        'CSN-2024-001': {
            client: '365 SCHOON B.V.', service: 'Dutch Tax & ERP Automation',
            completion: 100,
            phases: [
                { title: 'Discovery & Requirements', sub: 'مكتمل – 15 يناير 2024', status: 'done', pct: 100 },
                { title: 'ERP Configuration & BTW Engine', sub: 'مكتمل – 28 فبراير 2024', status: 'done', pct: 100 },
                { title: 'iDEAL Payment Integration', sub: 'مكتمل – 15 مارس 2024', status: 'done', pct: 100 },
                { title: 'UAT & Go-Live', sub: 'مكتمل – 01 أبريل 2024', status: 'done', pct: 100 }
            ]
        },
        'CSN-2024-087': {
            client: 'براق للخدمات اللوجستية', service: 'Predictive AI & Fleet Management',
            completion: 72,
            phases: [
                { title: 'AI Model Training & Data Pipeline', sub: 'مكتمل – 10 أغسطس 2024', status: 'done', pct: 100 },
                { title: 'Real-time Routing Engine', sub: 'مكتمل – 01 سبتمبر 2024', status: 'done', pct: 100 },
                { title: 'Fleet Dashboard & Mobile App', sub: 'جارٍ الآن – التسليم في 20 أكتوبر 2024', status: 'active', pct: 72 },
                { title: 'Training & Handover', sub: 'مجدول – نوفمبر 2024', status: 'pending', pct: 0 }
            ]
        },
        'CSN-2025-014': {
            client: 'European Logistics Chain', service: 'Cloud ERP & Microservices',
            completion: 45,
            phases: [
                { title: 'Cloud Architecture Design', sub: 'مكتمل – 12 مارس 2025', status: 'done', pct: 100 },
                { title: 'Microservices Development', sub: 'جارٍ الآن – الاكتمال 60%', status: 'active', pct: 60 },
                { title: 'Data Migration & Sync', sub: 'مجدول – ديسمبر 2025', status: 'pending', pct: 0 },
                { title: 'Multi-Country Go-Live', sub: 'مجدول – يناير 2026', status: 'pending', pct: 0 }
            ]
        }
    };

    function injectTrackerModal() {
        if (document.getElementById('esTrackerModal')) return;
        const overlay = document.createElement('div');
        overlay.id = 'esTrackerModal';
        overlay.className = 'es-modal-overlay';
        overlay.style.display = 'none';
        overlay.innerHTML = `
            <div class="es-modal-inner" style="max-width:660px;" role="dialog" aria-label="Project Status Tracker">
                <div class="es-modal-header">
                    <div class="es-modal-header-left">
                        <div class="es-modal-icon" style="background:linear-gradient(135deg,rgba(56,189,248,0.2),rgba(56,189,248,0.05));border-color:rgba(56,189,248,0.3);">📡</div>
                        <div>
                            <h2 class="es-modal-title">متابعة مشروعك اللحظية</h2>
                            <p class="es-modal-subtitle">Project Live Status Tracker</p>
                        </div>
                    </div>
                    <button class="es-modal-close" onclick="window.closeTrackerModal()" aria-label="Close">✕</button>
                </div>
                <div class="es-modal-body">
                    <div class="es-currency-switcher-widget" style="margin-bottom:14px;">
                        <span class="es-currency-switcher-label">أدخل رمز المشروع الخاص بك للاطلاع على آخر التحديثات</span>
                        <span class="es-vat-badge">LIVE</span>
                    </div>
                    <div class="es-tracker-search">
                        <input type="text" id="esTrackerCodeInput" placeholder="CSN-2024-087" />
                        <button onclick="window.lookupProject()">بحث</button>
                    </div>
                    <div id="esTrackerResult"></div>
                    <p style="text-align:center;font-size:0.74rem;color:rgba(255,255,255,0.4);margin-top:12px;">أمثلة للتجربة: CSN-2024-001 · CSN-2024-087 · CSN-2025-014</p>
                </div>
            </div>
        `;
        overlay.addEventListener('click', (e) => { if (e.target === overlay) window.closeTrackerModal(); });
        document.body.appendChild(overlay);
    }

    window.openTrackerModal = function() {
        const el = document.getElementById('esTrackerModal');
        if (el) { el.style.display = 'flex'; el.classList.add('active'); }
    };

    window.closeTrackerModal = function() {
        const el = document.getElementById('esTrackerModal');
        if (el) { el.style.display = 'none'; el.classList.remove('active'); }
    };

    window.lookupProject = function() {
        const code = (document.getElementById('esTrackerCodeInput')?.value || '').trim().toUpperCase();
        const result = document.getElementById('esTrackerResult');
        if (!result) return;

        const proj = PROJECT_DB[code];
        if (!proj) {
            result.innerHTML = `<div style="text-align:center;padding:24px;color:rgba(239,68,68,0.8);font-size:0.88rem;">❌ لم يُعثر على رمز المشروع. تحقق من الرمز وأعد المحاولة.</div>`;
            return;
        }

        const dotIcon = { done: '✓', active: '◉', pending: '○' };
        const phases = proj.phases.map((p, i) => `
            <div class="es-timeline-item">
                <div class="es-timeline-track">
                    <div class="es-timeline-dot ${p.status}">${dotIcon[p.status]}</div>
                    ${i < proj.phases.length - 1 ? '<div class="es-timeline-line"></div>' : ''}
                </div>
                <div class="es-timeline-content">
                    <div class="es-timeline-title">${p.title}</div>
                    <div class="es-timeline-sub">${p.sub}</div>
                    ${p.status === 'active' ? `<div class="es-progress-bar-mini"><div class="es-progress-bar-fill" style="width:0%" data-target="${p.pct}%"></div></div>` : ''}
                </div>
            </div>
        `).join('');

        result.innerHTML = `
            <div style="background:rgba(197,168,128,0.06);border:1px solid rgba(197,168,128,0.2);border-radius:12px;padding:16px;margin-bottom:16px;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
                    <div>
                        <div style="font-size:0.78rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">رقم المشروع</div>
                        <div style="font-size:1rem;font-weight:900;color:var(--es-gold);">${code}</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:0.78rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">${proj.client}</div>
                        <div style="font-size:0.82rem;font-weight:700;color:#e0f2fe;">${proj.service}</div>
                    </div>
                </div>
                <div style="font-size:0.76rem;color:rgba(255,255,255,0.6);margin-bottom:6px;">الإكمال الكلي: <strong style="color:var(--es-gold-light);">${proj.completion}%</strong></div>
                <div class="es-progress-bar-mini"><div class="es-progress-bar-fill" style="width:0%" data-target="${proj.completion}%"></div></div>
            </div>
            <div class="es-project-timeline">${phases}</div>
        `;

        // Animate progress bars
        setTimeout(() => {
            result.querySelectorAll('.es-progress-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.target;
            });
        }, 100);
    };

    /* =====================================================================
       FEATURE 3: Multi-Currency & VAT Live Switcher
       ===================================================================== */
    const CURRENCIES = {
        EUR: { symbol: '€', flag: '🇪🇺', name: 'Euro', rate: 1, vat: 21, vatName: 'BTW (NL 21%)' },
        USD: { symbol: '$', flag: '🇺🇸', name: 'US Dollar', rate: 1.08, vat: 0, vatName: 'No VAT' },
        AED: { symbol: 'د.إ', flag: '🇦🇪', name: 'UAE Dirham', rate: 3.97, vat: 5, vatName: 'VAT (UAE 5%)' },
        SAR: { symbol: '﷼', flag: '🇸🇦', name: 'Saudi Riyal', rate: 4.05, vat: 15, vatName: 'VAT (KSA 15%)' },
        GBP: { symbol: '£', flag: '🇬🇧', name: 'British Pound', rate: 0.86, vat: 20, vatName: 'VAT (UK 20%)' }
    };

    let activeCurrency = 'EUR';

    window.switchCurrency = function(code) {
        activeCurrency = code;
        document.querySelectorAll('.es-currency-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.currency === code);
        });
        // Update any price displays tagged with data-eur-price
        const cur = CURRENCIES[code];
        document.querySelectorAll('[data-eur-price]').forEach(el => {
            const base = parseFloat(el.dataset.eurPrice);
            const converted = (base * cur.rate).toLocaleString('en-US', { maximumFractionDigits: 0 });
            el.textContent = `${cur.symbol}${converted}`;
        });
        // Update vat badges
        document.querySelectorAll('.es-vat-live-badge').forEach(el => {
            el.textContent = `${cur.vatName}`;
        });
    };

    /* =====================================================================
       FEATURE 4: Cloud Architecture ROI & Cost Optimizer
       ===================================================================== */
    function injectROIOptimizer() {
        if (document.getElementById('esROIModal')) return;
        const overlay = document.createElement('div');
        overlay.id = 'esROIModal';
        overlay.className = 'es-modal-overlay';
        overlay.style.display = 'none';
        overlay.innerHTML = `
            <div class="es-modal-inner" style="max-width:680px;" role="dialog" aria-label="Cloud ROI Optimizer">
                <div class="es-modal-header">
                    <div class="es-modal-header-left">
                        <div class="es-modal-icon" style="background:linear-gradient(135deg,rgba(16,185,129,0.2),rgba(16,185,129,0.05));border-color:rgba(16,185,129,0.3);">🚀</div>
                        <div>
                            <h2 class="es-modal-title">محسّن التكلفة السحابية</h2>
                            <p class="es-modal-subtitle">Cloud Architecture ROI Optimizer</p>
                        </div>
                    </div>
                    <button class="es-modal-close" onclick="window.closeROIModal()" aria-label="Close">✕</button>
                </div>
                <div class="es-modal-body">
                    <div class="es-currency-switcher-widget">
                        <span class="es-currency-switcher-label">حرّك الأشرطة لمحاكاة البنية التحتية الحالية وقارن مع الحل السحابي المُحسَّن</span>
                        <div class="es-currency-bar">
                            ${Object.entries(CURRENCIES).map(([code, c]) =>
                                `<button class="es-currency-btn${code === 'EUR' ? ' active' : ''}" data-currency="${code}" onclick="window.switchROICurrency('${code}')">${c.flag} ${code}</button>`
                            ).join('')}
                        </div>
                    </div>

                    <div class="es-roi-slider-group">
                        <div class="es-roi-slider-label">
                            <span>عدد المستخدمين / المقاعد الشهرية</span>
                            <span class="es-roi-slider-val" id="roiUsersVal">25</span>
                        </div>
                        <input type="range" class="es-slider" id="roiUsers" min="5" max="500" value="25" oninput="window.calcROI()">
                    </div>

                    <div class="es-roi-slider-group">
                        <div class="es-roi-slider-label">
                            <span>تكلفة الخوادم الحالية (شهرياً)</span>
                            <span class="es-roi-slider-val" id="roiServerVal">€1,200</span>
                        </div>
                        <input type="range" class="es-slider" id="roiServer" min="200" max="20000" step="100" value="1200" oninput="window.calcROI()">
                    </div>

                    <div class="es-roi-slider-group">
                        <div class="es-roi-slider-label">
                            <span>ساعات العمل اليدوي أسبوعياً</span>
                            <span class="es-roi-slider-val" id="roiHoursVal">20 ساعة</span>
                        </div>
                        <input type="range" class="es-slider" id="roiHours" min="2" max="160" value="20" oninput="window.calcROI()">
                    </div>

                    <div class="es-roi-compare-grid">
                        <div class="es-roi-compare-card current">
                            <div class="es-roi-card-label">التكلفة الحالية</div>
                            <div class="es-roi-card-amount" id="roiCurrentCost">€2,900</div>
                            <div class="es-roi-card-period">شهرياً / monthly</div>
                        </div>
                        <div class="es-roi-compare-card optimized">
                            <div class="es-roi-card-label">مع CoreSync Cloud</div>
                            <div class="es-roi-card-amount" id="roiOptCost">€1,160</div>
                            <div class="es-roi-card-period">شهرياً / monthly</div>
                        </div>
                    </div>

                    <div class="es-roi-saving-banner">
                        <div class="es-roi-saving-title">الوفر المحقق سنوياً</div>
                        <div class="es-roi-saving-amount" id="roiAnnualSaving">€21,000</div>
                        <div class="es-roi-saving-period">estimated annual savings · توفير تقديري سنوي</div>
                    </div>

                    <div style="display:flex;gap:10px;flex-wrap:wrap;">
                        <button class="es-btn-primary" onclick="window.openModal('esQuoteModalOverlay')" style="flex:1;">
                            احصل على عرض سعر مخصص
                        </button>
                        <button class="es-btn-secondary" onclick="window.closeROIModal()" style="flex:1;">
                            إغلاق
                        </button>
                    </div>
                </div>
            </div>
        `;
        overlay.addEventListener('click', (e) => { if (e.target === overlay) window.closeROIModal(); });
        document.body.appendChild(overlay);
    }

    let roiCurrencyCode = 'EUR';

    window.switchROICurrency = function(code) {
        roiCurrencyCode = code;
        document.querySelectorAll('#esROIModal .es-currency-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.currency === code);
        });
        window.calcROI();
    };

    window.calcROI = function() {
        const users = parseInt(document.getElementById('roiUsers')?.value || 25);
        const server = parseInt(document.getElementById('roiServer')?.value || 1200);
        const hours = parseInt(document.getElementById('roiHours')?.value || 20);

        const cur = CURRENCIES[roiCurrencyCode] || CURRENCIES.EUR;
        const ratePerHour = 35 * cur.rate; // avg €35/h staff cost

        const currentMonthly = (server + (hours * 4 * ratePerHour) + (users * 8 * cur.rate)) * cur.rate / 1;
        const currentMonthlyEur = server + (hours * 4 * 35) + (users * 8);
        const optimizedEur = currentMonthlyEur * 0.40; // 60% reduction estimate
        const optimized = optimizedEur * cur.rate;
        const current = currentMonthlyEur * cur.rate;
        const annualSaving = (currentMonthlyEur - optimizedEur) * 12 * cur.rate;

        const fmt = (n) => cur.symbol + Math.round(n).toLocaleString('en-US');

        if (document.getElementById('roiUsersVal')) document.getElementById('roiUsersVal').textContent = users;
        if (document.getElementById('roiServerVal')) document.getElementById('roiServerVal').textContent = cur.symbol + Math.round(server * cur.rate).toLocaleString('en-US');
        if (document.getElementById('roiHoursVal')) document.getElementById('roiHoursVal').textContent = hours + ' ساعة';
        if (document.getElementById('roiCurrentCost')) document.getElementById('roiCurrentCost').textContent = fmt(current);
        if (document.getElementById('roiOptCost')) document.getElementById('roiOptCost').textContent = fmt(optimized);
        if (document.getElementById('roiAnnualSaving')) document.getElementById('roiAnnualSaving').textContent = fmt(annualSaving);
    };

    window.openROIModal = function() {
        const el = document.getElementById('esROIModal');
        if (el) { el.style.display = 'flex'; el.classList.add('active'); }
        window.calcROI();
    };

    window.closeROIModal = function() {
        const el = document.getElementById('esROIModal');
        if (el) { el.style.display = 'none'; el.classList.remove('active'); }
    };

    window.openModal = function(id) {
        const el = document.getElementById(id);
        if (el) { el.style.display = 'flex'; el.classList.add('active'); }
    };

    /* =====================================================================
       FEATURE 5: Executive Capability Deck (HTML → Print → PDF)
       ===================================================================== */
    window.downloadCapabilityDeck = function() {
        const lang = detectLang();
        const titleMap = { ar: 'ملف القدرات التنفيذي – S&R CoreSync Solutions', en: 'Executive Capability Deck – S&R CoreSync Solutions', nl: 'Capability Deck – S&R CoreSync Solutions' };
        const deck = `<!DOCTYPE html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
<meta charset="UTF-8">
<title>${titleMap[lang]}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background: #010907; color: #ffffff; }
  .deck-page { width: 210mm; min-height: 297mm; padding: 16mm 18mm; page-break-after: always; position: relative; }
  .deck-cover { background: linear-gradient(135deg, #010907 0%, #021a12 50%, #010907 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 297mm; }
  .deck-logo-text { font-size: 2.8rem; font-weight: 900; background: linear-gradient(135deg, #c5a880, #f3dfba); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px; }
  .deck-tagline { color: rgba(255,255,255,0.6); font-size: 1rem; margin-bottom: 40px; }
  .deck-gold-line { width: 120px; height: 3px; background: linear-gradient(90deg, transparent, #c5a880, transparent); margin: 0 auto 40px; }
  .deck-title { font-size: 1.4rem; font-weight: 900; color: #ffffff; margin-bottom: 12px; }
  .deck-date { font-size: 0.85rem; color: rgba(255,255,255,0.4); }
  .deck-section { background: #0a1a12; border-radius: 16px; padding: 24px; margin-bottom: 20px; border: 1px solid rgba(197,168,128,0.2); }
  .deck-section h2 { color: #c5a880; font-size: 1.1rem; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 1px solid rgba(197,168,128,0.2); }
  .deck-kpi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .deck-kpi { background: rgba(197,168,128,0.08); border: 1px solid rgba(197,168,128,0.2); border-radius: 10px; padding: 16px; text-align: center; }
  .deck-kpi-val { font-size: 1.6rem; font-weight: 900; color: #f3dfba; }
  .deck-kpi-lbl { font-size: 0.72rem; color: rgba(255,255,255,0.6); margin-top: 4px; }
  .deck-service { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px; }
  .deck-service-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(197,168,128,0.12); border: 1px solid rgba(197,168,128,0.25); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
  .deck-service-title { font-size: 0.88rem; font-weight: 800; color: #ffffff; margin-bottom: 3px; }
  .deck-service-desc { font-size: 0.76rem; color: rgba(255,255,255,0.6); line-height: 1.5; }
  .deck-leaders { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .deck-leader { background: rgba(197,168,128,0.06); border: 1px solid rgba(197,168,128,0.2); border-radius: 12px; padding: 16px; }
  .deck-leader-name { font-size: 0.95rem; font-weight: 900; color: #f3dfba; margin-bottom: 4px; }
  .deck-leader-role { font-size: 0.76rem; color: rgba(255,255,255,0.6); }
  .deck-contact { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 8px; }
  .deck-contact-item { background: rgba(6,182,212,0.08); border: 1px solid rgba(56,189,248,0.2); border-radius: 10px; padding: 12px; text-align: center; font-size: 0.78rem; color: #e0f2fe; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style>
</head>
<body>
<!-- Cover Page -->
<div class="deck-page deck-cover">
  <div class="deck-logo-text">S&R CoreSync</div>
  <div class="deck-tagline">Cloud Engineering · ERP Architecture · AI Integration</div>
  <div class="deck-gold-line"></div>
  <div class="deck-title">${titleMap[lang]}</div>
  <div class="deck-date">Q4 2026 · Confidential & Proprietary</div>
</div>

<!-- Page 2: KPIs -->
<div class="deck-page">
  <div class="deck-section">
    <h2>🏆 Enterprise Performance KPIs</h2>
    <div class="deck-kpi-grid">
      <div class="deck-kpi"><div class="deck-kpi-val">99.99%</div><div class="deck-kpi-lbl">Cloud Uptime SLA</div></div>
      <div class="deck-kpi"><div class="deck-kpi-val">45,000€</div><div class="deck-kpi-lbl">Avg Annual Client Savings</div></div>
      <div class="deck-kpi"><div class="deck-kpi-val">60%</div><div class="deck-kpi-lbl">Infrastructure Cost Reduction</div></div>
      <div class="deck-kpi"><div class="deck-kpi-val">100%</div><div class="deck-kpi-lbl">EU Tax Compliance (BTW/VAT)</div></div>
      <div class="deck-kpi"><div class="deck-kpi-val">3+</div><div class="deck-kpi-lbl">Languages Supported (AR/EN/NL)</div></div>
      <div class="deck-kpi"><div class="deck-kpi-val">22%</div><div class="deck-kpi-lbl">AI-Driven Cost Savings</div></div>
    </div>
  </div>

  <div class="deck-section">
    <h2>⚙️ Core Services</h2>
    <div class="deck-service"><div class="deck-service-icon">☁️</div><div><div class="deck-service-title">Cloud Architecture & DevOps</div><div class="deck-service-desc">Multi-Cloud (AWS/Azure/GCP), Kubernetes, Microservices, CI/CD Pipelines, High Availability</div></div></div>
    <div class="deck-service"><div class="deck-service-icon">💼</div><div><div class="deck-service-title">ERP Implementation & Customization</div><div class="deck-service-desc">Odoo, Oracle, Custom ERP. EU Tax (BTW/VAT/IFRS), Multi-Currency, Multi-Branch Sync</div></div></div>
    <div class="deck-service"><div class="deck-service-icon">🤖</div><div><div class="deck-service-title">AI & Intelligent Automation</div><div class="deck-service-desc">RAG Pipelines, NLP, Predictive Analytics, Process Automation, AI-ERP Integration</div></div></div>
    <div class="deck-service"><div class="deck-service-icon">📊</div><div><div class="deck-service-title">Financial Consulting & Compliance</div><div class="deck-service-desc">IFRS, Belastingdienst, Multi-Jurisdiction Tax, CFO Advisory, Audit-Ready Reporting</div></div></div>
  </div>
</div>

<!-- Page 3: Leadership & Contact -->
<div class="deck-page">
  <div class="deck-section">
    <h2>👥 Leadership Team</h2>
    <div class="deck-leaders">
      <div class="deck-leader">
        <div class="deck-leader-name">Eng. Mohammad Salim Aziza</div>
        <div class="deck-leader-role">Co-Founder · CTO & Cloud Architect</div>
        <p style="font-size:0.76rem;color:rgba(255,255,255,0.5);margin-top:8px;line-height:1.5;">10+ years designing mission-critical cloud infrastructures for enterprise clients across EU & Middle East. Expert in AWS, Azure, GCP, Kubernetes & Microservices.</p>
      </div>
      <div class="deck-leader">
        <div class="deck-leader-name">Mr. Mohammad Raed Kaakeh</div>
        <div class="deck-leader-role">Co-Founder · CFO & ERP Architect</div>
        <p style="font-size:0.76rem;color:rgba(255,255,255,0.5);margin-top:8px;line-height:1.5;">Specialist in financial systems architecture, EU tax compliance (BTW/VAT), IFRS reporting, and multi-jurisdiction financial operations across 10+ countries.</p>
      </div>
    </div>
  </div>
  <div class="deck-section">
    <h2>📍 Headquarters & Contact</h2>
    <div class="deck-contact">
      <div class="deck-contact-item">📍<br>Netherlands (EU HQ)<br>Middle East Operations</div>
      <div class="deck-contact-item">📱<br>WhatsApp<br>+31 6 87764998</div>
      <div class="deck-contact-item">🌐<br>coresync.solutions<br>info@coresync.solutions</div>
    </div>
    <p style="text-align:center;margin-top:20px;font-size:0.72rem;color:rgba(255,255,255,0.3);">This document is confidential. © 2026 S&R CoreSync Solutions B.V. All rights reserved.</p>
  </div>
</div>
</body></html>`;

        const win = window.open('', '_blank');
        if (win) {
            win.document.write(deck);
            win.document.close();
            setTimeout(() => win.print(), 800);
        }
    };

    /* =====================================================================
       Inject new feature modals into initEnterpriseSuite
       ===================================================================== */
    const _origInit = initEnterpriseSuite;
    function initEnterpriseSuiteExtended() {
        _origInit();
        injectAIConcierge();
        injectTrackerModal();
        injectROIOptimizer();
        injectNextGenButtons();
    }

    function injectNextGenButtons() {
        // Inject Tracker button inside the Feedback Hub header if it exists
        const hubHeader = document.querySelector('.es-hub-header');
        if (hubHeader && !document.getElementById('esTrackerBtn')) {
            const btn = document.createElement('button');
            btn.id = 'esTrackerBtn';
            btn.className = 'btn-tracker-portal';
            btn.onclick = window.openTrackerModal;
            btn.innerHTML = `📡 متابعة مشروعك`;
            hubHeader.appendChild(btn);
        }

        // Inject ROI Optimizer button next to Case Studies if present
        const caseStudyBtns = document.querySelector('.es-case-study-actions');
        if (caseStudyBtns && !document.getElementById('esROIBtn')) {
            const btn = document.createElement('button');
            btn.id = 'esROIBtn';
            btn.className = 'es-btn-secondary';
            btn.onclick = window.openROIModal;
            btn.style.marginTop = '10px';
            btn.innerHTML = `🚀 محسّن التكلفة السحابية`;
            caseStudyBtns.appendChild(btn);
        }

        // Inject Currency Switcher into cost estimator summary if present
        const summaryActions = document.querySelector('.summary-actions');
        if (summaryActions && !document.getElementById('esCurrencyBar')) {
            const bar = document.createElement('div');
            bar.id = 'esCurrencyBar';
            bar.className = 'es-currency-bar';
            bar.style.marginBottom = '8px';
            bar.innerHTML = Object.entries(CURRENCIES).map(([code, c]) =>
                `<button class="es-currency-btn${code === 'EUR' ? ' active' : ''}" data-currency="${code}" onclick="window.switchCurrency('${code}')">${c.flag} ${code}</button>`
            ).join('');
            summaryActions.insertBefore(bar, summaryActions.firstChild);
        }

        // Inject Executive Deck Download button
        const floatingHub = document.querySelector('.es-floating-hub-content');
        if (floatingHub && !document.getElementById('esDeckBtn')) {
            const btn = document.createElement('button');
            btn.id = 'esDeckBtn';
            btn.className = 'es-deck-download-btn';
            btn.style.width = '100%';
            btn.style.justifyContent = 'center';
            btn.style.marginTop = '10px';
            btn.onclick = window.downloadCapabilityDeck;
            btn.innerHTML = `📄 تحميل ملف القدرات التنفيذي (PDF)`;
            floatingHub.appendChild(btn);
        }
    }

    // Override init with extended version
    // Auto-bootstrap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEnterpriseSuiteExtended);
    } else {
        initEnterpriseSuiteExtended();
    }

})();
