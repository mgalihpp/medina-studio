import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Clock, Users, Calendar } from 'lucide-react';
import { Badge } from '~/components/ui/badge';

interface ProgramCardProps {
  title: string;
  type: string;
  description: string;
  duration: string;
  schedule: string;
  capacity: string;
  features: string[];
}

export function ProgramCard({
  title,
  type,
  description,
  duration,
  schedule,
  capacity,
  features,
}: ProgramCardProps) {
  return (
    <Card className="p-6 md:p-8 bg-white shadow-lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <Badge className="bg-main-light text-secondary-color px-2 py-1">
              {type}
            </Badge>
            <p className="text-gray-600 mt-4">{description}</p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-main-color" />
              <span className="text-gray-700">{duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-main-color" />
              <span className="text-gray-700">{schedule}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-main-color" />
              <span className="text-gray-700">{capacity}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Fitur Program:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary-color rounded-full"></span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
