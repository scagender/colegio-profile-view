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
          <p className="mb-4">
            El Colegio San Patricio es una institución educativa privada fundada en 1985, 
            reconocida por su excelencia académica y formación integral. Nuestro enfoque 
            pedagógico combina metodologías tradicionales con innovación educativa, 
            preparando a nuestros estudiantes para los desafíos del siglo XXI.
          </p>
          <p>
            Contamos con acreditación internacional y un programa bilingüe que fortalece 
            las competencias comunicativas de nuestros estudiantes. Nuestro compromiso es 
            formar líderes íntegros, críticos y comprometidos con su comunidad.
          </p>
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

        {/* Académicos */}
        <InfoSection title="Programa Académico" icon={BookOpen}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Niveles Educativos:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Pre-jardín y Jardín (3-5 años)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Primaria (1° a 5°)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Bachillerato (6° a 11°)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Programas Especiales:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Programa Bilingüe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Bachillerato Internacional</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Programa STEM</span>
                </li>
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Actividades Extracurriculares */}
        <InfoSection title="Actividades Extracurriculares" icon={Trophy}>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Deportes</h4>
              <ul className="text-sm space-y-1">
                <li>• Fútbol</li>
                <li>• Baloncesto</li>
                <li>• Natación</li>
                <li>• Tenis</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Arte y Cultura</h4>
              <ul className="text-sm space-y-1">
                <li>• Teatro</li>
                <li>• Música</li>
                <li>• Danza</li>
                <li>• Artes plásticas</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Clubes Académicos</h4>
              <ul className="text-sm space-y-1">
                <li>• Robótica</li>
                <li>• Debate</li>
                <li>• Ciencias</li>
                <li>• Modelo ONU</li>
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
