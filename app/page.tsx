export default function AppBRLanding() {
  const features = [
    "Control de invitados con códigos seguros",
    "Reserva de áreas en segundos",
    "Notificaciones automáticas a residentes",
    "Historial y trazabilidad completa",
  ];

  const differentiators = [
    "App personalizada con tu marca",
    "Control de morosidad integrado",
    "Enlaces QR livianos y rápidos",
    "Códigos QR válidos por día programado",
  ];

  const benefits = [
    "Gestión integral y automatizada",
    "Optimización del uso de amenidades",
    "Fortalecimiento de la seguridad",
    "Interfaz intuitiva y de fácil adopción",
  ];

  const modules = [
    {
      title: "Reservas Inteligentes",
      text: "Gestiona gimnasios, canchas, áreas BBQ y espacios comunes con disponibilidad en tiempo real.",
    },
    {
      title: "Invitados y Accesos",
      text: "Comparte invitaciones por WhatsApp y controla ingresos con códigos QR seguros.",
    },
    {
      title: "Dashboard Administrativo",
      text: "Visualiza reservas, visitas, pagos pendientes y estadísticas desde un solo panel.",
    },
    {
      title: "Panel de Garita",
      text: "Escanea QRs o consulta visitantes por nombre, cédula o villa.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-black font-sans overflow-hidden">
      <section className="relative px-6 lg:px-20 pt-10 pb-20">
        <div className="absolute top-0 right-0 w-[40%] h-40 bg-[#2FA39A] rounded-bl-[90px] opacity-90"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-[#169C92] text-white font-black text-4xl rounded-2xl w-20 h-20 flex items-center justify-center shadow-xl">
                BR
              </div>
              <div>
                <p className="text-4xl font-black tracking-tight">APP BR</p>
                <p className="text-xl text-gray-700">New Channel</p>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl leading-[0.95] font-black text-[#2FA39A] mb-8 uppercase">
              Control total de tu comunidad desde una sola app
            </h1>

            <div className="space-y-5 mb-10 text-2xl">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                  ✕
                </span>
                <p>¿Conflictos entre residentes?</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                  ✕
                </span>
                <p>¿Ingreso de invitados sin control?</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                  ✕
                </span>
                <p>¿Desorden en reservas?</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#3EB0A8] to-[#56C2D4] p-8 rounded-[35px] shadow-2xl max-w-2xl">
              <p className="text-2xl font-bold leading-snug text-center">
                APP BR centraliza reservas, accesos e información en una sola
                plataforma, facilitando la gestión para administradores y
                residentes.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[320px] h-[650px] bg-black rounded-[55px] p-3 shadow-2xl border-[10px] border-black">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10"></div>

              <div className="w-full h-full bg-white rounded-[42px] flex items-center justify-center">
                <div className="bg-[#169C92] w-52 h-52 rounded-[35px] flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-8xl tracking-tight">
                    BR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 text-2xl font-medium"
                >
                  <div className="w-12 h-12 rounded-full bg-[#6FA25A] flex items-center justify-center text-white text-2xl font-black shadow-md">
                    ✓
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2FA39A]/10 flex items-center justify-center text-[#2FA39A] text-2xl mb-5">
                    ✦
                  </div>
                  <p className="text-xl font-semibold leading-snug">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-black text-[#2FA39A] uppercase mb-10">
              Diferenciación
            </h2>

            <div className="space-y-8">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-6 bg-white rounded-3xl p-7 shadow-lg"
                >
                  <p className="text-2xl font-medium leading-tight max-w-md">
                    {item}
                  </p>

                  <div className="w-16 h-16 rounded-full border-4 border-[#2FA39A] flex items-center justify-center text-[#2FA39A] text-3xl font-black">
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#169C92] px-6 lg:px-20 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_35%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black uppercase mb-8">
            APP BR lo gestiona todo
          </h2>

          <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-white/90 mb-16">
            Desde reservas y accesos hasta reportes, anuncios y control de
            visitantes. Todo centralizado para modernizar tu urbanización,
            edificio o comunidad.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-[32px] p-8 text-left shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2FA39A] text-white flex items-center justify-center text-3xl mb-6 shadow-md">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black mb-4 leading-tight">
                  {module.title}
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {module.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-[#2FA39A]/10 text-[#2FA39A] font-bold text-lg mb-6 uppercase tracking-wide">
              Plataforma moderna
            </span>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
              Ahorra tiempo y mejora la convivencia de tu comunidad
            </h2>

            <p className="text-2xl text-gray-700 leading-relaxed mb-10">
              APP BR automatiza procesos, reduce conflictos y mejora la
              experiencia tanto para administradores como residentes.
            </p>

            <div className="flex flex-wrap gap-4">
                        <a
              href="https://wa.me/593999516554?text=Hola%20Soledad,%20quisiera%20una%20presentación%20de%20APP%20BR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#169C92] hover:scale-105 transition-all text-white text-xl font-bold px-8 py-5 rounded-2xl shadow-xl inline-block"
            >
              Solicitar Presentación
            </a>

              <button className="border-2 border-[#169C92] text-[#169C92] hover:bg-[#169C92] hover:text-white transition-all text-xl font-bold px-8 py-5 rounded-2xl">
                Ver Funcionalidades
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100">
            <h3 className="text-4xl font-black mb-10">Contacto</h3>

            <div className="space-y-10 text-xl">
              <div>
                <p className="font-black text-2xl mb-2">Francisco Andrade</p>
                <p className="text-gray-700">fandrade@newchannel.com.ec</p>
                <p className="text-gray-700">ventasgye@newchannel.com.ec</p>
              </div>

              <div>
                <p className="font-black text-2xl mb-2">
                  Ing. Soledad Aguirre Caputi
                </p>
                <p className="text-gray-700">+593 99 951 6554</p>
                <p className="text-gray-700">saguirre@newchannel.com.ec</p>
              </div>
            </div>

            <div className="mt-12 bg-[#F7F7F5] border-2 border-dashed border-[#2FA39A] rounded-3xl p-8 text-center">
            <img
               src="/qr.png"
               alt="QR APP BR"
               className="w-44 h-44 mx-auto rounded-3xl shadow-inner mb-6 border border-gray-200 object-cover"
            />

              <p className="text-2xl font-bold leading-snug">
                Escanea el QR y solicita una presentación de APP BR
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white px-6 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#169C92] text-white font-black text-3xl rounded-xl w-14 h-14 flex items-center justify-center">
              BR
            </div>

            <div>
              <p className="font-black text-2xl">APP BR</p>
              <p className="text-gray-400">New Channel</p>
            </div>
          </div>

          <p className="text-gray-400 text-lg text-center lg:text-right">
            Plataforma inteligente para reservas, accesos y administración
            comunitaria.
          </p>
        </div>
      </footer>
    </div>
  );
}

