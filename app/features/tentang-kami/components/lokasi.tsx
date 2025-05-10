export function Lokasi() {
  return (
    <section id="lokasi" className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="section-subtitle">Kantor Kami</div>
      <h2 className="section-title mb-12">Kunjungi Kantor Kami</h2>

      <div className="w-full h-[450px] rounded-lg overflow-hidden relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.0162607785574!2d106.51785214701724!3d-6.255693908724406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42076e80a0ee27%3A0x8fde97f70757989f!2sMedina%20Studio%20Makeup%2FTata%20Rias%20Pengantin%20dan%20Busana!5e0!3m2!1sen!2sid!4v1739368524085!5m2!1sen!2sid"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Office Location Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </section>
  );
}
