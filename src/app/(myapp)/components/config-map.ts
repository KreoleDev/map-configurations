import { z } from 'zod';
import rawConfig from './config-map.json';

const BaseMapName = z.enum([
  'openstreetmap',
  'googlesatellite',
  'googlemaps',
  'esrisatellite',
  'esriworldtopo',
  'esriterrain',
  'cartodb',
  'opentopomap',
]);

const GisMapSchema = z.object({
  name: z.string(),
  center: z.object({ lat: z.number(), lng: z.number() }),
  zoom: z.number(),
  panelLayers: z.boolean().optional(),
  panelWidgets: z.boolean().optional(),
  footer: z.boolean().optional(),
  expand: z.boolean().optional(),
  locate: z.boolean().optional(),
  fullscreen: z.boolean().optional(),
  lock: z.boolean().optional(),
  baseMaps: z.array(z.object({
    default: z.boolean(),
    name: BaseMapName,
    active: z.boolean(),
  })),
  groupLayers: z.array(z.unknown()),
  widgets: z.array(z.unknown()).optional(),
});

export const config = GisMapSchema.parse(rawConfig); 
