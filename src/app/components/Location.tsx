export default function Location() {
    return (
      <section className="flex justify-center items-center p-6">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Nossa Localização</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg shadow-black">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.9704080073543!2d-46.69972922570699!3d-23.712750767169492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f4497f73a31%3A0x68c9f662e20dc8f7!2sEspa%C3%A7o%20Est%C3%A9tica%20Rosiane%20Gomes!5e0!3m2!1spt-BR!2sbr!4v1739925047026!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  