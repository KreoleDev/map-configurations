import { useQuery } from '@tanstack/react-query';
import { getWidget, getWidgets } from '../functions/widgets';
import { getWidgetPosition } from '../functions/configurations';
import { WidgetType } from '../types/global';

export function useWidgets() {
  return useQuery({
    queryKey: ['widgets'],
    queryFn: () => getWidgets(),
  });
}

export async function getWidgetsByType() {
  ///i want on process the getWidgetTypes to label and value
  const widgetTypes = getWidgetTypes().map(type => ({
    label: type,
    value: type
  }));
  
  return widgetTypes;
}

export function getWidgetTypes(): WidgetType[] {
  return [
    WidgetType.TIMESLIDER,
    WidgetType.EDIT,
    WidgetType.LEGEND,
    WidgetType.ZOOM,
    WidgetType.PAN,
    WidgetType.MEASURE,
    WidgetType.PRINT,
    WidgetType.SEARCH,
    WidgetType.LOCATE,
    WidgetType.FULLSCREEN,
    WidgetType.SCALE,
    WidgetType.BASEMAP,
    WidgetType.LAYERS,
    WidgetType.ATTRIBUTES,
    WidgetType.DRAW,
    WidgetType.GEOLOCATION,
    WidgetType.COORDINATES,
    WidgetType.HOME,
    WidgetType.COMPASS,
    WidgetType.ROTATION,
  ];
}

export function useDetailWidget(uuid: string) {
  return useQuery({
    queryKey: ['widget', uuid],
    queryFn: () => getWidget(uuid),
  });
}
export function useWidgetsConfiguration() {
  const positionOptions = getWidgetPosition();

  return {
    positionOptions,
  };
}
