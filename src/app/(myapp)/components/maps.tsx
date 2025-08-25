'use client';

import { useEffect, useState } from 'react';
//import dynamic from 'next/dynamic';
import { config } from './config-map';
import { SimpleGisMap } from '@simple/maps-ui';
import { getMapByCode } from '../functions/maps';

/* const SimpleGisMap = dynamic(() => import('@simple/maps-ui').then(mod => mod.SimpleGisMap), {
  ssr: false,
});
 */

// Component to handle map click events
function MapComponent({ code }: { code: string }) {
  const [currentMap, setCurrentMap] = useState<any>(null);

  useEffect(() => {
    getMapByCode(code).then((map) => {
      setCurrentMap(map);
      console.log(map);
    });
  }, [code]);

  return currentMap ? <SimpleGisMap {...currentMap} /> : <div>Mapa não encontrado</div>;
}

export { MapComponent };
