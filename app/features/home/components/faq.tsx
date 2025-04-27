import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { RippleButton } from '~/components/ripple-button';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FaqItem = ({
  question,
  answer,
  isOpen,
  toggleOpen,
  index,
}: FaqItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <h3 className="text-base font-medium text-gray-900">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600 text-sm">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Berapa lama durasi kursus di Medina Studio?',
      answer:
        'Durasi kursus bervariasi tergantung program yang dipilih. Kelas reguler berlangsung selama 3-6 bulan dengan pertemuan 3 kali seminggu, sementara kelas pendek/privat berlangsung 1-4 minggu dengan jadwal yang lebih fleksibel.',
    },
    {
      question:
        'Apakah saya perlu memiliki pengalaman sebelumnya di bidang tata rias?',
      answer:
        'Tidak, kami menerima siswa dari semua tingkat pengalaman. Program kami dirancang untuk mengakomodasi pemula hingga yang sudah memiliki dasar tata rias dan ingin mengembangkan keterampilan lebih lanjut.',
    },
    {
      question:
        'Apakah ada sertifikat yang diberikan setelah menyelesaikan kursus?',
      answer:
        'Ya, setiap siswa yang berhasil menyelesaikan program kursus akan mendapatkan sertifikat resmi dari Medina Studio yang diakui di industri kecantikan dan fashion.',
    },
    {
      question: 'Bagaimana cara mendaftar kursus di Medina Studio?',
      answer:
        'Anda dapat mendaftar melalui website kami dengan mengisi formulir pendaftaran online, atau datang langsung ke studio kami untuk konsultasi dan pendaftaran. Pembayaran dapat dilakukan secara tunai, transfer bank, atau cicilan.',
    },
    {
      question: 'Apakah ada diskon atau beasiswa yang tersedia?',
      answer:
        'Kami menawarkan diskon early bird untuk pendaftaran awal, diskon untuk pendaftaran grup, dan program beasiswa terbatas untuk kandidat berbakat yang memenuhi kriteria tertentu. Silakan hubungi tim kami untuk informasi lebih lanjut.',
    },
    {
      question: 'Apakah peralatan dan bahan disediakan oleh Medina Studio?',
      answer:
        'Ya, semua peralatan dan bahan dasar untuk praktik disediakan selama kursus. Untuk kelas lanjutan, siswa mungkin perlu membeli beberapa alat profesional sendiri yang akan direkomendasikan oleh instruktur.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-main-light/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang program kursus dan
              layanan kami
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
                index={index}
              />
            ))}
          </div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-gray-600 mb-4">Masih punya pertanyaan lain?</p>
            <a href="/hubungi-kami">
              <RippleButton>Hubungi Kami</RippleButton>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
