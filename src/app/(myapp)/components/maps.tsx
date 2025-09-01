'use client';

import { useEffect, useState } from 'react';
//import dynamic from 'next/dynamic';
import { SimpleGisMap, GisMapProps } from '@simple/maps-ui';
import { getMapByCode } from '../functions/maps';

/* const SimpleGisMap = dynamic(() => import('@simple/maps-ui').then(mod => mod.SimpleGisMap), {
  ssr: false,
});
 */

// Component to handle map click events
function MapComponent({ code }: { code: string }) {
  const [currentMap, setCurrentMap] = useState<GisMapProps | null>(null);

  useEffect(() => {
    getMapByCode(code).then((map) => {
      setCurrentMap(map);
    });
  }, [code]);

  console.log(currentMap);

  return currentMap ? <SimpleGisMap config={currentMap} /> : <div>Mapa não encontrado</div>;
}

export { MapComponent };
