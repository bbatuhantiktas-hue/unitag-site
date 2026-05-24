import React, { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  BadgePercent,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  Cookie,
  ExternalLink,
  GraduationCap,
  Home,
  MessageCircle,
  School,
  ShoppingBag,
  Sparkles,
  Tags,
  Users,
  X,
} from "lucide-react";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdJSSfCWHtEZrfzOYqF8ZmdacY-Vk5jsZ5FKjiZOKSo20Ei7g/viewform?usp=header";
const INSTAGRAM_URL = "https://www.instagram.com/unitag_app/";
const LINKEDIN_URL = "https://www.linkedin.com/company/unitagtr/";
const APP_STORE_URL = "https://apps.apple.com/tr/app/%C3%BCni-tag-%C3%B6%C4%9Frenci-platformu/id6764850080?l=tr";

const navItems = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Temsilcilik", href: "#temsilcilik" },
  { label: "Yol Haritası", href: "#roadmap" },
  { label: "Ekip", href: "#ekip" },
  { label: "SSS", href: "#sss" },
];

const features = [
  {
    icon: BadgePercent,
    title: "Öğrenci İndirimleri",
    text: "Kafe, restoran, spor, eğlence ve hizmet alanlarında öğrencilere özel fırsatları keşfet.",
  },
  {
    icon: ShoppingBag,
    title: "İkinci El Alım Satım",
    text: "Kitap, elektronik, mobilya ve öğrenci ihtiyaçlarına yönelik ilanları tek yerde topla.",
  },
  {
    icon: Home,
    title: "Ev, Oda ve Yurt",
    text: "Öğrenciler için konaklama seçeneklerini şehir ve kampüs odağında daha kolay incele.",
  },
  {
    icon: Tags,
    title: "Kampüs Fırsatları",
    text: "Üniversite çevresindeki avantajları, fırsatları ve öğrenci odaklı içerikleri takip et.",
  },
];

const roadmap = [
  { icon: Briefcase, title: "Kariyer ve İş İlanları", text: "Staj, part-time iş ve kariyer fırsatları için öğrencilere özel yeni alan." },
  { icon: School, title: "Üniversite Tanıtımları", text: "Üniversiteler, kampüsler, bölümler ve şehir yaşamı hakkında tanıtım sayfaları." },
  { icon: MessageCircle, title: "Sohbet Özelliği", text: "İlanlar, fırsatlar ve kampüs konuları için daha hızlı iletişim altyapısı." },
  { icon: BookOpen, title: "Ders Notları Paylaşımı", text: "Ders notları, kaynaklar ve faydalı içerikler için topluluk odaklı paylaşım alanı." },
  { icon: Users, title: "Temsilcilik Ağı", text: "Farklı üniversitelerde temsilcilerle büyüyen kampüs bazlı öğrenci ağı." },
  { icon: Building2, title: "Daha Fazla Şehir ve İşletme", text: "Daha fazla şehirde daha fazla öğrenci dostu işletme ve aktif kullanıcı topluluğu." },
];

const team = [
  { name: "Batuhan Tiktaş", role: "Ortak Kurucu", focus: "Ürün vizyonu, büyüme stratejisi ve kampüs ağı." },
  { name: "Batuhan Dinçer", role: "Ortak Kurucu", focus: "Operasyon, iş birlikleri ve temsilcilik yapılanması." },
  { name: "Cemil Bakırcı", role: "Geliştirici", focus: "Uygulama geliştirme, teknik altyapı ve ürün deneyimi." },
];

const faqs = [
  {
    q: "Unitag kimler için?",
    a: "Unitag; öğrencilerin indirim, ilan, konaklama ve kampüs odaklı ihtiyaçlarını tek platformda takip edebilmesi için geliştirilen bir öğrenci platformudur.",
  },
  {
    q: "Herkes kayıt olabilir mi?",
    a: "Evet, Unitag’a herkes kayıt olabilir. Ancak öğrencilere özel belirli özellikleri kullanabilmek için öğrenci belgesiyle doğrulama yapılması gerekir.",
  },
  {
    q: "İşletmeler nasıl kayıt olur?",
    a: "İşletmeler Unitag uygulaması içindeki işletme kayıt süreci üzerinden platforma dahil olabilir. Web sitesinde ayrıca işletme başvuru formu kullanılmaz.",
  },
  {
    q: "Üniversite temsilcisi olmak için ne yapmalıyım?",
    a: "Sitedeki temsilcilik başvuru formuna giderek bilgilerini paylaşabilirsin. Başvurular Google Form üzerinden alınır.",
  },
  {
    q: "Unitag’da sonraki güncellemelerde neler olacak?",
    a: "Kariyer ve iş ilanları alanı, üniversite tanıtımları, sohbet özelliği, ders notları paylaşımı ve temsilcilik ağı gibi geliştirmeler yol haritasında yer alıyor.",
  },
];

const legalDocs = {
  cookie: {
    title: "Çerez Politikası",
    updated: "Son güncelleme: 2026",
    sections: [
      ["Amaç", "Bu Çerez Politikası, öğrenciler için indirim ve kampanya hizmeti sunan Unitag mobil uygulaması ve web platformu kapsamında kullanılan çerezler hakkında kullanıcıları bilgilendirmek amacıyla hazırlanmıştır."],
      ["1. Çerez Nedir?", "Çerezler, ziyaret ettiğiniz internet siteleri veya kullandığınız uygulamalar tarafından cihazınıza kaydedilen küçük veri dosyalarıdır. Bu dosyalar kullanıcı tercihlerini hatırlama, oturum yönetimi, kullanıcı deneyimini geliştirme ve güvenlik kontrolleri için kullanılabilir."],
      ["2. Çerezlerin Kullanım Amaçları", "Unitag platformunda çerezler; kullanıcı deneyimini geliştirmek, kullanıcı tercihlerini saklamak, uygulama performansını analiz etmek, sistem hatalarını tespit etmek, konuma dayalı hizmet sağlamak, güvenlik kontrolleri yapmak ve kampanya performanslarını ölçmek amacıyla kullanılabilir."],
      ["3. Kullanılan Çerez Türleri", "Zorunlu çerezler temel işlevlerin çalışması için gereklidir. Performans ve analiz çerezleri kullanım davranışlarını ve hata raporlarını anlamaya yardımcı olur. İşlevsel çerezler dil ve kullanıcı ayarları gibi tercihleri hatırlar. Reklam ve pazarlama çerezleri kullanıcıların ilgisini çekebilecek kampanya ve işletme tekliflerinin sunulmasını sağlayabilir."],
      ["4. Çerezler Aracılığıyla İşlenen Veriler", "IP adresi, cihaz bilgileri, oturum bilgileri, uygulama kullanım davranışları ve izin verilmesi halinde konum bilgisi işlenebilir. Bu veriler KVKK kapsamında işlenmektedir."],
      ["5. Üçüncü Taraflarla Paylaşım", "Çerezler aracılığıyla elde edilen veriler analiz ve istatistik hizmet sağlayıcıları, teknik altyapı hizmet sağlayıcıları ve yasal yükümlülük durumunda yetkili kamu kurumlarıyla paylaşılabilir. Veriler yalnızca hizmetin sunulması amacıyla paylaşılır."],
      ["6. Saklanma Süresi", "Oturum çerezleri oturum süresi boyunca, kalıcı çerezler ise kullanım amaçlarına göre belirli süre boyunca cihazda saklanabilir. Süre sonunda çerezler otomatik olarak silinir."],
      ["7. Çerezlerin Yönetimi", "Kullanıcılar cihaz veya tarayıcı ayarları üzerinden çerezleri engelleyebilir, mevcut çerezleri silebilir veya çerez kullanımını sınırlandırabilir. Ancak çerezlerin devre dışı bırakılması bazı özelliklerin çalışmamasına neden olabilir."],
      ["8. Değişiklik", "Bu politika gerekli görüldüğünde güncellenebilir. Güncellenmiş politika uygulama veya web sitesi üzerinden kullanıcılara sunulur."],
      ["9. İletişim", "E-posta: destek@unitagapp.com.tr | Adres: Kozluk Mahallesi, Vadi Apartmanı No:16 Daire:7, İzmit / Kocaeli"],
    ],
  },
  kvkk: {
    title: "UNITAG Aydınlatma Metni",
    updated: "Son güncelleme: 2026",
    sections: [
      ["Amaç", "Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, Unitag tarafından veri sorumlusu sıfatıyla, kullanıcılarımızın ve işletmecilerimizin kişisel verilerinin işlenme süreçleri hakkında bilgilendirilmesi amacıyla hazırlanmıştır."],
      ["1. Veri Sorumlusu", "Unitag olarak, kişisel verilerinizin güvenliği ve gizliliği önceliğimizdir. İletişim bilgilerimiz metnin sonunda yer almaktadır."],
      ["2. İşlenen Kişisel Veriler", "Kullanıcılar için konum, kamera erişimi, e-posta, telefon, ad-soyad ve öğrenci doğrulama bilgileri işlenebilir. İşletmeciler için konum, kamera erişimi, iletişim bilgileri, kurumsal e-posta ve işletmenin genel bilgileri işlenebilir."],
      ["3. Veri İşleme Amaçları", "Kişisel verileriniz uygulama özelliklerinin sunulması, indirimler ve konum bazlı fırsatların gösterilmesi, pazarlama ve kampanya faaliyetlerinin yürütülmesi, kullanıcı ve öğrenci statüsünün doğrulanması ve işletme-kullanıcı iletişiminin sağlanması amacıyla işlenebilir."],
      ["4. Veri İşleme Yöntemleri", "Kişisel verileriniz web sitesi ve mobil uygulama üzerinden tamamen otomatik veya yarı otomatik yöntemlerle, elektronik ortamda toplanmaktadır."],
      ["5. Veri Paylaşımı", "Toplanan veriler yalnızca hizmetin ifası için gerekli olduğu durumlarda iş ortaklarımızla, yetkili kamu kurum ve kuruluşlarıyla veya operasyonel destek aldığımız üçüncü taraf hizmet sağlayıcılarla KVKK’ya uygun şekilde paylaşılabilir."],
      ["6. Veri Saklama Süresi", "Kişisel verileriniz işleme amacının gerektirdiği süre boyunca veya yasal zaman aşımı süreleri dikkate alınarak saklanacak; süre sonunda imha edilecek veya anonim hale getirilecektir."],
      ["7. Veri Sahibinin Hakları", "KVKK m.11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, yanlış verilerin düzeltilmesini isteme, verilerin silinmesini veya yok edilmesini talep etme ve uğradığınız zararın giderilmesini isteme haklarına sahipsiniz."],
      ["8. İletişim Bilgileri", "E-posta: destek@unitagapp.com.tr | Adres: Kozluk Mahallesi, Vadi Apartmanı No:16 Daire:7, İzmit / Kocaeli"],
      ["Not", "Kamera ve konum gibi hassas izinler mobil cihazlarda işletim sistemi düzeyinde ayrıca sorulmalıdır. Bu metin, bu izinlerin neden alındığını açıklayan hukuki dayanak niteliğindedir."],
    ],
  },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Kicker({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/12 bg-red-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-red-600">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </div>
  );
}

function SplitText({ children, className = "" }) {
  const words = String(children).split(" ");
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 42, rotateX: -45, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.65 }}
          transition={{ duration: 0.62, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
          className="mr-[0.18em] inline-block origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-red-600" />;
}

function AmbientNetwork({ variant = "default" }) {
  const { scrollYProgress } = useScroll();
  const driftY = useTransform(scrollYProgress, [0, 1], variant === "dense" ? [-28, 82] : [-18, 62]);
  const driftX = useTransform(scrollYProgress, [0, 1], variant === "dense" ? [12, -36] : [-8, 28]);
  const driftRotate = useTransform(scrollYProgress, [0, 1], variant === "dense" ? [-8, 18] : [6, -12]);
  const dots = Array.from({ length: variant === "dense" ? 24 : 14 }, (_, i) => ({
    id: i,
    left: `${4 + ((i * 23) % 90)}%`,
    top: `${6 + ((i * 37) % 84)}%`,
    delay: i * 0.08,
  }));
  const paths = [
    "M20 180 C120 70 230 260 340 150 S570 95 710 210",
    "M40 95 C170 200 300 35 450 115 S650 260 790 95",
    "M70 285 C210 230 330 360 490 280 S665 190 815 300",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: driftY, x: driftX, rotate: driftRotate }} className="absolute inset-[-12%]">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[22rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-red-500/10 blur-[46px] sm:h-[30rem] sm:w-[60rem]"
          animate={{ opacity: [0.18, 0.58, 0.18], scale: [0.88, 1.08, 0.88], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[4%] top-[12%] h-48 w-48 rounded-full bg-red-400/10 blur-[54px]"
          animate={{ x: [0, -45, 0], y: [0, 36, 0], opacity: [0.18, 0.52, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 860 420" preserveAspectRatio="none">
          {paths.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke={index % 2 ? "rgba(17,17,17,0.11)" : "rgba(220,38,38,0.28)"}
              strokeWidth="1.05"
              strokeDasharray="6 12"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: [0.1, 1, 0.1], opacity: [0.18, 0.9, 0.18] }}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.36 }}
            />
          ))}
        </svg>
        {dots.map((dot) => (
          <motion.span
            key={dot.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-red-500/55 shadow-[0_0_22px_rgba(220,38,38,0.38)]"
            style={{ left: dot.left, top: dot.top }}
            animate={{ opacity: [0.18, 0.95, 0.18], scale: [0.65, 1.7, 0.65], y: [0, dot.id % 2 ? 12 : -12, 0] }}
            transition={{ duration: 4.5 + (dot.id % 5) * 0.32, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function TopNav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 hidden border-b border-[#111]/8 bg-white/70 backdrop-blur-2xl md:block"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-8">
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-[#111]/55 transition hover:text-red-600">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
      className="relative h-full min-h-[520px] w-full overflow-visible"
    >
      <AmbientNetwork variant="dense" />
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[210px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-red-500/18"
        animate={{ rotate: 360, scale: [0.94, 1.05, 0.94] }}
        transition={{ rotate: { duration: 34, repeat: Infinity, ease: "linear" }, scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[145px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#111]/10"
        animate={{ rotate: -360, opacity: [0.22, 0.76, 0.22] }}
        transition={{ rotate: { duration: 45, repeat: Infinity, ease: "linear" }, opacity: { duration: 5.2, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[18px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/45 blur-[18px]"
        animate={{ scaleX: [0.72, 1.16, 0.72], opacity: [0.22, 0.72, 0.22], rotate: [0, 8, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-16 text-[#111] sm:px-8 sm:pb-12 sm:pt-28 lg:pt-32">
      <AmbientNetwork variant="dense" />
      <div className="pointer-events-none absolute inset-y-0 right-[-16%] z-0 hidden w-[68%] opacity-80 lg:block">
        <HeroVisual />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center sm:min-h-[calc(100svh-7rem)]">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 46, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-[3.35rem] font-black leading-[0.88] tracking-[-0.075em] text-[#111] sm:text-6xl sm:leading-[0.9] lg:mx-0 lg:text-7xl xl:text-8xl"
          >
            Unitag'la öğrenci olmak daha kolay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-[21rem] text-[1.05rem] leading-7 text-[#111]/62 sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-8 lg:mx-0"
          >
            Öğrenci indirimleri, ikinci el ilanlar, ev/oda/yurt seçenekleri ve kampüs fırsatları tek platformda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href={APP_STORE_URL} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#111] px-6 py-4 text-base font-black text-white shadow-[0_20px_60px_rgba(17,17,17,0.16)] transition hover:-translate-y-0.5 hover:bg-red-600">
              <Apple className="h-5 w-5" /> App Store'dan İndir
            </a>
            <a href={FORM_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-white/80 px-6 py-4 text-base font-black text-red-700 shadow-[0_20px_60px_rgba(220,38,38,0.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-50">
              Üniversite Temsilcisi Ol <ArrowUpRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee({ items }) {
  const content = [...items, ...items, ...items];
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden border-y border-[#111]/10 bg-[#111] py-4 text-white sm:py-5"
    >
      <motion.div
        animate={{ x: ["-33.333%", "0%"] }}
        transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-8 whitespace-nowrap text-3xl font-black uppercase tracking-[-0.06em] sm:text-6xl"
      >
        {content.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            {item}
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Features() {
  return (
    <section id="ozellikler" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <AmbientNetwork />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Kicker>Unitag’da neler var?</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
            <SplitText>Öğrencinin şehirde ihtiyacı olan her şey tek platformda.</SplitText>
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: index % 2 ? 56 : 34, x: index % 2 ? 12 : -12, scale: 0.96, rotate: index % 2 ? 1.2 : -1.2, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white/72 p-6 shadow-[0_24px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111] text-white shadow-[0_12px_40px_rgba(17,17,17,0.08)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="relative z-10 mt-8 text-2xl font-black tracking-tight text-[#111]">{feature.title}</h3>
                <p className="relative z-10 mt-4 leading-7 text-[#111]/58">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Representative() {
  return (
    <section id="temsilcilik" className="relative overflow-hidden px-5 py-16 text-[#111] sm:px-8 sm:py-20">
      <AmbientNetwork variant="dense" />
      <motion.div
        initial={{ opacity: 0, y: 90, scale: 0.92, filter: "blur(18px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.32 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-red-500/16 bg-gradient-to-br from-red-600 via-red-700 to-[#300507] p-8 text-white shadow-[0_35px_120px_rgba(220,38,38,0.24)] sm:p-12 lg:p-16"
      >
        <AmbientNetwork variant="dense" />
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl"
          >
            <Users className="h-4 w-4" /> Üniversite Temsilciliği
          </motion.div>
          <h2 className="mt-8 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            <SplitText>Kendi üniversitende Unitag temsilcisi ol.</SplitText>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/78"
          >
            Unitag’ı kampüsünde büyütmek, öğrenci topluluğuna katkı sağlamak ve girişimcilik ekosisteminin bir parçası olmak istiyorsan temsilcilik programına başvurabilirsin.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-red-700 transition hover:-translate-y-0.5 hover:bg-red-50"
          >
            Başvuru Formuna Git <ExternalLink className="h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <AmbientNetwork />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Kicker>Yol Haritamız</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
            <SplitText>Unitag, öğrenci hayatını adım adım daha kapsamlı hale getiriyor.</SplitText>
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {roadmap.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: index % 2 ? 48 : 28, x: index % 2 ? 16 : -16, scale: 0.97, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.52, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 rounded-[1.8rem] border border-[#111]/10 bg-white/74 p-5 text-[#111] shadow-[0_25px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:p-6 md:grid-cols-[90px_1fr_1.25fr] md:items-center"
              >
                <div className="text-3xl font-black text-red-600">0{index + 1}</div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-500/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#111] sm:text-2xl">{item.title}</h3>
                </div>
                <p className="leading-7 text-[#111]/60">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="ekip" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <AmbientNetwork />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Kicker>Unitag Ekibi</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
            <SplitText>Öğrenci deneyimini daha erişilebilir hale getiren ekip.</SplitText>
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {team.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 50, rotate: index === 1 ? -1.4 : 1.4, scale: 0.97, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ duration: 0.52, delay: index * 0.04 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white/74 p-7 shadow-[0_25px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-8 h-1.5 w-16 rounded-full bg-red-500" />
              <h3 className="text-2xl font-black text-[#111]">{person.name}</h3>
              <p className="mt-2 text-sm font-bold text-red-600">{person.role}</p>
              <p className="mt-5 leading-7 text-[#111]/58">{person.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section id="sss" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <AmbientNetwork />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Kicker>SSS</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
            <SplitText>Merak edilenler.</SplitText>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: index % 2 ? 34 : 20, x: index % 2 ? 12 : -12, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ delay: index * 0.025, duration: 0.48 }}
              className="rounded-[1.6rem] border border-[#111]/10 bg-white/74 shadow-[0_20px_70px_rgba(17,17,17,0.07)] backdrop-blur-xl"
            >
              <button onClick={() => setActive(active === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-black text-[#111]">{faq.q}</span>
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-[#111]/45 transition", active === index && "rotate-180 text-red-600")} />
              </button>
              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-[#111]/58">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegalModal({ activeDoc, onClose, onSwitch }) {
  const doc = activeDoc ? legalDocs[activeDoc] : null;
  if (!doc) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/55 p-4 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="mx-auto flex max-h-[92vh] max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 border-b border-[#111]/10 p-5 sm:p-7">
            <div>
              <div className="flex gap-2">
                <button onClick={() => onSwitch("kvkk")} className={cn("rounded-full px-4 py-2 text-sm font-bold", activeDoc === "kvkk" ? "bg-[#111] text-white" : "bg-[#111]/5 text-[#111]/60")}>KVKK</button>
                <button onClick={() => onSwitch("cookie")} className={cn("rounded-full px-4 py-2 text-sm font-bold", activeDoc === "cookie" ? "bg-[#111] text-white" : "bg-[#111]/5 text-[#111]/60")}>Çerez</button>
              </div>
              <h2 className="mt-5 text-2xl font-black text-[#111] sm:text-3xl">{doc.title}</h2>
              <p className="mt-1 text-sm text-[#111]/45">{doc.updated}</p>
            </div>
            <button onClick={onClose} className="rounded-2xl border border-[#111]/10 p-3 text-[#111]/70 transition hover:bg-[#111]/5 hover:text-[#111]"><X className="h-5 w-5" /></button>
          </div>
          <div className="overflow-y-auto p-5 sm:p-7">
            <div className="space-y-6">
              {doc.sections.map(([title, body]) => (
                <section key={title}>
                  <h3 className="text-lg font-black text-[#111]">{title}</h3>
                  <p className="mt-2 whitespace-pre-line leading-8 text-[#111]/60">{body}</p>
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CookieBanner({ openLegal }) {
  const [visible, setVisible] = useState(() => !localStorage.getItem("unitag_cookie_choice"));
  const [prefs, setPrefs] = useState(false);

  function acceptAll() {
    localStorage.setItem("unitag_cookie_choice", "all");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("unitag_cookie_choice", "required_only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-5xl rounded-[2rem] border border-[#111]/10 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:flex"><Cookie className="h-6 w-6" /></div>
            <div>
              <h3 className="font-black text-[#111]">Çerezleri kullanıyoruz</h3>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-[#111]/58">
                Deneyimi geliştirmek, performansı analiz etmek ve tercihleri hatırlamak için çerezlerden yararlanıyoruz.
                <button onClick={() => openLegal("cookie")} className="ml-1 font-bold text-red-600 underline underline-offset-4">Çerez Politikası</button>
              </p>
              {prefs && (
                <div className="mt-4 grid gap-2 text-sm text-[#111]/58 sm:grid-cols-2">
                  {["Zorunlu çerezler", "Performans ve analiz", "İşlevsel çerezler", "Reklam ve pazarlama"].map((x, i) => (
                    <label key={x} className="flex items-center gap-2 rounded-2xl border border-[#111]/10 bg-[#111]/[0.03] px-3 py-2">
                      <input type="checkbox" defaultChecked={i === 0} disabled={i === 0} className="accent-red-600" /> {x}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
            <button onClick={() => setPrefs((v) => !v)} className="rounded-2xl border border-[#111]/10 px-4 py-3 text-sm font-bold text-[#111]/70 transition hover:bg-[#111]/5">Tercihler</button>
            <button onClick={reject} className="rounded-2xl border border-[#111]/10 px-4 py-3 text-sm font-bold text-[#111]/70 transition hover:bg-[#111]/5">Reddet</button>
            <button onClick={acceptAll} className="rounded-2xl bg-[#111] px-5 py-3 text-sm font-black text-white transition hover:bg-red-600">Tümünü Kabul Et</button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Footer({ openLegal }) {
  return (
    <footer className="relative overflow-hidden border-t border-[#111]/10 px-5 py-12 text-[#111] sm:px-8">
      <AmbientNetwork />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="text-4xl font-black tracking-[-0.08em] text-[#111] sm:text-6xl">Unitag</div>
          <p className="mt-5 max-w-xl leading-7 text-[#111]/58">Unitag'la öğrenci olmak daha kolay.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h4 className="mb-3 font-black text-[#111]">Bağlantılar</h4>
            <div className="space-y-2 text-sm text-[#111]/58">
              <a href={FORM_URL} target="_blank" rel="noreferrer" className="block hover:text-red-600">Temsilcilik Formu</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="block hover:text-red-600">Instagram</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="block hover:text-red-600">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-black text-[#111]">Hukuki</h4>
            <div className="space-y-2 text-sm text-[#111]/58">
              <button onClick={() => openLegal("kvkk")} className="block text-left hover:text-red-600">KVKK Aydınlatma Metni</button>
              <button onClick={() => openLegal("cookie")} className="block text-left hover:text-red-600">Çerez Politikası</button>
              <span className="block text-[#111]/30">Gizlilik Politikası</span>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-black text-[#111]">İletişim</h4>
            <div className="space-y-2 text-sm text-[#111]/58">
              <div>destek@unitagapp.com.tr</div>
              <div>İzmit / Kocaeli</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-12 max-w-7xl border-t border-[#111]/10 pt-6 text-sm text-[#111]/35">© 2026 Unitag. Tüm hakları saklıdır.</div>
    </footer>
  );
}

export default function UnitagLandingPage() {
  const [legalOpen, setLegalOpen] = useState(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF7F2] text-[#111] selection:bg-red-600 selection:text-white">
      <ScrollProgress />
      <TopNav />
      <Hero />
      <Marquee items={["indirim", "ikinci el", "ev / oda", "kampüs", "kariyer", "sohbet", "ders notları"]} />
      <Features />
      <Marquee items={["Unitag'la öğrenci olmak daha kolay", "kampüste büyüyen platform", "öğrenci fırsatları"]} />
      <Representative />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer openLegal={setLegalOpen} />
      <LegalModal activeDoc={legalOpen} onClose={() => setLegalOpen(null)} onSwitch={setLegalOpen} />
      <CookieBanner openLegal={setLegalOpen} />
    </main>
  );
}