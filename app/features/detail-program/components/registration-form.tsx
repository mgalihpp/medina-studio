import { useState } from 'react';
import { z } from 'zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, Clock } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { Calendar } from '~/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { cn } from '~/lib/utils';
import DaySelector from './day-selector';
import { toast } from 'sonner';
import { RippleButton } from '~/components/ripple-button';

interface RegistrationFormProps {
  courseTitle: string;
  courseId: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus minimal 2 karakter' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  phone: z
    .string()
    .min(10, { message: 'Nomor telepon harus minimal 10 digit' }),
  date: z.date({ required_error: 'Harap pilih tanggal mulai kursus' }),
  days: z.array(z.string()).min(1, { message: 'Harap pilih minimal 1 hari' }),
  time: z.string({ required_error: 'Harap pilih waktu kursus' }),
  classType: z.enum(['regular', 'private'], {
    required_error: 'Harap pilih jenis kelas',
  }),
  courseId: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = ({ courseTitle, courseId }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define available time slots
  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '13:00 - 15:00',
    '15:00 - 17:00',
    '18:00 - 20:00',
  ];

  // Define weekdays
  const weekdays = [
    { id: 'monday', label: 'Senin' },
    { id: 'tuesday', label: 'Selasa' },
    { id: 'wednesday', label: 'Rabu' },
    { id: 'thursday', label: 'Kamis' },
    { id: 'friday', label: 'Jumat' },
    { id: 'saturday', label: 'Sabtu' },
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      days: [],
      time: '',
      classType: 'regular',
      courseId: courseId,
    },
  });

  const selectedDays = form.watch('days') || [];

  function onSubmit(data: FormData) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      toast.success(
        'Berhasil mendaftar kursus! pendaftaran Anda telah kami terima. Kami akan segera menghubungi Anda.'
      );
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border">
      <h3 className="text-2xl font-serif font-bold text-main-color mb-6">
        Daftar Kursus
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nama lengkap" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="contoh@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input placeholder="+62812XXXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Tanggal Mulai</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pilih tanggal</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Pilih tanggal mulai kursus yang Anda inginkan
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DaySelector
                    selectedDays={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu Kursus</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih waktu kursus" />
                      <Clock className="h-4 w-4 opacity-70 ml-2" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Pilih waktu kursus yang sesuai dengan jadwal Anda
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="classType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Jenis Kelas</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="regular" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Reguler (3 bulan, 2x seminggu)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="private" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Private (1 bulan, intensif)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <RippleButton
            className="w-full"
            // disabled={isSubmitting}
          >
            {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
          </RippleButton>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
