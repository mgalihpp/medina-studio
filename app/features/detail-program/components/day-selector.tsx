import { CalendarDays } from 'lucide-react';
import { cn } from '~/lib/utils';

interface DaySelectorProps {
  selectedDays: string[];
  onChange: (days: string[]) => void;
}

const DaySelector = ({ selectedDays, onChange }: DaySelectorProps) => {
  const weekdays = [
    { id: 'monday', label: 'Senin' },
    { id: 'tuesday', label: 'Selasa' },
    { id: 'wednesday', label: 'Rabu' },
    { id: 'thursday', label: 'Kamis' },
    { id: 'friday', label: 'Jumat' },
    { id: 'saturday', label: 'Sabtu' },
  ];

  const handleDayClick = (dayId: string) => {
    if (selectedDays.includes(dayId)) {
      onChange(selectedDays.filter((id) => id !== dayId));
    } else {
      onChange([...selectedDays, dayId]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-secondary-color mb-2">
        <CalendarDays className="h-5 w-5" />
        <h3 className="font-medium">Pilih Hari Kursus</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {weekdays.map((day) => (
          <button
            key={day.id}
            type="button"
            onClick={() => handleDayClick(day.id)}
            className={cn(
              'px-4 py-3 rounded-lg border-2 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-secondary-color focus:ring-offset-2',
              selectedDays.includes(day.id)
                ? 'border-secondary-color bg-secondary-color text-white'
                : 'border-gray-200 hover:border-secondary-color/50'
            )}
          >
            <span className="text-sm font-medium">{day.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
