import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsData {
  rating: number;
  reviews_count: number;
  name: string;
  address: string;
  url: string;
  reviews: Review[];
}

const ReviewsSection = () => {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          'https://functions.poehali.dev/d55efe5e-dad2-4249-9d9f-e52dbc5cf7e7?org_id=f2ca097c-5b35-4a50-9505-910a158d519b'
        );
        
        if (!response.ok) {
          throw new Error('Не удалось загрузить отзывы');
        }
        
        const data = await response.json();
        setReviewsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки отзывов');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={16}
            className={star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  if (loading) {
    return (
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Загрузка отзывов...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !reviewsData) {
    return (
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы гостей</h2>
            <p className="text-lg text-muted-foreground">
              {error || 'Отзывы временно недоступны'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы гостей</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мнения наших гостей с Яндекс Карт
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Card className="text-center animate-scale-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{reviewsData.rating.toFixed(1)}</div>
                  <div className="flex justify-center mb-2">{renderStars(Math.round(reviewsData.rating))}</div>
                  <p className="text-sm text-muted-foreground">
                    На основе {reviewsData.reviews_count} отзывов
                  </p>
                </div>
                <div className="hidden md:block w-px h-20 bg-border"></div>
                <div className="text-center md:text-left">
                  <a
                    href={reviewsData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Icon name="ExternalLink" size={20} />
                    <span>Смотреть все отзывы на Яндекс Картах</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {reviewsData.reviews && reviewsData.reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {reviewsData.reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{review.author}</CardTitle>
                      <div className="flex items-center gap-3">
                        {renderStars(review.rating)}
                        {review.date && (
                          <span className="text-sm text-muted-foreground">{formatDate(review.date)}</span>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline">{review.rating}/5</Badge>
                  </div>
                </CardHeader>
                {review.text && (
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <p>Отзывы скоро появятся</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
