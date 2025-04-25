import { Lokasi } from './components/lokasi';
import { Pengajar } from './components/pengajar';
import { Sejarah } from './components/sejarah';
import { VisiDanMisi } from './components/visi-misi';

export function TentangKami() {
  return (
    <>
      <Sejarah />
      <VisiDanMisi />
      <Pengajar />
      <Lokasi />
    </>
  );
}
