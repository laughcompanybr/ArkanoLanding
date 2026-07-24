import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/DmLHmZhtgpjL13audR5cuo?s=cl&p=i&mlu=0&amv=0";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arkano Club — Exclusividade começa com um convite" },
      {
        name: "description",
        content:
          "Entre para a comunidade oficial da Arkano Club e tenha acesso a lançamentos, novidades e atendimento personalizado diretamente pelo WhatsApp.",
      },
      { property: "og:title", content: "Arkano Club — Exclusividade começa com um convite" },
      {
        property: "og:description",
        content:
          "Comunidade oficial da Arkano Club. Lançamentos, novidades e atendimento personalizado pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Arkano Club — Exclusividade começa com um convite" },
      {
        name: "twitter:description",
        content:
          "Comunidade oficial da Arkano Club. Lançamentos, novidades e atendimento personalizado pelo WhatsApp.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border border-gold px-10 py-[18px] text-[13px] uppercase tracking-[0.22em] text-[#111111] transition-colors duration-300 hover:bg-gold hover:text-white"
      style={{ borderRadius: 2 }}
    >
      {children}
    </a>
  );
}


function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased">
      <Header />
      <Hero />
      <Divider />
      <Benefits />
      <Statement />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8 md:px-10">
      <span className="text-[13px] uppercase tracking-[0.4em] text-[#111111]">
        Arkano <span className="text-gold">Club</span>
      </span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden text-[11px] uppercase tracking-[0.28em] text-gray-mid transition-colors duration-300 hover:text-gold md:inline-block"
      >
        Entrar
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-[1200px] flex-col items-center justify-center px-6 py-24 text-center md:px-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="flex flex-col items-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-10 text-[11px] uppercase tracking-[0.42em] text-gold"
        >
          Comunidade Oficial
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-[16ch] text-[44px] font-light leading-[1.05] tracking-[-0.02em] text-[#111111] md:text-[64px] lg:text-[76px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Exclusividade começa com um <span className="italic text-gold">convite</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-[52ch] text-[17px] leading-[1.6] text-gray-mid md:text-[19px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Entre para a comunidade oficial da Arkano Club e tenha acesso a lançamentos,
          novidades e atendimento personalizado diretamente pelo WhatsApp.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12">
          <CTAButton>Entrar na Comunidade VIP</CTAButton>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-[12px] tracking-[0.08em] text-gray-mid"
        >
          Entrada gratuita — Sem spam — Saída quando desejar
        </motion.p>
      </motion.div>
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-10">
      <div className="mx-auto h-px w-full bg-[#EAEAEA]" />
    </div>
  );
}

function Benefits() {
  const items = [
    { n: "I", title: "Antecipação", text: "Receba novidades antes de todos." },
    { n: "II", title: "Exclusividade", text: "Ofertas exclusivas para membros." },
    { n: "III", title: "Proximidade", text: "Atendimento direto pelo WhatsApp." },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-32 md:px-10 md:py-40">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="grid grid-cols-1 md:grid-cols-3"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.n}
            variants={fadeUp}
            className={`px-2 py-10 md:px-10 md:py-4 ${
              i !== 0 ? "border-t border-[#EAEAEA] md:border-t-0 md:border-l" : ""
            }`}
          >
            <p className="mb-6 font-serif text-[15px] italic text-gold">{item.n}</p>
            <h3 className="mb-3 font-serif text-[24px] font-light tracking-[-0.01em] text-[#111111]">
              {item.title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-gray-mid">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Statement() {
  return (
    <section className="bg-arkano-black py-32 md:py-48">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto flex max-w-[900px] flex-col items-center px-6 text-center md:px-10"
      >
        <motion.div variants={fadeUp} className="mb-10 h-px w-10 bg-gold" />
        <motion.p
          variants={fadeUp}
          className="font-serif text-[28px] font-light italic leading-[1.25] text-white md:text-[42px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Elegância não está apenas no que você usa. Está também nas escolhas que faz.
        </motion.p>
      </motion.div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-32 text-center md:px-10 md:py-48">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="flex flex-col items-center"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-[18ch] text-[40px] font-light leading-[1.1] tracking-[-0.02em] text-[#111111] md:text-[56px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Faça parte da <span className="italic text-gold">Arkano Club</span>.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-gray-mid md:text-[18px]"
        >
          Um convite não se repete duas vezes.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-12">
          <CTAButton>Entrar na Comunidade VIP</CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gray-mid">
        Arkano Club © 2026
      </p>
    </footer>
  );
}
