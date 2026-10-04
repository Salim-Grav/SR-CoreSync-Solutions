/**
 * S&R CoreSync Solutions - Enterprise Suite Engine
 * 1. Instant Official PDF Quotation Generator
 * 2. Client Visual Feedback Hub (Live Testing Mode)
 * 3. EU GDPR Cookie Consent System
 */

(function () {
    'use strict';

    const WHATSAPP_NUM = '31687764998';

    // 1. Initialize DOM Elements
    function initEnterpriseSuite() {
        injectPDFModal();
        injectFeedbackHub();
        injectGDPRBanner();
        attachEstimatorButton();
        checkURLParams();
    }

    // Attach PDF Button to Cost Estimator if not present
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
                        <tbody id="quoteTableBody">
                            <!-- Populated dynamically -->
                        </tbody>
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

    // 3. Inject Client Visual Feedback Hub
    function injectFeedbackHub() {
        if (document.getElementById('esFeedbackFab')) return;

        // Floating Action Button
        const fab = document.createElement('button');
        fab.type = 'button';
        fab.id = 'esFeedbackFab';
        fab.className = 'es-feedback-fab';
        fab.title = 'إرسال ملاحظة أو طلب تعديل مباشر لفريق التطوير';
        fab.innerHTML = `
            <span class="es-feedback-dot"></span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            <span>ملاحظات الزبون | Live Feedback</span>
        `;
        fab.onclick = window.openFeedbackModal;
        document.body.appendChild(fab);

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

    // 4. Inject EU GDPR Cookie Banner
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

    // Check if client opened with ?preview=client or ?feedback=true
    function checkURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('feedback') || urlParams.get('preview') === 'client') {
            setTimeout(() => {
                window.openFeedbackModal();
            }, 800);
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

        // Populate metadata
        const now = new Date();
        const issueDate = now.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
        const ref = 'CSR-' + now.getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

        document.getElementById('quoteRefNumber').textContent = ref;
        document.getElementById('quoteIssueDate').textContent = issueDate;

        // Populate table
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

        // Show Modal
        const overlay = document.getElementById('esQuoteModalOverlay');
        overlay.classList.add('active');
    };

    window.closeQuoteModal = function () {
        const overlay = document.getElementById('esQuoteModalOverlay');
        if (overlay) overlay.classList.remove('active');
    };

    window.printOfficialQuote = function () {
        window.print();
    };

    window.openFeedbackModal = function () {
        const overlay = document.getElementById('esFeedbackModalOverlay');
        if (overlay) overlay.classList.add('active');
    };

    window.closeFeedbackModal = function () {
        const overlay = document.getElementById('esFeedbackModalOverlay');
        if (overlay) overlay.classList.remove('active');
    };

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

        // Save to local storage for persistence
        const existing = JSON.parse(localStorage.getItem('coresync_feedback_history') || '[]');
        existing.push({
            date: new Date().toISOString(),
            clientName,
            targetSection,
            category,
            details
        });
        localStorage.setItem('coresync_feedback_history', JSON.stringify(existing));

        window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
        window.closeFeedbackModal();
    };

    window.acceptGDPR = function () {
        localStorage.setItem('coresync_gdpr_status', 'accepted');
        const banner = document.getElementById('esGdprBanner');
        if (banner) banner.classList.remove('active');
    };

    window.declineGDPR = function () {
        localStorage.setItem('coresync_gdpr_status', 'essential_only');
        const banner = document.getElementById('esGdprBanner');
        if (banner) banner.classList.remove('active');
    };

    // Auto-bootstrap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEnterpriseSuite);
    } else {
        initEnterpriseSuite();
    }

})();
