import { Badge, BadgePercent } from 'lucide-react';
import { cn } from '~/lib/utils';

interface PriceDisplayProps {
  regularPrice: string;
  privatePrice: string;
  hasPromo?: boolean;
  promoDiscount?: number;
}

const PriceDisplay = ({
  regularPrice,
  privatePrice,
  hasPromo = true,
  promoDiscount = 25,
}: PriceDisplayProps) => {
  const calculateDiscountedPrice = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    const discountedPrice = numericPrice - numericPrice * (promoDiscount / 100);
    return `Rp ${discountedPrice.toLocaleString('id-ID')}`;
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Regular Class Card */}
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border transition-all duration-300',
          hasPromo
            ? 'bg-gradient-to-br from-white to-main-light shadow-lg'
            : 'bg-white'
        )}
      >
        {hasPromo && (
          <div className="absolute -right-12 top-6 w-40 rotate-45 bg-red-500 text-center text-sm text-white py-1">
            Promo!
          </div>
        )}
        <div className="p-6">
          <h4 className="text-xl font-bold text-primary mb-4">Kelas Reguler</h4>
          <ul className="text-sm text-gray-600 space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>Durasi 3 bulan</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>2x pertemuan seminggu</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>Kelas bersama (maks. 15 orang)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>Sertifikat kelulusan</span>
            </li>
          </ul>
          <div className="space-y-2">
            {hasPromo && (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600">
                  <BadgePercent className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    Hemat {promoDiscount}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lg line-through text-gray-400">
                    {regularPrice}
                  </div>
                  <div className="text-2xl font-bold text-secondary-color">
                    {calculateDiscountedPrice(regularPrice)}
                  </div>
                </div>
              </>
            )}
            {!hasPromo && (
              <div className="text-2xl font-bold text-secondary-color">
                {regularPrice}
              </div>
            )}
            <div className="text-sm text-gray-500">Termasuk semua bahan</div>
          </div>
        </div>
      </div>

      {/* Private Class Card */}
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border transition-all duration-300',
          hasPromo
            ? 'bg-gradient-to-br from-main-color to-main-color/90 text-white shadow-xl'
            : 'bg-white'
        )}
      >
        {hasPromo && (
          <>
            <div className="absolute -right-12 top-6 w-40 rotate-45 bg-amber-500 text-center text-sm text-rw-burgundy font-medium py-1">
              Best Value!
            </div>
          </>
        )}
        <div className="p-6">
          <h4 className="text-xl font-bold mb-4">Kelas Private</h4>
          <ul className="text-sm space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>Durasi 1 bulan (intensif)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>Jadwal fleksibel</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>One-on-one coaching</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>Sertifikat kelulusan</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
              <span>Konsultasi karir</span>
            </li>
          </ul>
          <div className="space-y-2">
            {hasPromo && (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-color text-white">
                  <BadgePercent className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    Hemat {promoDiscount}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lg line-through text-white/60">
                    {privatePrice}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {calculateDiscountedPrice(privatePrice)}
                  </div>
                </div>
              </>
            )}
            {!hasPromo && (
              <div className="text-2xl font-bold text-secondary-color">
                {privatePrice}
              </div>
            )}
            <div className="text-sm text-white/80">
              Termasuk semua bahan & toolkit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;
