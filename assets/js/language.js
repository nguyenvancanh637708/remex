// Language translations
const translations = {
    vi: {
        // Navigation
        home: "Trang chủ",
        remittance: "Chuyển tiền & FX",
        fund: "Quản lý Quỹ",
        about: "Về Remex",
        support: "Hỗ trợ",
        login: "Đăng nhập",
        signup: "Đăng ký",
        language: "Ngôn ngữ",


        
        
        fund_cross_border: "Thanh toán xuyên biên giới",
        fund_management: "Quản lý Quỹ",
        fund_consulting: "Tư vấn",
        


        // Hero Section
        heroTitle: "Chuyển tiền về Việt Nam",
        heroSubtitle1: "An tâm đúng luật",
        heroSubtitle2: "Minh bạch",
        heroSubtitle3: "từng giao dịch",
        heroDescription: "Remex là đơn vị trung gian thanh toán, kết nối đối tác nước ngoài với ngân hàng Việt Nam, giúp tiền về đúng người – đúng quy trình – đúng pháp lý.",
        whoIs: "Remex là ai?",
        sendNow: "Chuyển tiền ngay",

        // Trusted Section
        trustedTitle: "Được các ngân hàng và đối tác quốc tế tin tưởng",
        kyc: "Xác minh KYC",
        aml: "Tuân thủ AML",
        compliance: "Tuân thủ quy định",
        licensed: "Được cấp phép",
        complianceNote: "Hoàn toàn tuân thủ các quy định tài chính của Việt Nam và các tiêu chuẩn chống rửa tiền quốc tế",

        // About Section
        aboutTitle: "Remex là ai?",
        remexFlow1: "Khách hàng gửi tiền từ nước ngoài",
        remexFlow2: "REMEX",
        remexFlow3: "Ngân hàng Việt Nam",
        remexFlow4: "Người nhận",
        aboutDescription: "Remex là nền tảng trung gian thanh toán và xử lý chuyển tiền xuyên biên giới, đóng vai trò kết nối giữa đối tác nước ngoài, ngân hàng tại Việt Nam và người nhận tiền cuối cùng.",
        aboutNotBank: "Chúng tôi không phải ngân hàng, cũng không phải ví điện tử hay nền tảng đầu tư. Remex đứng ở vị trí trung gian, đảm bảo giao dịch được:",
        verified: "Xác thực rõ ràng",
        processed: "Xử lý đúng quy trình",
        safeTransfer: "Chuyển tiền an toàn về Việt Nam",
        moreInfo: "Thông tin chi tiết",
        // About Remex (New)
        aboutRemexTitle: "Không chỉ là công ty kiều hối – Remex xây dựng cây cầu tài chính cho Việt Nam",
        aboutdesc: "Remex được thành lập năm 2018 với sứ mệnh kết nối Việt Nam và thế giới, giúp đồng giá trị mà người Việt tạo ra ở nước ngoài được chuyển về quê hương một cách tiện mạch và an toàn.",
        speedtitle: "Tốc độ",
        speed_desc: "Giao dịch gần như theo thời gian thực",
        cost_title: "Chi phí hợp lý",
        cost_desc: "Tỷ giá cạnh tranh, không phí ẩn",
        safety_title: "An toàn",
        safety_desc: "Hạ tầng tuân thủ pháp lý và bảo mật cao",

        // Solutions (New)
        solutionTitle: "Giải pháp kiều hối toàn diện",
        traditionalRemittanceTitle: "Kiều hối truyền thống",
        traditionalRemittanceDesc: "Chuyển tiền nhanh chóng từ nước ngoài về Việt Nam thông qua tích hợp Single API, tối ưu tốc độ và chi phí.",
        salaryRemittanceTitle: "Kiều hối ứng lương",
        salaryRemittanceDesc: "Cho phép người thân tại Việt Nam nhận trước một phần thu nhập của lao động Việt ở nước ngoài trong các tình huống khẩn cấp.",
        investmentRemittanceTitle: "Kiều hối đầu tư",
        investmentRemittanceDesc: "Kết nối cộng đồng người Việt ở nước ngoài với các cơ hội đầu tư cổ phiếu, bất động sản và startup tại Việt Nam.",
        touristRemittanceTitle: "Kiều hối cho khách du lịch quốc tế",
        touristRemittanceDesc: "Đối soát và thanh toán theo thời gian thực cho đơn vị chấp nhận thẻ tại Việt Nam thông qua hạ tầng Remex.",


        // Infrastructure (New)
        infrastructureTitle: "Một hạ tầng - Kết nối toàn bộ dòng tiền",
        singleApiTitle: "Tích hợp Single API",
        singleApiDesc: "Kết nối liền mạch với hệ thống ngân hàng Việt Nam thông qua một API duy nhất.",
        endToEndTitle: "Quy trình End-to-End",
        endToEndDesc: "Quản lý toàn bộ chu trình giao dịch một cách liền mạch",
        complianceReadyTitle: "Sẵn sàng tuân thủ pháp lý",
        complianceReadyDesc: "Đảm bảo tuân thủ quy định tại mọi thị trường",

        // CEO Section (New)
        ceoTitle: "CEO Trịnh Quang Tân",
        // Benefits Section
        benefitsTitle: "Remex giúp bạn những gì?",
        benefitsSubtitle: "Remex giúp việc chuyển tiền từ nước ngoài trở nên đơn giản hơn",
        easy: "DỄ DÀNG",
        easyDesc: "Chỉ với điện thoại đơn giản. Bạn không cần hiểu quy trình phức tạp, Remex hỗ trợ từng bước trong giao dịch.",
        clear: "RÕ RÀNG",
        clearDesc: "Theo dõi giao dịch minh bạch. Biết tiền đang được xử lý ở đâu và khi nào sẽ về tài khoản.",
        secure: "AN TÂM",
        secureDesc: "Đảm bảo tuân thủ quy định. Giao dịch được kiểm soát theo KYC và các yêu cầu pháp lý liên quan.",
        support24: "HỖ TRỢ 24/7",
        support24Desc: "Luôn có đội ngũ hỗ trợ. Khi có vấn đề phát sinh, bạn có thể liên hệ để được hỗ trợ kịp thời.",

        // Services Section
        servicesTitle: "Dịch Vụ Của Remex",
        servicesSubtitle: "Dịch vụ chuyển tiền & thanh toán xuyên biên giới",
        remittanceTitle: "Chuyển tiền & FX",
        remittanceDesc: "Chuyển tiền quốc tế nhanh chóng, phí thấp, tỷ giá tốt nhất thị trường và cạnh tranh.",
        fundTitle: "Quản lý quỹ",
        fundDesc: "Quản lý quỹ từ nhận chuyển nghiệp. Đầu tư đa dạng với chiến lược tối ưu cho các nhà đầu tư.",

        // Why Choose Section
        whyTitle: "Tại sao chọn Remex.vn?",
        whySubtitle: "Vì sao nhiều người chọn Remex để nhận tiền từ nước ngoài?",

        // Hero section split keys
        bridgeTitle: "Cầu nối tài chính",
        bridgeSubtitle1: "cho cộng đồng",
        bridgeSubtitle2: "người Việt toàn cầu",
        paymentSolution: "Giải pháp thanh toán xuyên biên giới, kiều hối",
        paymentDescription: "và tư vấn tài chính chiến lược – an toàn, nhanh chóng",
        paymentTransparent: "và minh bạch.",
        exploreBtn: "Khám phá giải pháp",
        whyChooseBtn: "Vì sao chọn Remex?",

        // Infrastructure Desc
        infrastructureDesc: "Remex đơn giản hóa các quy trình thanh toán xuyên biên giới phức tạp thành một luồng liên mạch, sẵn sàng cho cả inbound và outbound.",
        singleApiDesc: "Kết nối mọi nguồn thanh toán qua một API duy nhất",
        endToEndDesc: "Quản lý toàn bộ chu trình giao dịch một cách liền mạch",
        complianceReadyDesc: "Đảm bảo tuân thủ quy định tại mọi thị trường",

        // CEO Position
        ceoPosition: "Nhà sáng lập & CEO",
        ceoDescription: "Với hơn 20 năm kinh nghiệm trong lĩnh vực ngân hàng, từng giữ vị trí lãnh đạo tại HSBC, Techcombank và MSB. Hiện là chuyên gia trong lĩnh vực thanh toán xuyên biên giới và Open Banking.",

        // App Store & Google Play
        downloadAppStore: "Download on the\nApp Store",
        getGooglePlay: "GET IT ON\nGoogle Play",

        // CTA lines
        "cta.line1": "Người Việt đi đâu",
        "cta.line2": "Remex theo đó",

        // Page titles
        p2pLendingTitle: "P2P Lending & Đấu Giá Lãi Suất",
        p2pLendingDesc: "Nội dung chi tiết về P2P Lending sẽ được phát triển tại đây...",
        remittanceFxTitle: "Chuyển Tiền Quốc Tế & FX",
        remittanceFxDesc: "Nội dung chi tiết về chuyển tiền quốc tế và tỷ giá ngoại tệ sẽ ở đây...",
        fundManagementPageTitle: "Quản Lý Quỹ Tư Nhân",
        fundManagementPageDesc: "Nội dung chi tiết về quản lý quỹ chuyên nghiệp sẽ được trình bày tại đây...",

        // Footer support
        zalosupport: "Zalo Support",
        whatsappsupport: "WhatsApp Support",

        noComplexity: "Không phải tự làm việc với nhiều bên phức tạp",
        trustedIntermediary: "Có Remex đứng ra xử lý và chịu trách nhiệm trung gian",
        clearTracking: "Trạng thái giao dịch rõ ràng, dễ theo dõi",
        quickSupport: "Có hỗ trợ khi xảy ra sự cố",

        //
        fundManagementTitle: "Quản lý quỹ",
        fundManagementDesc1: "- Sở hữu giấy phép quản lý quỹ",
        fundManagementDesc2: "- Đầu tư tối đa 49% vào SME Việt Nam",
        fundManagementDesc3: "- Đối tác quản trị địa phương cho quỹ nước ngoài",

        maConsultingTitle: "Tư vấn M&A",
        maConsultingDesc1: "- Tư vấn chiến lược cho các thương vụ M&A tại Việt Nam",
        maConsultingDesc2: "- Am hiểu thị trường và hỗ trợ đàm phán",


        legalConsultingTitle: "Tư vấn pháp lý",
        legalConsultingDesc: "- Hỗ trợ cấp phép, tuân thủ và gia nhập thị trường Việt Nam",


        // How It Works Section
        howTitle: "Remex hoạt động như thế nào?",
        howSubtitle: "Cách Remex xử lý một giao dịch chuyển tiền",
        step1: "Tạo yêu cầu chuyển tiền",
        step1Desc: "Người gửi cung cấp thông tin cần thiết cho giao dịch.",
        step2: "Xác thực & kiểm tra giao dịch",
        step2Desc: "Remex thực hiện kiểm tra thông tin và xác thực theo quy trình.",
        step3: "Xử lý thanh toán & chuyển tiền",
        step3Desc: "Giao dịch được xử lý và chuyển qua hệ thống ngân hàng tại Việt Nam.",
        step4: "Tiền về tài khoản người nhận",
        step4Desc: "Người nhận nhận tiền trực tiếp vào tài khoản tại Việt Nam.",

        // Testimonials
        testimonialsTitle: "Khách hàng nói gì về chúng tôi",
        testimonialsSubtitle: "Những trải nghiệm thực tế từ cộng đồng người dùng Remex.vn",
        testimonial1: "Remex.vn đã giúp tôi tối ưu hóa danh mục đầu tư với lợi nhuận vượt kỳ vọng. Nền tảng dễ sử dụng và hỗ trợ khách hàng rất tận tâm.",
        investor: "Nhà đầu tư",
        testimonial2: "Chuyển tiền quốc tế chưa bao giờ dễ dàng đến vậy. Phí thấp, tỷ giá tốt, và tiền đến nhanh. Tôi rất hài lòng với dịch vụ.",
        entrepreneur: "Doanh nhân",
        testimonial3: "P2P lending trên Remex.vn giúp tôi có thêm nguồn thu nhập thụ động ổn định. Quy trình minh bạch, an toàn và hiệu quả.",
        itEngineer: "Kỹ sư IT",

        // App Section
        appTitle: "Quản lý và theo dõi giao dịch",
        appSubtitle: "Theo dõi giao dịch mọi lúc, mọi nơi",
        friendlyUI: "Giao diện thân thiện",
        friendlyUIDesc: "Thiết kế hiện đại, dễ sử dụng cho mọi đối tượng",
        realtimeTracking: "Theo dõi giao dịch realtime",
        realtimeTrackingDesc: "Theo dõi trạng thái giao dịch theo thời gian thực",
        notifications: "Nhận thông báo khi giao dịch hoàn tất",
        notificationsDesc: "Thông báo luôn cập nhật",

        // CTA Section
        ctaTitle: "Người Việt đi đâu – Remex theo đó",
        ctaSubtitle: "Hãy để Remex lo liệu các thủ tục pháp lý và kỹ thuật.",
        ctaDescription: "Tham gia Remex để trải nghiệm dịch vụ chuyển tiền xuyên biên giới đơn giản, rõ ràng và minh bạch.",
        signupFree: "Liên hệ Remex",

        // Footer
        footerDesc: "Remex là nền trung gian thanh toán xuyên biên giới đáng tin cậy, giúp chuyển tiền từ nước ngoài đến người nhận tại Việt Nam một cách an toàn và hợp pháp.",
        company: "Công ty",
        recruitment: "Tuyển dụng",
        news: "Tin tức",
        products: "Sản phẩm",
        contact: "Liên hệ",
        hotline: "Hotline: 1900-xxx",
        copyright: "© 2025 Remex.vn. All rights reserved.",
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản dịch vụ",
        complianceLink: "Tuân thủ pháp luật"
    },
    en: {
        // Navigation
        home: "Home",
        remittance: "Money Transfer & FX ",
        fund: "Service Solution",
        about: "About Remex",
        support: "Support",
        login: "Log In",
        signup: "Sign Up",
        language: "Language",

        

        fund_cross_border: "Cross border payment",
        fund_management: "Fund Management",
        fund_consulting: "Consulting",
        // Hero Section
        heroTitle: "Send Money to Vietnam",
        heroSubtitle1: "We go where Vietnamese go",
        heroSubtitle2: "Seamless, Secure",
        heroSubtitle3: "and Compliant Transactions",
        heroDescription: "Remex is a leading cross-border payment intermediary and strategic consulting provider, connecting global partners with Vietnam to ensure seamless, secure, and legally compliant money transfers.",
        whoIs: "What is Remex?",
        sendNow: "Send Money Now",

        // Trusted Section
        trustedTitle: "Trusted by Banks and International Partners",
        kyc: "KYC Verification",
        aml: "AML Compliance",
        compliance: "Regulatory Compliance",
        licensed: "Licensed",
        complianceNote: "Fully compliant with Vietnam's financial regulations and international anti-money laundering standards",

        // About Section
        aboutTitle: "What is Remex?",
        remexFlow1: "Customer sends money from abroad",
        remexFlow2: "REMEX",
        remexFlow3: "Vietnamese Banks",
        remexFlow4: "Recipient",
        aboutDescription: "Founded in 2018 and headquartered in Hanoi, Remex Global Payment Services JSC bridges Vietnam with the world through innovative cross-border payment solutions and strategic consulting.",
        aboutNotBank: "We are not a bank or e-wallet. Remex acts as a trusted intermediary and strategic gateway, ensuring transactions are:",
        verified: "Secure and authenticated",
        processed: "Efficiently processed",
        safeTransfer: "Safely delivered to Vietnam",
        moreInfo: "More Details",

        // About Remex (New)
        aboutRemexTitle: "More Than a Remittance Company: Building the Ultimate Bridge for Vietnam",
        aboutdesc: "Established in 2018, Remex empowers overseas Vietnamese communities and global businesses by enabling seamless, secure, and cost-effective cross-border financial flows. We serve Vietnamese communities wherever they operate globally.",
        speedtitle: "Speed",
        speed_desc: "Near real-time transaction processing",
        cost_title: "Affordability",
        cost_desc: "Competitive pricing with full fee transparency",
        safety_title: "Security",
        safety_desc: "A robust legal compliance framework supported by advanced security infrastructure.",


        // Solutions (New)
        solutionTitle: "Comprehensive Cross-Border Solutions",
        traditionalRemittanceTitle: "Traditional Remittance",
        traditionalRemittanceDesc: "Fast and secure transfers to Vietnam through a single API integration, optimizing both transaction speed and cost efficiency.",
        salaryRemittanceTitle: "Advance Salary Remittance",
        salaryRemittanceDesc: "Enables families in Vietnam to access a portion of overseas workers’ earned wages in emergency situations.",
        investmentRemittanceTitle: "Investment Remittance",
        investmentRemittanceDesc: "Connects overseas Vietnamese with opportunities to invest in Vietnamese stocks, real estate, and startups in full compliance with applicable regulations, ensuring operational ease and transparency.",
        touristRemittanceTitle: "Remittance for International Travelers",
        touristRemittanceDesc: "Real-time currency exchange and merchant settlement services in Vietnam",

        // Infrastructure (New)
        infrastructureTitle: "One Infrastructure – Powering All Financial Flows",
        singleApiTitle: "Single API Integration",
        singleApiDesc: "Connect multiple payment sources through a single API",
        endToEndTitle: "End-to-End Process",
        endToEndDesc: "Seamlessly manage the entire transaction lifecycle from initiation to settlement",
        complianceReadyTitle: "Compliance Ready",
        complianceReadyDesc: "Designed to support regulatory compliance across multiple jurisdictions",

        // CEO Section (New)
        ceoTitle: "CEO Trinh Quang Tan",

        // Benefits Section
        benefitsTitle: "How Remex Helps You",
        benefitsSubtitle: "Empowering overseas Vietnamese with seamless global financial solutions",
        easy: "EASY",
        easyDesc: "Simple mobile process – no complex procedures needed. Remex guides you every step.",
        clear: "TRANSPARENT",
        clearDesc: "Real-time tracking so you always know where your money is.",
        secure: "SECURE",
        secureDesc: "100% compliant with KYC and legal standards for peace of mind.",
        support24: "24/7 SUPPORT",
        support24Desc: "Dedicated team ready to assist anytime issues arise.",

        // Services Section
        servicesTitle: "Remex Services",
        servicesSubtitle: "Cross-border payments, fund management, and strategic consulting",
        remittanceTitle: "Money Transfer & FX",
        remittanceDesc: "Fast, low-cost international transfers with the best market rates.",
        fundTitle: "Fund Management & Consulting",
        fundDesc: "Licensed fund management, M&A advisory, and regulatory consulting for market entry.",

        // Why Choose Section
        whyTitle: "Why Choose Remex?",
        whySubtitle: "The trusted financial compass for the global Vietnamese community",

        // Hero section split keys
        bridgeTitle: "The Financial Bridge",
        bridgeSubtitle1: "for Overseas Vietnamese Communities",
        bridgeSubtitle2: "and Global Businesses",
        paymentSolution: "Cross-border payment and remittance solutions,",
        paymentDescription: "complemented by strategic financial consulting — secure, efficient,",
        paymentTransparent: "and transparent.",
        exploreBtn: "Explore Solutions",
        whyChooseBtn: "Why Choose Remex?",

        // Infrastructure Desc
        infrastructureDesc: "Remex streamlines complex cross-border payments into seamless inbound and outbound flows.",
        singleApiDesc: "Connect all payment sources via one API",
        endToEndDesc: "Seamlessly manage the full transaction lifecycle",
        complianceReadyDesc: "Guaranteed compliance in every market",

        // CEO Position
        ceoPosition: "Founder & CEO",
        ceoDescription: "With over 20 years in banking at HSBC, Techcombank, and MSB, Trinh Quang Tan is a recognized expert in cross-border payments and Open Banking.",

        // App Store & Google Play
        downloadAppStore: "Download on the\nApp Store",
        getGooglePlay: "GET IT ON\nGoogle Play",

        // CTA lines
        "cta.line1": "Wherever Vietnamese people go",
        "cta.line2": "Remex follows",

        // Page titles
        p2pLendingTitle: "P2P Lending & Rate Auctions",
        p2pLendingDesc: "Detailed P2P Lending content will be developed here...",
        remittanceFxTitle: "International Money Transfer & FX",
        remittanceFxDesc: "Detailed information about international remittance and FX rates will be here...",
        fundManagementPageTitle: "Private Fund Management",
        fundManagementPageDesc: "Detailed professional fund management content will be presented here...",

        // Footer support
        zalosupport: "Zalo Support",
        whatsappsupport: "WhatsApp Support",

        noComplexity: "Eliminates the need to manage multiple complex counterparties",
        trustedIntermediary: "Remex serves as a trusted intermediary, managing the entire transaction process",
        clearTracking: "Clear and easy transaction tracking",
        quickSupport: "Responsive and dedicated support for all operational issuesh",

        // How It Works Section
        howTitle: "How Remex Works",
        howSubtitle: "Step-by-step cross-border transfer process",
        step1: "Create Transfer Request",
        step1Desc: "Sender provides required transaction details.",
        step2: "Verify & Check Transaction",
        step2Desc: "Remex authenticates and verifies per regulations.",
        step3: "Process Payment & Transfer",
        step3Desc: "Funds processed securely through Vietnamese banks.",
        step4: "Money Arrives in Recipient's Account",
        step4Desc: "Recipient receives funds directly in their Vietnam account.",

        // Testimonials
        testimonialsTitle: "What Our Customers Say",
        testimonialsSubtitle: "Verified experiences from Remex clients and partners",
        testimonial1: "Remex optimized my overseas investments with excellent returns and dedicated support.",
        investor: "Investor",
        testimonial2: "Fast, low-fee transfers with great rates – highly recommended.",
        entrepreneur: "Entrepreneur",
        testimonial3: "Secure and transparent process for all my cross-border needs.",
        itEngineer: "IT Engineer",

        // App Section
        appTitle: "Manage and Track Transactions",
        appSubtitle: "Secure access anytime, anywhere",
        friendlyUI: "User-Friendly Interface",
        friendlyUIDesc: "Modern and intuitive for everyone",
        realtimeTracking: "Real-time Tracking",
        realtimeTrackingDesc: "Monitor transaction status instantly",
        notifications: "Instant Completion Notifications",
        notificationsDesc: "Stay informed at every stage of the transaction",

        // CTA Section
        ctaTitle: "Empowering Vietnamese communities through seamless global financial connectivity",
        ctaSubtitle: "Let Remex handle the complexity.",
        ctaDescription: "Join Remex for simple, secure, and compliant cross-border financial solutions.",
        signupFree: "Contact Remex",

        // Footer
        footerDesc: "Remex Global Payment Services JSC – Your trusted partner for cross-border payments, remittances, and strategic financial consulting in Vietnam.",
        company: "Company",
        recruitment: "Careers",
        news: "News",
        products: "Products",
        contact: "Contact",
        hotline: "Hotline: 1900-xxx",
        copyright: "© 2025 Remex.vn. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        complianceLink: "Regulatory Compliance",

        // Fund Management, Consulting Services
        fundManagementTitle: "Fund Management",
        fundManagementDesc1: "- Licensed to invest up to 49% in Vietnamese SMEs",
        fundManagementDesc2: "- Local administrative partner for foreign funds",
        fundManagementDesc3: "- Full compliance and reporting support",

        maConsultingTitle: "M&A Consulting",
        maConsultingDesc1: "- Strategic advisory for M&A deals in Vietnam",
        maConsultingDesc2: "- Deep market insights and negotiation support",

        legalConsultingTitle: "Regulatory & Legal Consulting",
        legalConsultingDesc: "- Expert guidance on licensing, compliance, and market entry in Vietnam"
    },
    ja: {
        // Navigation
        home: "ホーム",
        remittance: "送金・FX",
        fund: "ファンド管理",
        about: "Remexについて",
        support: "サポート",
        login: "ログイン",
        signup: "サインアップ",
        language: "言語",

        // Hero Section
        heroTitle: "ベトナムへ安心して送金",
        heroSubtitle1: "完全法令遵守",
        heroSubtitle2: "透明性のある",
        heroSubtitle3: "すべての取引",
        heroDescription: "Remexは国際的なパートナーとベトナム銀行を繋ぐ支払い仲介プラットフォームです。お金が正しい人に、正しい手続きで、法的に確実に到着することをお約束します。",
        whoIs: "Remexとは？",
        sendNow: "今すぐ送金",

        // Trusted Section
        trustedTitle: "銀行と国際的なパートナーから信頼されています",
        kyc: "KYC認証",
        aml: "AML対応",
        compliance: "規制対応",
        licensed: "ライセンス取得済",
        complianceNote: "ベトナムの金融規制と国際的なマネーロンダリング防止基準に完全準拠しています",

        // About Section
        aboutTitle: "Remexとは？",
        remexFlow1: "顧客が海外からお金を送る",
        remexFlow2: "REMEX",
        remexFlow3: "ベトナム銀行",
        remexFlow4: "受取人",
        aboutDescription: "Remexは国境を超えた支払い仲介プラットフォームで、国際的なパートナー、ベトナム銀行、最終受取人を繋ぎます。",
        aboutNotBank: "我々は銀行、電子ウォレット、投資プラットフォームではありません。Remexは信頼できる仲介者として、すべての取引が以下のことを保証します：",
        verified: "明確に認証される",
        processed: "適切に処理される",
        safeTransfer: "ベトナムへ安全に送金される",
        moreInfo: "詳細情報",

        // About Remex (New)
        aboutRemexTitle: "単なる送金会社ではなく – Remexがベトナムの金融橋梁を構築",
        aboutdesc: "2018年に設立されたRemexのミッションは、ベトナムと世界を繋ぎ、海外で価値を創造するベトナム人が便利かつ安全に故郷へ送金できるようにすることです。",
        speedtitle: "スピード",
        speed_desc: "取引はほぼリアルタイムで処理されます",
        cost_title: "コスト",
        cost_desc: "低料金、競争力のある為替レート",
        safety_title: "安全",
        safety_desc: "規制遵守、情報の安全な取り扱い",




        // Solutions (New)
        solutionTitle: "包括的な送金ソリューション",
        traditionalRemittanceTitle: "伝統的な送金",
        traditionalRemittanceDesc: "Single API統合を通じて、ベトナムへの迅速な国際送金を実現し、速度とコストを最適化します。",
        salaryRemittanceTitle: "給与前払い送金",
        salaryRemittanceDesc: "緊急時に海外で働くベトナム人労働者の収入の一部をベトナムの家族が受け取れるようにします。",
        investmentRemittanceTitle: "投資送金",
        investmentRemittanceDesc: "海外のベトナム人コミュニティと、ベトナムの株式、不動産、スタートアップへの投資機会を結びつけます。",
        touristRemittanceTitle: "国際観光客向け送金",
        touristRemittanceDesc: "Remexのインフラを通じて、ベトナムの加盟店でリアルタイムに外貨両替と支払いを行います.",



        // Infrastructure (New)
        infrastructureTitle: "1つのインフラ - すべてのキャッシュフローを接続",

        // CEO Section (New)
        ceoTitle: "CEO トリン・クアン・タン",

        // Benefits Section
        benefitsTitle: "Remexがあなたを助ける方法",
        benefitsSubtitle: "国際送金をこれまで以上にシンプルに",
        easy: "簡単",
        easyDesc: "携帯電話だけで完結。複雑な手続きを理解する必要はありません。Remexがすべてのステップをサポートします。",
        clear: "透明",
        clearDesc: "送金状況を明確に追跡できます。お金がどこにあるか、いつ到着するかを知ることができます。",
        secure: "安心",
        secureDesc: "法令遵守を保証します。KYCと法的要件に基づいて、すべての取引が監視されます。",
        support24: "24/7サポート",
        support24Desc: "いつもサポートしています。問題が発生したら、チームはいつでもサポートする準備ができています。",

        // Services Section
        servicesTitle: "Remexのサービス",
        servicesSubtitle: "国境を超えた送金・支払いサービス",
        remittanceTitle: "送金・FX",
        remittanceDesc: "迅速な国際送金、低い手数料、競争力のある為替レート",
        fundTitle: "ファンド管理",
        fundDesc: "プロフェッショナルなファンド管理。投資家向けに最適化された多様な投資戦略",

        // Why Choose Section
        whyTitle: "Remexを選ぶ理由",
        whySubtitle: "なぜ多くの人がRemexを選んで海外から送金を受け取るのか？",

        // Hero section split keys
        bridgeTitle: "金融の橋",
        bridgeSubtitle1: "世界中の",
        bridgeSubtitle2: "ベトナム人コミュニティのための",
        paymentSolution: "クロスボーダー決済ソリューション、送金",
        paymentDescription: "および戦略的な財務コンサルティング – 安全、迅速",
        paymentTransparent: "かつ透明。",
        exploreBtn: "ソリューションを探す",
        whyChooseBtn: "なぜRemexを選ぶのか？",

        // Infrastructure Desc
        infrastructureDesc: "Remexは複雑なクロスボーダー決済プロセスをシームレスなフローに簡素化し、インバウンドとアウトバウンドの両方に対応します。",
        singleApiDesc: "一つのAPIで全ての支払いソースを接続",
        endToEndDesc: "取引サイクル全体をシームレスに管理",
        complianceReadyDesc: "すべての市場で規制遵守を確保",

        // CEO Position
        ceoPosition: "創業者 & CEO",
        ceoDescription: "銀行業界で20年以上の経験を持ち、HSBC、Techcombank、MSBでリーダーシップを歴任。現在、クロスボーダー決済とOpen Bankingの専門家です。",

        // App Store & Google Play
        downloadAppStore: "App Storeからダウンロード",
        getGooglePlay: "Google Playで入手",

        // CTA lines
        "cta.line1": "ベトナム人がどこへ行っても",
        "cta.line2": "Remexが従う",

        // Page titles
        p2pLendingTitle: "P2Pレンディング & レートオークション",
        p2pLendingDesc: "P2Pレンディングの詳細コンテンツはここに掲載されます...",
        remittanceFxTitle: "国際送金 & FX",
        remittanceFxDesc: "国際送金と為替レートに関する詳細情報はここに...",
        fundManagementPageTitle: "プライベートファンド管理",
        fundManagementPageDesc: "専門的なファンド管理の詳細はここに掲載されます...",

        // Footer support
        zalosupport: "Zaloサポート",
        whatsappsupport: "WhatsAppサポート",

        noComplexity: "複数の複雑な当事者と対応する必要がない",
        trustedIntermediary: "Remexがすべてを処理し、信頼できる仲介者として責任を負う",
        clearTracking: "取引状況が明確で追跡が簡単",
        quickSupport: "問題が発生したときにサポートが利用できる",

        // How It Works Section
        howTitle: "Remexの仕組み",
        howSubtitle: "送金取引のステップバイステップのプロセス",
        step1: "送金申請を作成",
        step1Desc: "送信者が必要な取引情報を提供します。",
        step2: "取引を認証・確認",
        step2Desc: "Remexが情報を確認し、手順に従って認証します。",
        step3: "支払いを処理・送金",
        step3Desc: "取引がベトナム銀行システムを通じて処理されます。",
        step4: "受取人の口座にお金が到着",
        step4Desc: "受取人がベトナムの口座に直接お金を受け取ります。",

        // Testimonials
        testimonialsTitle: "お客様の声",
        testimonialsSubtitle: "Remex.vnコミュニティからの実際の体験",
        testimonial1: "Remex.vnは期待を超える利益で投資ポートフォリオを最適化するのに役立ちました。プラットフォームは使いやすく、カスタマーサポートは非常に献身的です。",
        investor: "投資家",
        testimonial2: "国際送金がこんなに簡単だったことはありません。手数料が低く、為替レートが良く、送金が速い。サービスに非常に満足しています。",
        entrepreneur: "起業家",
        testimonial3: "Remex.vnのP2Pレンディングで安定した不労所得を得られました。プロセスは透明で安全、効率的です。",
        itEngineer: "ITエンジニア",

        // App Section
        appTitle: "取引を管理・追跡",
        appSubtitle: "いつでも、どこでも取引を追跡",
        friendlyUI: "ユーザーフレンドリーなインターフェース",
        friendlyUIDesc: "すべての人が使いやすい最新デザイン",
        realtimeTracking: "リアルタイム追跡",
        realtimeTrackingDesc: "取引状況をリアルタイムで追跡",
        notifications: "完了時に通知を受け取る",
        notificationsDesc: "常に最新の通知を受け取る",

        // CTA Section
        ctaTitle: "ベトナム人が行くところ – Remexが従う",
        ctaSubtitle: "Remexに法的・技術的手続きをお任せください。",
        ctaDescription: "Remexに参加して、シンプルで透明で信頼できる国際送金体験をしてください。",
        signupFree: "Remexに連絡",

        // Footer
        footerDesc: "Remexは信頼できる国際送金仲介プラットフォームで、海外からベトナムへ安全かつ合法的にお金を送るのを助けます。",
        company: "企業",
        recruitment: "採用情報",
        news: "ニュース",
        products: "製品",
        contact: "お問い合わせ",
        hotline: "ホットライン: 1900-xxx",
        copyright: "© 2025 Remex.vn. All rights reserved.",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        complianceLink: "規制対応",

        // Fund Management, Consulting Services
        fundManagementTitle: "ファンド管理",
        fundManagementDesc1: "- ライセンスを持つファンド管理",
        fundManagementDesc2: "- ベトナム中小企業への最大49%投資",
        fundManagementDesc3: "- 海外ファンドのためのローカルガバナンスパートナー",

        maConsultingTitle: "M&Aコンサルティング",
        maConsultingDesc1: "- ベトナムのM&A取引に関する戦略的コンサルティング",
        maConsultingDesc2: "- 市場知識と交渉支援",

        legalConsultingTitle: "法務コンサルティング",
        legalConsultingDesc: "- ライセンス、コンプライアンス、市場参入の支援"
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'vi';

// Initialize language
function initLanguage() {
    setLanguage(currentLanguage);
}

// Set language
function setLanguage(lang) {
    if (!translations[lang]) lang = 'vi';
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageSelector();
}

// Update page language
function updatePageLanguage() {
    const t = translations[currentLanguage];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
                el.value = t[key];
                el.textContent = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;

    // Update text content for specific elements (for elements without data-i18n)
    updateDynamicContent();
}

// Update language selector button
function updateLanguageSelector() {
    const langMap = {
        vi: { flag: 'vn', name: 'Tiếng Việt' },
        en: { flag: 'gb', name: 'English' },
        ja: { flag: 'jp', name: '日本語' }
    };

    const langInfo = langMap[currentLanguage];
    const langButtons = document.querySelectorAll('[data-lang-selector]');

    langButtons.forEach(btn => {
        const flagImg = btn.querySelector('img');
        if (flagImg) {
            flagImg.src = `https://flagcdn.com/24x18/${langInfo.flag}.png`;
            flagImg.alt = langInfo.name;
        }
    });
}

// Get translation by key
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Update dynamic content that can't use data-i18n
function updateDynamicContent() {
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initLanguage);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setLanguage, t, currentLanguage, translations };
}

function updateDynamicContent() {
    const hero = document.getElementById('heroSection');
    if (!hero) return;

    if (currentLanguage === 'en') {
        if (window.innerWidth >= 768) { // md breakpoint
            hero.style.paddingTop = '8rem';
            hero.style.paddingBottom = '4rem';
        } else {
            hero.style.paddingTop = '7rem';
            hero.style.paddingBottom = '4rem';
        }
    } else { // vi/ja
        if (window.innerWidth >= 768) {
            hero.style.paddingTop = '10rem';
            hero.style.paddingBottom = '6rem';
        } else {
            hero.style.paddingTop = '7rem';
            hero.style.paddingBottom = '4rem';
        }
    }
}

// Gọi luôn khi resize
window.addEventListener('resize', updateDynamicContent);