export type Lang = "ar" | "en";

export const translations = {
  ar: {
    brand: "أزير",
    tagline: "منصة التواصل والحجوزات للعيادات الطبية",
    nav: {
      home: "الرئيسية",
      clinics: "للعيادات",
      features: "المميزات",
      pricing: "الباقات",
      faq: "الأسئلة الشائعة",
      cta: "احجز استشارتك المجانية",
      langLabel: "EN",
    },
    home: {
      badge: "مدعوم بالواتساب والاتصال الصوتي",
      heroTitle: "عيادتك تتحدث مع مرضاها على واتساب — تلقائياً",
      heroSubtitle:
        "أزير يجمع المحادثات والمكالمات والحجوزات في مكان واحد. ذكّر مرضاك بمواعيدهم، قلّل الغياب، وردّ على استفساراتهم على مدار الساعة.",
      heroCtaPrimary: "احجز استشارتك المجانية",
      heroCtaSecondary: "شاهد كيف يعمل",
      heroStat1: "أقل بنسبة 38% في حالات الغياب",
      heroStat2: "ردود خلال أقل من 30 ثانية",
      trustedBy: "تثق بنا عيادات ومجمّعات طبية في الخليج والشرق الأوسط",
      featuresTitle: "كل ما تحتاجه عيادتك في منصة واحدة",
      featuresSubtitle:
        "من أول رسالة حتى تأكيد الموعد والدفع — أزير يدير الرحلة كاملة.",
      features: [
        {
          title: "محادثات واتساب موحّدة",
          desc: "صندوق وارد واحد لكل فريقك. وزّع المحادثات على الموظفين وتابع كل استفسار حتى الإغلاق.",
        },
        {
          title: "حجز ذكي للمواعيد",
          desc: "صفحة حجز باسم عيادتك تعمل 24 ساعة، تتزامن مع تقويم الأطباء وتمنع التعارض.",
        },
        {
          title: "تذكيرات تلقائية",
          desc: "رسائل تذكير قبل الموعد بساعات أو أيام، مع تأكيد أو إعادة جدولة بضغطة واحدة.",
        },
        {
          title: "اتصال صوتي مدمج",
          desc: "استقبل المكالمات ووجّهها وسجّلها داخل أزير، مربوطة بملف المريض مباشرة.",
        },
      ],
      stepsTitle: "كيف يعمل أزير",
      stepsSubtitle: "ثلاث خطوات لتشغيل عيادتك بالكامل.",
      steps: [
        {
          title: "اربط واتساب وقنواتك",
          desc: "نوصّل رقم الواتساب الرسمي لعيادتك وقنوات التواصل في دقائق.",
        },
        {
          title: "أضف أطباءك وخدماتك",
          desc: "حدّد المواعيد المتاحة والخدمات والأسعار، وسيتولّى أزير الباقي.",
        },
        {
          title: "ابدأ استقبال الحجوزات",
          desc: "مرضاك يحجزون ويؤكدون عبر واتساب، وأنت تتابع كل شيء من لوحة واحدة.",
        },
      ],
      statsTitle: "نتائج حقيقية لعيادات حقيقية",
      stats: [
        { value: "+38%", label: "انخفاض في حالات الغياب" },
        { value: "<30s", label: "متوسط زمن الرد" },
        { value: "+2.4x", label: "زيادة في الحجوزات المؤكدة" },
        { value: "24/7", label: "استقبال للحجوزات" },
      ],
      testimonial:
        "قبل أزير كنا نضيّع نصف يومنا في الرد على الرسائل. الآن المواعيد تتأكد تلقائياً وفريقنا متفرّغ للمرضى داخل العيادة.",
      testimonialName: "د. خالد العمري",
      testimonialRole: "مدير مجمّع الواحة الطبي",
      ctaTitle: "جاهز تنقل عيادتك للمستوى التالي؟",
      ctaSubtitle: "احجز استشارة مجانية وسنعرض لك أزير على بيانات عيادتك.",
      ctaButton: "احجز استشارتك المجانية",
    },
    clinics: {
      badge: "مصمّم للعيادات والمجمّعات الطبية",
      title: "بُني خصيصاً لطريقة عمل العيادات",
      subtitle:
        "نفهم تحديات الاستقبال والمواعيد والمتابعة. أزير يعالجها بأدوات صُممت للقطاع الصحي.",
      painTitle: "تحديات نعرفها جيداً",
      pains: [
        {
          title: "مرضى لا يحضرون مواعيدهم",
          desc: "كل موعد ضائع يعني وقت طبيب مهدور وإيراد مفقود.",
        },
        {
          title: "رسائل لا يردّ عليها أحد",
          desc: "استفسارات تتكدّس على واتساب بعد ساعات العمل دون متابعة.",
        },
        {
          title: "حجوزات يدوية ومتعارضة",
          desc: "دفاتر وجداول منفصلة تسبب ازدواج المواعيد وأخطاء بشرية.",
        },
      ],
      solTitle: "كيف يحلّها أزير",
      sols: [
        {
          title: "تذكيرات تقلّل الغياب",
          desc: "تذكير ذكي قبل الموعد مع خيار التأكيد أو إعادة الجدولة عبر واتساب.",
        },
        {
          title: "ردود فورية على مدار الساعة",
          desc: "ردود تلقائية على الأسئلة الشائعة وتحويل سلس للموظف المختص.",
        },
        {
          title: "تقويم موحّد لكل الأطباء",
          desc: "كل المواعيد في مكان واحد، بلا تعارض وبلا أخطاء إدخال.",
        },
      ],
      specialtiesTitle: "يناسب كل التخصصات",
      specialties: [
        "عيادات الأسنان",
        "المجمّعات الطبية",
        "العيادات الجلدية والتجميلية",
        "عيادات النساء والولادة",
        "مراكز العلاج الطبيعي",
        "عيادات الأطفال",
        "عيادات العيون",
        "مراكز التغذية",
      ],
      flowTitle: "رحلة المريض من الرسالة إلى العيادة",
      flow: [
        { step: "يسأل عبر واتساب", desc: "المريض يبدأ المحادثة بسؤال عن خدمة أو سعر." },
        { step: "يحجز موعده", desc: "أزير يعرض المواعيد المتاحة ويثبّت الحجز فوراً." },
        { step: "يستلم تذكيراً", desc: "رسالة تذكير قبل الموعد مع خيار التأكيد." },
        { step: "يحضر ويتابع", desc: "بعد الزيارة، متابعة تلقائية ورسالة شكر." },
      ],
      ctaTitle: "لنعرض لك أزير على عيادتك",
      ctaSubtitle: "استشارة مجانية مع فريقنا المختص في القطاع الصحي.",
      ctaButton: "احجز استشارتك المجانية",
    },
    features: {
      badge: "كل المميزات",
      title: "منصة متكاملة لإدارة تواصل عيادتك",
      subtitle: "أدوات قوية تعمل معاً لتشغيل عيادتك بكفاءة من أول تواصل حتى المتابعة.",
      list: [
        {
          title: "صندوق وارد موحّد",
          desc: "كل قنوات التواصل في شاشة واحدة: واتساب، الرسائل، البريد، إنستغرام والمزيد.",
        },
        {
          title: "حجز المواعيد",
          desc: "صفحة حجز باسم عيادتك، متزامنة مع تقويم الأطباء وتمنع التعارض.",
        },
        {
          title: "التذكيرات الآلية",
          desc: "تذكيرات قابلة للجدولة قبل الموعد، مع تأكيد وإعادة جدولة بضغطة.",
        },
        {
          title: "الاتصال الصوتي",
          desc: "بنية اتصال كاملة: استقبال، توجيه، تسجيل، وبريد صوتي مربوط بالمريض.",
        },
        {
          title: "الردود التلقائية",
          desc: "ردود ذكية على الأسئلة المتكررة وتوجيه المريض للموظف المناسب.",
        },
        {
          title: "الحملات والرسائل الجماعية",
          desc: "أرسل عروضاً وتنبيهات لمجموعات مرضى مستهدفة باحترافية والتزام.",
        },
        {
          title: "التحليلات والتقارير",
          desc: "لوحات تتابع أوقات الرد، معدلات الحضور، ورضا المرضى لحظة بلحظة.",
        },
        {
          title: "إدارة الفريق والصلاحيات",
          desc: "وزّع المحادثات، حدّد الأدوار، وتابع أداء كل موظف بشفافية.",
        },
        {
          title: "دعم عربي وإنجليزي",
          desc: "واجهة وتجربة كاملة بالعربية والإنجليزية، مع دعم الكتابة من اليمين لليسار.",
        },
      ],
      highlightTitle: "صُمّم للمنطقة العربية",
      highlightDesc:
        "أزير يدعم العربية كلغة أساسية بتجربة كاملة من اليمين لليسار، مع التزام بمعايير الخصوصية والقطاع الصحي في الخليج والشرق الأوسط.",
      highlightPoints: [
        "واجهة عربية أصيلة بالكامل",
        "دعم رقم الواتساب الرسمي للأعمال",
        "تكامل مع منصات الدفع المحلية",
        "حماية بيانات المرضى",
      ],
      ctaTitle: "اكتشف المميزات على بيانات عيادتك",
      ctaButton: "احجز استشارتك المجانية",
    },
    pricing: {
      badge: "الباقات",
      title: "باقات تناسب حجم عيادتك",
      subtitle: "ابدأ بما تحتاجه اليوم، ووسّع متى احتجت. كل الباقات بلا رسوم إعداد.",
      monthly: "شهري",
      yearly: "سنوي",
      yearlyNote: "وفّر شهرين",
      perMonth: "/ شهرياً",
      popular: "الأكثر اختياراً",
      plans: [
        {
          name: "البداية",
          price: "299",
          desc: "للعيادات الفردية التي تبدأ رحلتها الرقمية.",
          features: [
            "رقم واتساب واحد",
            "صندوق وارد موحّد",
            "حتى 3 موظفين",
            "حجز المواعيد",
            "تذكيرات تلقائية",
          ],
          cta: "ابدأ الآن",
        },
        {
          name: "النمو",
          price: "599",
          desc: "للعيادات النشطة التي تريد أتمتة أعمق.",
          features: [
            "رقمان واتساب",
            "حتى 10 موظفين",
            "ردود تلقائية ذكية",
            "الحملات والرسائل الجماعية",
            "تحليلات متقدمة",
            "اتصال صوتي مدمج",
          ],
          cta: "ابدأ الآن",
        },
        {
          name: "الأعمال",
          price: "1,199",
          desc: "للمجمّعات الطبية متعددة الفروع.",
          features: [
            "أرقام واتساب متعددة",
            "موظفون بلا حدود",
            "إدارة فروع متعددة",
            "صلاحيات وأدوار متقدمة",
            "تكاملات مخصّصة",
            "مدير حساب مخصّص",
          ],
          cta: "ابدأ الآن",
        },
        {
          name: "المؤسسات",
          price: "تواصل معنا",
          desc: "حلول مخصّصة للمجموعات الطبية الكبرى.",
          features: [
            "كل مميزات الأعمال",
            "اتفاقية مستوى خدمة (SLA)",
            "استضافة مخصّصة",
            "تدريب الفريق",
            "دعم أولوية على مدار الساعة",
          ],
          cta: "تواصل مع المبيعات",
          isEnterprise: true,
        },
      ],
      faqHint: "لديك سؤال عن الباقات؟",
      faqHintLink: "اطّلع على الأسئلة الشائعة",
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "أسئلة يطرحها أصحاب العيادات",
      subtitle: "لم تجد إجابتك؟ فريقنا جاهز لمساعدتك.",
      items: [
        {
          q: "هل أحتاج إلى رقم واتساب جديد؟",
          a: "يمكنك استخدام رقم عيادتك الحالي أو رقم جديد. نوصّل رقم الواتساب الرسمي للأعمال خلال عملية الإعداد بدون أي تعقيد.",
        },
        {
          q: "كم يستغرق إعداد أزير؟",
          a: "معظم العيادات تنطلق خلال يوم عمل واحد. نتولّى ربط القنوات وإعداد الأطباء والخدمات بالتعاون مع فريقك.",
        },
        {
          q: "هل البيانات والمرضى في أمان؟",
          a: "نعم. نلتزم بأعلى معايير حماية البيانات في القطاع الصحي، وبياناتك مشفّرة ولا تُشارك مع أي طرف ثالث.",
        },
        {
          q: "هل يدعم أزير اللغتين العربية والإنجليزية؟",
          a: "بالتأكيد. الواجهة وتجربة الحجز تعملان بالعربية والإنجليزية بالكامل مع دعم الكتابة من اليمين لليسار.",
        },
        {
          q: "هل يمكنني تغيير الباقة لاحقاً؟",
          a: "نعم، يمكنك الترقية أو التخفيض في أي وقت. التغييرات تنعكس على فاتورتك التالية مباشرة.",
        },
        {
          q: "هل يتكامل أزير مع أنظمة العيادات الأخرى؟",
          a: "نوفّر تكاملات مع منصات الدفع وأنظمة إدارة العيادات الشائعة، وتكاملات مخصّصة في باقتي الأعمال والمؤسسات.",
        },
        {
          q: "ماذا لو احتجت إلى مساعدة؟",
          a: "فريق الدعم متاح عبر واتساب والبريد، وباقات الأعمال والمؤسسات تحصل على دعم أولوية ومدير حساب مخصّص.",
        },
      ],
      ctaTitle: "ما زال لديك سؤال؟",
      ctaSubtitle: "احجز استشارة مجانية وسنجيب على كل أسئلتك.",
      ctaButton: "احجز استشارتك المجانية",
    },
    footer: {
      tagline: "منصة التواصل والحجوزات الذكية للعيادات الطبية في المنطقة العربية.",
      product: "المنتج",
      company: "الشركة",
      legal: "قانوني",
      links: {
        features: "المميزات",
        pricing: "الباقات",
        clinics: "للعيادات",
        faq: "الأسئلة الشائعة",
        about: "من نحن",
        contact: "تواصل معنا",
        careers: "الوظائف",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
      },
      rights: "جميع الحقوق محفوظة.",
    },
  },

  en: {
    brand: "Azeer",
    tagline: "Communication & booking platform for medical clinics",
    nav: {
      home: "Home",
      clinics: "For clinics",
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Book free consultation",
      langLabel: "ع",
    },
    home: {
      badge: "Powered by WhatsApp & voice",
      heroTitle: "Your clinic talks to patients on WhatsApp — automatically",
      heroSubtitle:
        "Azeer brings conversations, calls, and bookings into one place. Remind patients of appointments, cut no-shows, and answer questions around the clock.",
      heroCtaPrimary: "Book free consultation",
      heroCtaSecondary: "See how it works",
      heroStat1: "38% fewer no-shows",
      heroStat2: "Replies in under 30 seconds",
      trustedBy: "Trusted by clinics and medical groups across the Gulf and Middle East",
      featuresTitle: "Everything your clinic needs in one platform",
      featuresSubtitle:
        "From the first message to confirmation and payment — Azeer runs the whole journey.",
      features: [
        {
          title: "Unified WhatsApp inbox",
          desc: "One inbox for your whole team. Assign conversations to staff and track every inquiry to resolution.",
        },
        {
          title: "Smart appointment booking",
          desc: "A 24/7 booking page in your clinic's name, synced with doctors' calendars and conflict-free.",
        },
        {
          title: "Automated reminders",
          desc: "Reminder messages hours or days before, with one-tap confirm or reschedule.",
        },
        {
          title: "Built-in voice calling",
          desc: "Receive, route, and record calls inside Azeer — linked directly to the patient's profile.",
        },
      ],
      stepsTitle: "How Azeer works",
      stepsSubtitle: "Three steps to run your clinic end to end.",
      steps: [
        {
          title: "Connect WhatsApp & channels",
          desc: "We connect your clinic's official WhatsApp number and channels in minutes.",
        },
        {
          title: "Add doctors & services",
          desc: "Set available slots, services, and prices — Azeer handles the rest.",
        },
        {
          title: "Start taking bookings",
          desc: "Patients book and confirm via WhatsApp while you track everything from one dashboard.",
        },
      ],
      statsTitle: "Real results for real clinics",
      stats: [
        { value: "+38%", label: "Fewer no-shows" },
        { value: "<30s", label: "Average reply time" },
        { value: "+2.4x", label: "More confirmed bookings" },
        { value: "24/7", label: "Booking availability" },
      ],
      testimonial:
        "Before Azeer we wasted half our day replying to messages. Now appointments confirm themselves and our team is free for patients in the clinic.",
      testimonialName: "Dr. Khaled Al-Omari",
      testimonialRole: "Director, Al-Waha Medical Center",
      ctaTitle: "Ready to take your clinic to the next level?",
      ctaSubtitle: "Book a free consultation and we'll show Azeer on your clinic's data.",
      ctaButton: "Book free consultation",
    },
    clinics: {
      badge: "Built for clinics & medical groups",
      title: "Built around how clinics actually work",
      subtitle:
        "We understand reception, scheduling, and follow-up challenges. Azeer solves them with tools designed for healthcare.",
      painTitle: "Challenges we know well",
      pains: [
        {
          title: "Patients who miss appointments",
          desc: "Every missed slot is wasted doctor time and lost revenue.",
        },
        {
          title: "Messages no one answers",
          desc: "Inquiries pile up on WhatsApp after hours with no follow-up.",
        },
        {
          title: "Manual, conflicting bookings",
          desc: "Separate books and sheets cause double bookings and human error.",
        },
      ],
      solTitle: "How Azeer solves them",
      sols: [
        {
          title: "Reminders that cut no-shows",
          desc: "Smart pre-appointment reminders with confirm or reschedule via WhatsApp.",
        },
        {
          title: "Instant replies, 24/7",
          desc: "Automated answers to common questions and smooth handoff to the right staff.",
        },
        {
          title: "One calendar for all doctors",
          desc: "Every appointment in one place — no conflicts, no entry errors.",
        },
      ],
      specialtiesTitle: "Fits every specialty",
      specialties: [
        "Dental clinics",
        "Medical centers",
        "Dermatology & aesthetics",
        "OB-GYN clinics",
        "Physiotherapy centers",
        "Pediatric clinics",
        "Ophthalmology clinics",
        "Nutrition centers",
      ],
      flowTitle: "The patient journey from message to clinic",
      flow: [
        { step: "Asks on WhatsApp", desc: "The patient starts a chat asking about a service or price." },
        { step: "Books a slot", desc: "Azeer shows available times and locks the booking instantly." },
        { step: "Gets a reminder", desc: "A pre-appointment reminder with a confirm option." },
        { step: "Attends & follows up", desc: "After the visit, automatic follow-up and a thank-you message." },
      ],
      ctaTitle: "Let us show Azeer on your clinic",
      ctaSubtitle: "A free consultation with our healthcare specialists.",
      ctaButton: "Book free consultation",
    },
    features: {
      badge: "All features",
      title: "A complete platform to manage your clinic's communication",
      subtitle: "Powerful tools that work together to run your clinic efficiently — from first contact to follow-up.",
      list: [
        {
          title: "Unified inbox",
          desc: "All channels in one screen: WhatsApp, SMS, email, Instagram and more.",
        },
        {
          title: "Appointment booking",
          desc: "A booking page in your clinic's name, synced with doctor calendars and conflict-free.",
        },
        {
          title: "Automated reminders",
          desc: "Schedulable pre-appointment reminders with one-tap confirm and reschedule.",
        },
        {
          title: "Voice calling",
          desc: "Full call infrastructure: intake, routing, recording, and voicemail tied to the patient.",
        },
        {
          title: "Auto-replies",
          desc: "Smart answers to frequent questions and routing to the right staff member.",
        },
        {
          title: "Campaigns & broadcasts",
          desc: "Send offers and alerts to targeted patient groups, professionally and compliantly.",
        },
        {
          title: "Analytics & reports",
          desc: "Dashboards tracking reply times, attendance rates, and patient satisfaction in real time.",
        },
        {
          title: "Team & permissions",
          desc: "Assign conversations, set roles, and track every staff member's performance transparently.",
        },
        {
          title: "Arabic & English",
          desc: "A full interface and experience in Arabic and English, with right-to-left support.",
        },
      ],
      highlightTitle: "Designed for the Arab region",
      highlightDesc:
        "Azeer supports Arabic as a first-class language with a complete right-to-left experience, and complies with privacy and healthcare standards across the Gulf and Middle East.",
      highlightPoints: [
        "A fully native Arabic interface",
        "Official WhatsApp Business number support",
        "Integration with local payment platforms",
        "Patient data protection",
      ],
      ctaTitle: "Explore the features on your clinic's data",
      ctaButton: "Book free consultation",
    },
    pricing: {
      badge: "Pricing",
      title: "Plans that fit your clinic's size",
      subtitle: "Start with what you need today and scale when you grow. No setup fees on any plan.",
      monthly: "Monthly",
      yearly: "Yearly",
      yearlyNote: "Save 2 months",
      perMonth: "/ month",
      popular: "Most popular",
      plans: [
        {
          name: "Starter",
          price: "299",
          desc: "For solo clinics starting their digital journey.",
          features: [
            "One WhatsApp number",
            "Unified inbox",
            "Up to 3 staff",
            "Appointment booking",
            "Automated reminders",
          ],
          cta: "Get started",
        },
        {
          name: "Growth",
          price: "599",
          desc: "For active clinics wanting deeper automation.",
          features: [
            "Two WhatsApp numbers",
            "Up to 10 staff",
            "Smart auto-replies",
            "Campaigns & broadcasts",
            "Advanced analytics",
            "Built-in voice calling",
          ],
          cta: "Get started",
        },
        {
          name: "Business",
          price: "1,199",
          desc: "For multi-branch medical groups.",
          features: [
            "Multiple WhatsApp numbers",
            "Unlimited staff",
            "Multi-branch management",
            "Advanced roles & permissions",
            "Custom integrations",
            "Dedicated account manager",
          ],
          cta: "Get started",
        },
        {
          name: "Enterprise",
          price: "Contact us",
          desc: "Tailored solutions for large medical groups.",
          features: [
            "Everything in Business",
            "Service level agreement (SLA)",
            "Dedicated hosting",
            "Team training",
            "24/7 priority support",
          ],
          cta: "Contact sales",
          isEnterprise: true,
        },
      ],
      faqHint: "Have a question about plans?",
      faqHintLink: "Read the FAQ",
    },
    faq: {
      badge: "FAQ",
      title: "Questions clinic owners ask",
      subtitle: "Didn't find your answer? Our team is ready to help.",
      items: [
        {
          q: "Do I need a new WhatsApp number?",
          a: "You can use your clinic's existing number or a new one. We connect the official WhatsApp Business number during setup with no hassle.",
        },
        {
          q: "How long does setup take?",
          a: "Most clinics go live within one business day. We handle connecting channels and setting up doctors and services together with your team.",
        },
        {
          q: "Is patient data secure?",
          a: "Yes. We follow the highest healthcare data-protection standards. Your data is encrypted and never shared with any third party.",
        },
        {
          q: "Does Azeer support both Arabic and English?",
          a: "Absolutely. The interface and booking experience work fully in Arabic and English with right-to-left support.",
        },
        {
          q: "Can I change my plan later?",
          a: "Yes, you can upgrade or downgrade anytime. Changes reflect on your next invoice immediately.",
        },
        {
          q: "Does Azeer integrate with other clinic systems?",
          a: "We offer integrations with popular payment platforms and clinic management systems, plus custom integrations on Business and Enterprise plans.",
        },
        {
          q: "What if I need help?",
          a: "Support is available via WhatsApp and email, and Business and Enterprise plans get priority support with a dedicated account manager.",
        },
      ],
      ctaTitle: "Still have a question?",
      ctaSubtitle: "Book a free consultation and we'll answer all your questions.",
      ctaButton: "Book free consultation",
    },
    footer: {
      tagline: "The smart communication and booking platform for medical clinics across the Arab region.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      links: {
        features: "Features",
        pricing: "Pricing",
        clinics: "For clinics",
        faq: "FAQ",
        about: "About us",
        contact: "Contact",
        careers: "Careers",
        privacy: "Privacy policy",
        terms: "Terms & conditions",
      },
      rights: "All rights reserved.",
    },
  },
} as const;
