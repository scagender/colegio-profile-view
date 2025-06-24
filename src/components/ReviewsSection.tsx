
import { MessageSquare, ThumbsUp } from "lucide-react";
import StarRating from "./StarRating";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  author: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
}

const ReviewsSection = () => {
  const reviews: Review[] = [
    {
      id: 1,
      author: "María González",
      role: "Madre de estudiante",
      rating: 5,
      date: "Hace 2 meses",
      content: "Excelente colegio, mi hijo ha desarrollado tanto académica como personalmente. Los profesores son muy dedicados y el ambiente es muy positivo.",
      helpful: 12
    },
    {
      id: 2,
      author: "Carlos Rodríguez",
      role: "Padre de estudiante",
      rating: 4,
      date: "Hace 3 meses",
      content: "Muy buena institución educativa. Las instalaciones son modernas y los programas extracurriculares son variados. Solo mejoraría la comunicación con los padres.",
      helpful: 8
    },
    {
      id: 3,
      author: "Ana Martínez",
      role: "Ex-alumna",
      rating: 5,
      date: "Hace 6 meses",
      content: "Me gradué hace 5 años y puedo decir que la educación que recibí me preparó muy bien para la universidad. Siempre estaré agradecida con todos mis profesores.",
      helpful: 15
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <MessageSquare className="w-5 h-5 text-yellow-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Reseñas de Padres y Estudiantes</h2>
        </div>
        <Button variant="outline">
          Escribir Reseña
        </Button>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900">{review.author}</h4>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{review.role}</span>
                </div>
                <div className="flex items-center gap-3">
                  <StarRating rating={review.rating} size="sm" showNumber={false} />
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-3 leading-relaxed">
              {review.content}
            </p>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>Útil ({review.helpful})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <Button variant="outline" className="w-full md:w-auto">
          Ver Todas las Reseñas (142)
        </Button>
      </div>
    </section>
  );
};

export default ReviewsSection;
