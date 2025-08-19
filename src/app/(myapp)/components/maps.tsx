'use client';

//import dynamic from 'next/dynamic';
import { config } from './config-map';
import { SimpleGisMap } from '@simple/maps-ui';

/* const SimpleGisMap = dynamic(() => import('@simple/maps-ui').then(mod => mod.SimpleGisMap), {
  ssr: false,
});
 */
export default function MapViewer() {
  return <SimpleGisMap {...config} />;
}
