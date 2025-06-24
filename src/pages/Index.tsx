import { 
  FileText, 
  Users, 
  BookOpen, 
  Trophy, 
  Heart, 
  DollarSign,
  Calendar,
  Phone
} from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import SchoolBanner from "@/components/SchoolBanner";
import InfoSection from "@/components/InfoSection";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Photo Gallery */}
      <div className="max-w-6xl mx-auto">
        <PhotoGallery />
      </div>

      {/* School Banner */}
      <SchoolBanner />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        
        {/* Descripción General */}
        <InfoSection title="Descripción General" icon={FileText}>
          <div className="mb-4">
            <p className="font-semibold mb-1">Misión</p>
            <p>
              Formar <strong>mujeres cristianas líderes</strong>, capaces de <strong>influir positivamente</strong> en la sociedad y contribuir a la <strong>solución de los desafíos sociales</strong>, actuando con respeto a la libertad y llevando el testimonio de Cristo en sus acciones.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">¿Cómo se logra?</p>
            <p>
              A través de una educación integral que abarca lo <strong>académico, lo personal y lo espiritual</strong>, inspirada en una visión cristiana de la mujer. La formación es <strong>personalizada</strong> y se <strong>adapta</strong> a los ritmos y necesidades de cada alumna, reconociendo siempre a los <strong>padres como los primeros educadores</strong>.
            </p>
          </div>
        </InfoSection>

        {/* Proceso de Admisión */}
        <InfoSection title="Proceso de Admisión" icon={Users}>
          <div className="mb-4">
            <p className="font-semibold mb-1">Fechas de postulación</p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Playgroup a 6to Básico: Del 1 de abril al 27 de mayo (o hasta agotar vacantes)</li>
              <li>Desde 7mo Básico: Desde agosto</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-1">Detalles del proceso</p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Entrevista: Si la postulante aprueba el examen, se agenda una entrevista con la directora</li>
              <li>Padres: Se espera participación activa de ambos padres durante el proceso</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-1">Costo</p>
            <p>Tarifa de postulación: 1 UF por familia (se paga al ser contactados por el colegio)</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-1">Resultados</p>
            <p>Los resultados se comunican por teléfono o correo dentro de las 3 semanas siguientes a la entrega de la documentación.</p>
          </div>

          <div>
            <p className="font-semibold mb-1">Links de interés</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Temarios de Exámenes de Admisión
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Fechas y vacantes 2026
                </a>
              </li>
            </ul>
          </div>
        </InfoSection>

        {/* Principios Educativos */}
        <InfoSection title="Principios Educativos" icon={BookOpen}>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
              <span>
                <strong>Desarrollo de la inteligencia:</strong> Enseñando a pensar y aprender con la alumna como protagonista de su formación.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
              <span>
                <strong>Educación de la voluntad:</strong> Enseñar a buscar siempre la verdad y el bien.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
              <span>
                <strong>Educación espiritual:</strong> Basada en las enseñanzas del Magisterio de la Iglesia Católica.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
              <span>
                <strong>Educación en el amor humano:</strong> Promoviendo la entrega generosa a los demás.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
              <span>
                <strong>Preparación para el trabajo:</strong> Valorando el estudio bien hecho y el espíritu de servicio.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
              <span>
                <strong>Enseñar a vivir y a convivir:</strong> Cultivando valores, virtudes y habilidades interpersonales.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
              <span>
                <strong>Desarrollo físico y deportivo:</strong> Fomentando la sana competencia, la fortaleza y la constancia.
              </span>
            </li>
          </ul>
        </InfoSection>

        {/* Actividades Extracurriculares */}
        <InfoSection title="Actividades Extraprogramáticas Referenciales" icon={Trophy}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Deportes</h4>
              <ul className="text-sm space-y-1">
                <li>• Hockey</li>
                <li>• Atletismo</li>
                <li>• Gimnasia artística</li>
                <li>• Vóleibol</li>
                <li>• Ajedrez</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Arte y cultura</h4>
              <ul className="text-sm space-y-1">
                <li>• Violín</li>
                <li>• Fotografía</li>
                <li>• Costura y textil</li>
                <li>• Bandas</li>
                <li>• Teatro</li>
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Vida Estudiantil */}
        <InfoSection title="Vida Estudiantil" icon={Heart}>
          <p className="mb-4">
            En el Colegio San Patricio, creemos que la educación va más allá del aula. 
            Nuestros estudiantes participan en una amplia variedad de actividades que 
            fomentan el desarrollo personal, social y emocional.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Servicios de Apoyo:</h4>
              <ul className="text-sm space-y-1">
                <li>• Orientación psicológica</li>
                <li>• Apoyo académico personalizado</li>
                <li>• Programa de becas</li>
                <li>• Servicio médico</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Instalaciones:</h4>
              <ul className="text-sm space-y-1">
                <li>• Laboratorios de ciencias</li>
                <li>• Biblioteca digital</li>
                <li>• Canchas deportivas</li>
                <li>• Auditorio</li>
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Información de Costos */}
        <InfoSection title="Información de Costos" icon={DollarSign}>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-blue-800">
              Los costos varían según el nivel educativo. Para información detallada sobre 
              matrículas y mensualidades, contáctanos directamente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Incluye:</h4>
              <ul className="text-sm space-y-1">
                <li>• Seguro estudiantil</li>
                <li>• Actividades extracurriculares</li>
                <li>• Plataforma digital</li>
                <li>• Eventos especiales</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Opciones de Pago:</h4>
              <ul className="text-sm space-y-1">
                <li>• Pago anual con descuento</li>
                <li>• Pagos mensuales</li>
                <li>• Plan de becas disponible</li>
                <li>• Descuentos por hermanos</li>
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Reseñas */}
        <ReviewsSection />

        {/* Contacto */}
        <InfoSection title="Información de Contacto" icon={Phone}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Datos de Contacto:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Teléfono:</strong> +57 (1) 234-5678</p>
                <p><strong>Email:</strong> info@colegiosanpatricio.edu.co</p>
                <p><strong>Dirección:</strong> Carrera 15 #85-30, Bogotá</p>
                <p><strong>Horario de atención:</strong> Lunes a Viernes 7:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Redes Sociales:</h4>
              <div className="space-y-2 text-sm">
                <p>• Facebook: /ColegioSanPatricioBogota</p>
                <p>• Instagram: @colegiosanpatricio</p>
                <p>• YouTube: Colegio San Patricio</p>
                <p>• LinkedIn: Colegio San Patricio</p>
              </div>
            </div>
          </div>
        </InfoSection>

      </div>
    </div>
  );
};

export default Index;
