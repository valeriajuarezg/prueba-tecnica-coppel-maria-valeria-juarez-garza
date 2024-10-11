import React from "react";

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center md:flex md:items-center md:justify-between">
          {/* Parte izquierda: Título y botón */}
          <div className="md:w-1/2 text-left">
            <img
              src="/imagenes/logo-coppel-salud.svg"
              alt="Logo Coppel Salud"
              className="mb-4 mx-auto md:mx-0"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-10">
              Tu salud y la de tu familia es lo más importante
            </h1>
            <a
              href="https://www.farmaleal.com.mx/"
              className="text-white px-6 py-3 rounded-full transition-colors"
              style={{ backgroundColor: "#0172bc" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#005b99")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#0172bc")
              }
            >
              Ir a la Farmacia Digital
            </a>
          </div>

          {/* Parte derecha: Imagen */}
          <div className="md:w-1/2">
            <img
              src="/imagenes/coppel-salud-vector.svg"
              alt="Ilustración de celular con App de Coppel Salud, botiquín y pastillas"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ¿Qué es Coppel Salud? */}
      <section className="container mx-auto px-4 py-12">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <img
              src="/imagenes/coppel-salud-familia.png"
              alt="Familia feliz integrada por una mujer, un hombre y un niño felices mientras la mamá abraza al hijo"
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-600 px-4 mb-4">
              ¿Qué es Coppel Salud?
            </h2>
            <p className="text-gray-600 mb-6 px-4">
              Es la opción fácil y accesible para que tú y tu familia recibana
              los productos y servicios de salaud que necesitan, en cualquier
              moemento, desde cualquier lugar y a un precio justo que puedas
              pagar con tu Crédito Coppel.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Coppel Salud */}
      <section id="servicios" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-left mb-3">
          Descubre nuestros servicios
        </h2>
        <p className="text-gray-600 mb-6">
          Coppel Salud es un programa integral diseñado para tu bienestar.
          Ponemos a tu alcance medicamentos y aparatos médicos de dermatología,
          nutrición y mucho más, para ayudarte a cuidar lo más importante: tu
          salud y la de tu familia.
        </p>

        {/* Servicios Coppel Salud */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center bg-[#fafbfc] p-6 rounded-lg shadow-md border border-gray-200">
            <img
              src="/imagenes/medicina.svg"
              alt="Ilustración de bote de tratamiento médico para Farmacia Digital"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-600">
                Farmacia Digital
              </h3>
              <p className="text-gray-700 mb-2">
                En la Farmacia Coppel Salud encontrarás una gran variedad de
                medicamentos genéricos y de patente que necesitas, ¡con envío
                hasta tu domicilio!
              </p>
              <a
                href="https://coppelsalud.farmaleal.com.mx/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Comprar
              </a>
            </div>
          </div>

          <div className="flex items-center bg-[#fafbfc] p-6 rounded-lg shadow-md border border-gray-200">
            <img
              src="/imagenes/mask.svg" // Imagen de salud y bienestar
              alt="Ilustración de cubrebocas para Salud y Bienestar"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-600">
                Salud y Bienestar
              </h3>
              <p className="text-gray-700 mb-2">
                Desde sueros hasta rodilleras y sillas de ruedas, ofrecemos
                aparatos médicos especializados y demás productos para atender
                todo tipo de padecimientos.
              </p>
              <a
                href="https://coppelsalud.farmaleal.com.mx/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-blue-50 mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-600 text-center mb-10">
          Beneficios de Coppel Salud
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <img
              src="/imagenes/Spot_AforeCoppel_Finanzas_EntregandoDocumento.svg"
              alt="Ilustración de recetas médicas completas"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Recetas Médicas Completo
            </h3>
            <p className="text-gray-600">
              Surtimos tus receteas médicas, ya sean de Coppel Salud o de otras
              farmacias
            </p>
          </div>
          <div className="p-6">
            <img
              src="/imagenes/Envío gratis 1.2.svg"
              alt="Ilustración de tratamientos médicos con envío a domicilio "
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Envío gratis
            </h3>
            <p className="text-gray-600">
              Recibe tu tratamiento en donde estés, y ahorra tiempo evitando
              hacer filas
            </p>
          </div>
          <div className="p-6">
            <img
              src="/imagenes/dinero.svg"
              alt="Ilustración de tratamientos médicos con precios accesibles"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Precios accesibles
            </h3>
            <p className="text-gray-600">
              Adquiere tu tratamiento genérico o de patente a precios justos y
              paga a plazos con tu Crédito Coppel
            </p>
          </div>
        </div>
      </section>

      {/* Adquiere tu tratamiento con Crédito Coppel */}
      <section className="container mx-auto px-4 py-12">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-600 mb-4">
              ¡Adquiere tu tratamiento con Crédito Coppel!
            </h2>
            <p className="text-gray-600 mb-6">
              Usa Coppel Pay con tu Crédito Coppel para surtir tus recetas
              médicas y paga hasta en 12 meses
            </p>

            {/* Botón Coppel Pay */}
            <div className="text-left mt-6">
              <a
                href="https://www.coppel.com/coppel-pay"
                className="text-white px-6 py-3 rounded-full transition-colors inline-block"
                style={{ backgroundColor: "#0172bc" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#005b99")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0172bc")
                }
              >
                Ver más sobre Coppel Pay
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/imagenes/coppel-pay-coppel-salud-credito.png"
              alt="Fotografía de familia de mujer, hombre e hija abrazándose mientras la mujer carga una caja de Coppel Salud"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Farmacia Digital */}
      <section id="farmaciaDigital" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-600 text-center mb-3">
          Farmacia Digital
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Tenemos para ti un amplio catálogo en línea con productos médicos de
          las mejores marcas, así como medicamentos genéricos, y de patente, a
          precio accesible con tu Crédito Coppel. ¡Visita Coppel Salud y
          encuentra el tratamiento que necesitas para tu bienestar!
        </p>

        {/* Operado por - En una fila */}
        <div className="flex justify-center items-center mb-6">
          <p className="text-gray-500 mr-4">Operado por</p>{" "}
          {/* Ajusta el margen derecho del texto */}
          <img
            src="/imagenes/farmacia-leal.png"
            alt="Logotipo de Farma Leal"
          />{" "}
          {/* Ajusta la altura del logo */}
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Item 1 */}
          <a
            href="https://coppelsalud.farmaleal.com.mx/"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Actions.mas.plus.circle.signo.svg"
              alt="Ilustración de una cruz médica para categoría de Alta especialidad"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Alta especialidad</p>
          </a>

          {/* Item 3 */}
          <a
            href="https://www.farmaleal.com.mx/collections/antibioticos"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Actions.jarofheart.jarro.corazon.svg"
              alt="Ilustración de frasco con un corazón para la sección de Medicamentos"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Medicamentos</p>
          </a>

          {/* Item 8 */}
          <a
            href="https://www.farmaleal.com.mx/collections/desodorantes"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Retail.belleza.makeup.maquillaje.retail.make-up-lipstick-1-8.svg"
              alt="Ilustración de labial abierto para sección de Higiene y belleza"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Higiene y belleza</p>
          </a>

          {/* Item 9 */}
          <a
            href="https://coppelsalud.farmaleal.com.mx/collections/salud-deportiva"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Retail.deportes.sports.fitness-jumping-rope.cuerda.svg"
              alt="Ilustración de cuerda para saltar para sección de Salud deportiva"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Salud deportiva</p>
          </a>

          {/* Item 2 */}
          <a
            href="https://www.farmaleal.com.mx/collections/formulas-lacteas-vrim"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/person.profesion.baby.15.png"
              alt="Ilustración de cara de bebé para categoría de Bebés"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Bebés</p>
          </a>

          {/* Item 4 */}
          <a
            href="https://www.farmaleal.com.mx/collections/vida-saludable"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/vitamin.png"
              alt="Ilustración de píldora para sección de Vitaminas y suplementos"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">
              Vitaminas y suplementos
            </p>
          </a>

          {/* Item 7 */}
          <a
            href="https://www.farmaleal.com.mx/collections/material-de-curacion"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Retail.ropa.retail.products-purse-17.png"
              alt="Ilustración de un botiquín cerrado para sección de Equipo y botiquín"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Equipo y botiquín</p>
          </a>

          {/* Item 11 */}
          <a
            href="https://www.farmaleal.com.mx/collections/exfoliantes"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Retail.belleza.makeup.maquillaje.retail.make-up-mirror-1-28.svg"
              alt="Ilustración de espejo de mano para sección de Dermatológicos"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Dermatológicos</p>
          </a>

          {/* Item 5 */}
          <a
            href="https://coppelsalud.farmaleal.com.mx/collections/adulto-mayor"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/adulto-mayor.svg"
              alt="Ilustración de pañal para categoría de Adulto mayor"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Adulto mayor</p>
          </a>

          {/* Item 6 */}
          <a
            href="https://www.farmaleal.com.mx/collections/disfuncion-erectil"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Retail.ropa.underwear-bra-1-68.svg"
              alt="Ilustración de ropa interior femenina para sección de Salud sexual"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Salud sexual</p>
          </a>

          {/* Item 10 */}
          <a
            href="https://www.farmaleal.com.mx/collections/complementos-alimenticios"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Retail.hogar.retail.fruit-scale-55.hogar.cocina.kitchen.svg"
              alt="Ilustración de báscula para sección de Nutrición"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Nutrición</p>
          </a>

          {/* Item 12 */}
          <a
            href="https://www.farmaleal.com.mx/collections/complementos-alimenticios"
            className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-gray-50"
          >
            <img
              src="/imagenes/Retail.food.comida.brocoli.verdura.verde.svg"
              alt="Ilustración de brócoli para sección de Naturista"
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">Naturista</p>
          </a>
        </div>

        {/* Botón de Ir a Farmacia Digital */}
        <div className="text-center mt-6">
          <a
            href="https://coppelsalud.farmaleal.com.mx/"
            className="text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
            style={{ backgroundColor: "#0172bc" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#005b99")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#0172bc")
            }
          >
            Ir a Farmacia Digital
          </a>
        </div>
      </section>

      {/* Salud y Bienestar */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="container mx-auto md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Salud y Bienestar
            </h2>
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              ¡Los productos de salud que necesitas!
            </h3>
            <p className="text-gray-600 mb-6">
              En Coppel.com, en la selección de Salud y Bienestar, puedes
              encontrar miles de aparatos médicos especializados y demás
              productos para atender padecimientos de todo tipo. Compra fácil y
              rápido las opciones que se adapten a tus necesidades médicas y
              recíbelas a domicilio o recoge en la Tienda Coppel que prefieras.
            </p>
            <a
              href="https://www.coppel.com/salud-y-bienestar"
              className="text-blue-600 font-semibold hover:underline"
            >
              Descubre nuestros productos
            </a>
          </div>
          <div className="md:w-1/2 text-center">
            <img
              src="/imagenes/Productos.svg"
              alt="Productos de Salud y Bienestar"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Lo que dicen nuestros clientes */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-10">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Testimonio 1 */}
          <div>
            <img
              src="/imagenes/avatar.png"
              alt="Fotografía de mujer sonriente para sección de lo que dicen nuestros clientes"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "Lo que más me ha sorprendido es la rapidez de entrega; en
              cuestión de horas, mis medicamentos llegaron directamente a mi
              puerta, lo cual es de gran ayuda para alguien como yo, con una
              agenda apretada."
            </p>
            <h3 className="font-semibold text-gray-700">Cinthia</h3>
          </div>

          {/* Testimonio 2 */}
          <div>
            <img
              src="/imagenes/avatar-1.png"
              alt="Fotografía de mujer feliz para sección de lo que dicen nuestros clientes"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "Descubrir Coppel Salud ha sido un verdadero salvavidas para mí.
              No solo encuentro todos mis medicamentos y productos de cuidado
              personal en un solo lugar, sino que también puedo hacerlo desde la
              comodidad de mi hogar."
            </p>
            <h3 className="font-semibold text-gray-700">Alejandra</h3>
          </div>

          {/* Testimonio 3 */}
          <div>
            <img
              src="/imagenes/avatar-2.png"
              alt="Fotografía de hombre contento para sección de lo que dicen nuestros clientes"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "La facilidad de la búsqueda, la claridad en la información de los
              productos y la posibilidad de comparar precios me han ayudado a
              tomar decisiones informadas y ahorrar dinero."
            </p>
            <h3 className="font-semibold text-gray-700">Sebastián</h3>
          </div>
        </div>
      </section>

      {/* Módulos de salud con consultas médicas virtuales */}
      <section className="mx-auto px-4 py-12 bg-blue-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0">
            {/* Parte izquierda: Imagen del doctor */}
            <div className="md:w-1/2">
              <img
                src="/imagenes/image.png"
                alt="Fotografía de paciente y doctor en teleconsulta"
                className="rounded-lg w-full md:w-3/4 mb-4 mx-auto"
              />
            </div>

            {/* Parte derecha: Texto de descripción */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Conéctate con la salud del futuro: Tu bienestar, a un clic de
                distancia
              </h2>
              <p className="text-gray-600 mb-4">
                Accede a consultas médicas virtuales en nuestros módulos de
                salud, con especialistas altamente capacitados ¡sin salir de
                casa ni hacer filas! Disponible dentro de las Tiendas Coppel.
              </p>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Operado por</p>
                <img
                  src="/imagenes/ever-health.png"
                  alt="Logo de Ever Health"
                  className="w-24"
                />
              </div>
            </div>
          </div>

          {/* Segunda fila: Formulario y Mapa */}
          <div className="flex flex-col md:flex-row items-start justify-between mt-12 space-y-6 md:space-y-0">
            {/* Formulario */}
            <div className="md:w-1/2 pr-4">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Encuentra el módulo de Coppel Salud más cercano
              </h3>
              <p className="text-gray-600 mb-6">
                Elige el estado y la ciudad para acceder a las consultas
                virtuales en los módulos de salud de nuestras tiendas
              </p>

              <form className="mb-6">
                <div className="mb-4">
                  <label htmlFor="estado" className="block text-gray-700">
                    Estado
                  </label>
                  <select id="estado" className="w-full p-2 border rounded">
                    <option value="">Seleccionar estado</option>
                    <option value="1">Estado 1</option>
                    <option value="2">Estado 2</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="ciudad" className="block text-gray-700">
                    Ciudad
                  </label>
                  <select id="ciudad" className="w-full p-2 border rounded">
                    <option value="">Seleccionar ciudad</option>
                    <option value="1">Ciudad 1</option>
                    <option value="2">Ciudad 2</option>
                  </select>
                </div>
                <button
                  className="text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-full"
                  style={{ backgroundColor: "#0172bc" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005b99")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0172bc")
                  }
                >
                  Buscar módulo de salud
                </button>
              </form>
            </div>

            {/* Mapa de Google Maps */}
            <div className="md:w-1/2">
              <div className="w-full md:w-4/5 mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d-99.1620359!3d19.4270205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c0d4bb96d4375b5!2sCoppel!5e0!3m2!1ses!2smx!4v1616360277070!5m2!1ses!2smx"
                  width="100%"
                  height="250"
                  allowFullScreen
                  loading="lazy"
                  className="border rounded-lg"
                  title="Mapa para ver ubicación de módulos de salud"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Lado izquierdo: Título y descripción */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              ¿Necesitas más información?
            </h2>
            <p className="text-gray-600 mb-4">
              Revisa las preguntas frecuentes y descubre más detalles sobre cómo
              funciona Coppel Salud, o llámanos al{" "}
              <a
                href="tel:+55531451948"
                className="text-blue-600 font-semibold"
              >
                (55) 3145 1948
              </a>{" "}
              y con gusto te atenderemos.
            </p>
          </div>

          {/* Lado derecho: Preguntas frecuentes */}
          <div className="md:w-1/2">
            <div className="space-y-4">
              <details className="border rounded-lg p-4">
                <summary className="font-semibold text-gray-600">
                  ¿Qué formas de pago aceptan en Coppel Salud?
                </summary>
                <p className="mt-2 text-gray-600">
                  Aceptamos diversas formas de pago, incluyendo tarjetas de
                  crédito, débito y el crédito Coppel.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-semibold text-gray-600">
                  ¿Cómo nació Coppel Salud?
                </summary>
                <p className="mt-2 text-gray-600">
                  Coppel Salud nació como una iniciativa para proporcionar
                  acceso a productos y servicios médicos de manera fácil y
                  asequible.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-semibold text-gray-600">
                  ¿Qué tipos de entrega hay para los productos de Salud y
                  Bienestar en Coppel.com?
                </summary>
                <p className="mt-2 text-gray-600">
                  Ofrecemos envíos a domicilio y la opción de recoger en tienda
                  los productos de salud y bienestar.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-semibold text-gray-600">
                  ¿Hay garantía en los tratamientos que compre en Farmacia
                  Digital o en Salud y Bienestar?
                </summary>
                <p className="mt-2 text-gray-600">
                  Sí, ofrecemos garantía en todos los productos y tratamientos
                  adquiridos en Farmacia Digital y Salud y Bienestar.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-semibold text-gray-600">
                  ¿Dónde encuentro Módulos de Salud para recibir Asistencia
                  Médica Digital?
                </summary>
                <p className="mt-2 text-gray-600">
                  Puedes encontrar nuestros módulos de salud en diversas tiendas
                  Coppel a lo largo del país.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
