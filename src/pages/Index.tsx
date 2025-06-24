
import { 
  FileText, 
  Users, 
  BookOpen, 
  Trophy, 
  Heart, 
  DollarSign,
  Calendar,
  Phone,
  GraduationCap,
  Globe,
  Activity,
  Church,
  Target
} from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import SchoolBanner from "@/components/SchoolBanner";
import InfoSection from "@/components/InfoSection";
import ReviewsSection from "@/components/ReviewsSection";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
        
        {/* Información de Contacto */}
        <InfoSection title="Información de Contacto" icon={Phone}>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Dirección:</strong> Bosques de Montemar Oriente 1750, Concón</li>
              <li><strong>Marcia Basáez (secretaria de Dirección):</strong> +56 9 87088718 o secretariadireccion@colegioalbamar.cl</li>
              <li><strong>Página web oficial:</strong> <a href="https://www.colegioalbamar.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">www.colegioalbamar.cl</a></li>
              <li><strong>Instagram:</strong> <a href="https://www.instagram.com/colegioalbamaroficial/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">https://www.instagram.com/colegioalbamaroficial/</a></li>
            </ul>
          </div>
        </InfoSection>

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

        {/* Información de Costos */}
        <InfoSection title="Información de Costos" icon={DollarSign}>
          <div className="space-y-6">
            {/* Matrícula */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Matrícula</h3>
              <div className="overflow-x-auto mb-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ítem</TableHead>
                      <TableHead>Curso</TableHead>
                      <TableHead>Valor (UF)</TableHead>
                      <TableHead>Valor (CLP)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell rowSpan={3} className="font-medium">Matrícula</TableCell>
                      <TableCell>Playgroup</TableCell>
                      <TableCell>6,6</TableCell>
                      <TableCell>$256.998</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prekinder y Kinder</TableCell>
                      <TableCell>10,6</TableCell>
                      <TableCell>$389.392</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Básica y Media</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>$584.088</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Tipo de pago: Anual que se hace a principios de año</li>
                <li>Tope máximo: Por familia se puede pagar hasta 45 UF ($1.752.264)</li>
              </ul>
            </div>

            {/* Colegiatura */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Colegiatura</h3>
              <div className="overflow-x-auto mb-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ítem</TableHead>
                      <TableHead>Curso</TableHead>
                      <TableHead>Valor (UF)</TableHead>
                      <TableHead>Valor (CLP)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell rowSpan={3} className="font-medium">Sin jornada extendida</TableCell>
                      <TableCell>Playgroup</TableCell>
                      <TableCell>6,6</TableCell>
                      <TableCell>$256.998</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prekinder y Kinder</TableCell>
                      <TableCell>10,6</TableCell>
                      <TableCell>$389.392</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Básica y Media</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>$584.088</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell rowSpan={3} className="font-medium">Con jornada extendida</TableCell>
                      <TableCell>Playgroup</TableCell>
                      <TableCell>9,6</TableCell>
                      <TableCell>$373.816</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prekinder y Kinder</TableCell>
                      <TableCell>13,6</TableCell>
                      <TableCell>$529.573</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Básica y Media</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Tipo de pago: Mensual</li>
                <li>La colegiatura (ambas) incluye:
                  <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li>Seguro de accidentes del alumno: 50 UF por evento con cobertura 24/7.</li>
                    <li>Seguro de escolaridad: Cubre en caso de fallecimiento de apoderado sostenedor (120 UF anuales hasta IV Medio).</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Bono de incorporación */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Bono de incorporación</h3>
              <div className="overflow-x-auto mb-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ítem</TableHead>
                      <TableHead>Valor 1º Hijo</TableHead>
                      <TableHead>Valor 2º Hijo</TableHead>
                      <TableHead>Valor 3º Hijo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Bono Incorporación por hijo</TableCell>
                      <TableCell>45 UF o $1.752.264*1</TableCell>
                      <TableCell>30 UF o $1.168.176*1</TableCell>
                      <TableCell>15 UF o $584.088*1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Tipo de pago: Único y se paga al pasar a Prekinder</li>
                <li>Tope máximo: Por familia se puede pagar hasta 90 UF ($3.504.528)</li>
              </ul>
            </div>

            {/* Referencia UF */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Referencia:</strong> Valor UF: $38.939,2 (Fuente: SII)
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Principios Educativos */}
        <InfoSection title="Principios Educativos" icon={BookOpen}>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Desarrollo de la inteligencia:</strong> Enseñando a pensar y aprender con la alumna como protagonista de su formación.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Educación de la voluntad:</strong> Enseñar a buscar siempre la verdad y el bien.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Educación espiritual:</strong> Basada en las enseñanzas del Magisterio de la Iglesia Católica.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Educación en el amor humano:</strong> Promoviendo la entrega generosa a los demás.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Preparación para el trabajo:</strong> Valorando el estudio bien hecho y el espíritu de servicio.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Enseñar a vivir y a convivir:</strong> Cultivando valores, virtudes y habilidades interpersonales.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Desarrollo físico y deportivo:</strong> Fomentando la sana competencia, la fortaleza y la constancia.
              </span>
            </li>
          </ul>
        </InfoSection>

        {/* Proyecto Educativo */}
        <InfoSection title="Proyecto Educativo" icon={GraduationCap}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Educación Preescolar</h3>
              <p className="mb-4">
                El Preescolar Albamar – Montemar se lleva a cabo en conjunto con el Colegio Montemar y funciona en las instalaciones del Colegio Albamar. Los cursos son mixtos y abarcan desde Playgroup hasta Kínder.
              </p>
              <p className="mb-4">
                Con el fin de promover un aprendizaje temprano significativo, el preescolar utiliza la metodología PEIS, un enfoque dinámico, atractivo y personalizado que busca desarrollar al máximo las capacidades individuales de cada niño. Las principales características de esta metodología son:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Desarrollo integral:</strong> Despierta el interés por las letras, los números, el inglés, el arte, la música, el juego y el deporte</li>
                <li><strong>Aprendizaje activo:</strong> Las clases en ambiente acogedor y alegre que favorece el aprendizaje, promoviendo la autonomía, responsabilidad y madurez</li>
                <li><strong>Protagonismo:</strong> Cada niño es gestor de su propio aprendizaje, promoviendo su curiosidad y creatividad, por lo que se respeta sus ritmos, intereses, habilidades y destrezas</li>
                <li><strong>Desarrollo a través de experiencias:</strong> Se fomenta la imaginación a través de experiencias lúdicas, motivadoras y significativas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Educación Básica y Media</h3>
              <p>
                Se dispone de planes y programas propios que se complementan con la malla curricular propuesta por el Ministerio de Educación. Estos componentes son descritos en los puntos que vienen a continuación. (Ejemplo: Religión, Deporte, etc).
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Idiomas */}
        <InfoSection title="Idiomas" icon={Globe}>
          <div>
            <h3 className="text-lg font-semibold mb-3">Inglés</h3>
            <p className="mb-4">
              El inglés en el colegio se enseña a través del enfoque comunicativo, un método que prioriza la comunicación y el uso del idioma en situaciones prácticas y significativas. Este enfoque busca desarrollar las cuatro habilidades lingüísticas —leer, escribir, escuchar y hablar— al mismo tiempo que fomenta el pensamiento crítico.
            </p>
            <p className="mb-4">
              La enseñanza del inglés varía según la etapa escolar, adaptándose al nivel de desarrollo de las alumnas:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Preescolar:</strong> Introducción al bilingüismo con rutinas diarias en inglés, como saludos y rezos. Además, asignaturas como Ciencias, Matemáticas, Música, Arte y Fónica se imparten en inglés. Cada clase cuenta con al menos una educadora bilingüe.</li>
              <li><strong>1ero a 4to básico:</strong> 8 horas semanales de inglés. Asignaturas como Ciencias, Historia (hasta 3° básico) y Arte se imparten en inglés.</li>
              <li><strong>5to a 8vo básico:</strong> 7 horas semanales de inglés, con clases organizadas en grupos personalizados según el nivel de las alumnas.</li>
            </ul>
            <p className="mt-4">
              Para certificar el aprendizaje, las alumnas rinden exámenes de Cambridge, para obtener el First Certificate in English (FCE) en III Medio.
            </p>
          </div>
        </InfoSection>

        {/* Deporte */}
        <InfoSection title="Deporte" icon={Activity}>
          <p className="mb-4">
            El desarrollo físico y deportivo es uno de los principios educativos del colegio, por ello, la actividad física es incorporada en la formación desde preescolar hasta los cursos superiores:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>Deporte en preescolar:</strong> 1 hora diaria de actividad física, con circuitos neuromotores y actividades deportivos adaptados a su edad.</li>
            <li><strong>Deporte desde primero básico:</strong> 4 horas semanales de actividad física, que incluyen educación física y la práctica de deportes como hockey, atletismo, vóleibol y gimnasia artística.</li>
            <li><strong>Selecciones deportivas:</strong> Algunas disciplinas cuentan con selecciones deportivas en las que las alumnas pueden participar como actividad extraprogramática.</li>
          </ul>
        </InfoSection>

        {/* Religión */}
        <InfoSection title="Religión" icon={Church}>
          <p className="mb-4">
            La formación espiritual es un pilar fundamental en el colegio, basada en la búsqueda de la santidad en la vida cotidiana, especialmente a través del trabajo diario. El colegio integra estos principios en la vida de las estudiantes fomentando el amor por el conocimiento, la dedicación al estudio y la práctica de virtudes como la caridad, el servicio, el respeto y la piedad.
          </p>
          <p>
            Para acompañarlas en este camino, el colegio cuenta con una capellanía a cargo de la Prelatura del Opus Dei, que ofrece formación espiritual y ayuda sacerdotal tanto a las alumnas como a sus familias.
          </p>
        </InfoSection>

        {/* Proceso de admisión universitaria */}
        <InfoSection title="Proceso de admisión universitaria" icon={Target}>
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Año</TableHead>
                    <TableHead>Promedio Notas</TableHead>
                    <TableHead>Lenguaje</TableHead>
                    <TableHead>Matemáticas</TableHead>
                    <TableHead>Matemáticas 2</TableHead>
                    <TableHead>Historia</TableHead>
                    <TableHead>Ciencias</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2018</TableCell>
                    <TableCell>6.5</TableCell>
                    <TableCell>687</TableCell>
                    <TableCell>692</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>665</TableCell>
                    <TableCell>718</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2019</TableCell>
                    <TableCell>6.37</TableCell>
                    <TableCell>649</TableCell>
                    <TableCell>650</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>647</TableCell>
                    <TableCell>658</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2020</TableCell>
                    <TableCell>6.44</TableCell>
                    <TableCell>645</TableCell>
                    <TableCell>654</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>726</TableCell>
                    <TableCell>642</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2021</TableCell>
                    <TableCell>6.31</TableCell>
                    <TableCell>602</TableCell>
                    <TableCell>614</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>633</TableCell>
                    <TableCell>604</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022</TableCell>
                    <TableCell>6.46</TableCell>
                    <TableCell>615</TableCell>
                    <TableCell>638</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>640</TableCell>
                    <TableCell>656</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023</TableCell>
                    <TableCell>6.39</TableCell>
                    <TableCell>801</TableCell>
                    <TableCell>784</TableCell>
                    <TableCell>605</TableCell>
                    <TableCell>724</TableCell>
                    <TableCell>701</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024</TableCell>
                    <TableCell>6.49</TableCell>
                    <TableCell>764</TableCell>
                    <TableCell>829</TableCell>
                    <TableCell>595</TableCell>
                    <TableCell>689</TableCell>
                    <TableCell>716</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2025</TableCell>
                    <TableCell>6.46</TableCell>
                    <TableCell>744</TableCell>
                    <TableCell>835</TableCell>
                    <TableCell>564</TableCell>
                    <TableCell>689</TableCell>
                    <TableCell>688</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>PAES 2025:</strong> Lugar número 95 a nivel nacional, con un puntaje promedio de 786,5 puntos1* y 6xto a nivel regional.</li>
              <li><strong>PAES 2024:</strong> Lograron posicionarse en el lugar número 50 a nivel nacional, con un puntaje promedio de 804,3 puntos1* y 4to a nivel regional.</li>
              <li><strong>PAES 2023:</strong> Lugar número 85 a nivel nacional, con un puntaje promedio de 778 puntos1* y 4to a nivel regional.</li>
            </ul>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Referencias:</strong><br />
                1*: Considerar que el máximo puntaje es 1000 desde 2022 en adelante<br />
                2*: Considerar que el puntaje máximo es de 850 desde 2018 hasta 2021
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Padres */}
        <InfoSection title="Padres" icon={Heart}>
          <p className="mb-4">
            El colegio ofrece recursos y programas para apoyar a los padres en la educación de sus hijas:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
            <li><strong>Cursos:</strong> Se imparten dos cursos anuales, que incluyen charlas y reuniones para analizar casos prácticos relacionados con la educación de sus hijos</li>
            <li><strong>Biblioteca:</strong> Una colección de libros y videos sobre temas educativos y familiares, disponible para apoyar a los padres en su labor</li>
            <li><strong>Enlaces de interés:</strong> Una selección de páginas web con material actualizado sobre educación, familia y formación</li>
          </ul>
          <p>
            Además, el colegio organiza conferencias y entrevistas personalizadas con las profesoras jefes, con el fin de fortalecer la colaboración entre el colegio y las familias en el proceso educativo.
          </p>
        </InfoSection>

        {/* Actividades Extraprogramáticas Referenciales */}
        <InfoSection title="Actividades Extraprogramáticas Referenciales" icon={Trophy}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">Deportes</h4>
              <ul className="text-sm space-y-1">
                <li>• Hockey</li>
                <li>• Atletismo</li>
                <li>• Gimnasia artística</li>
                <li>• Vóleibol</li>
                <li>• Ajedrez</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">Arte y cultura</h4>
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

        {/* Reseñas */}
        <ReviewsSection />

      </div>
    </div>
  );
};

export default Index;
