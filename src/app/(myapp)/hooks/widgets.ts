import { useQuery } from '@tanstack/react-query';
import { getWidget, getWidgetData, getWidgets } from '../functions/widgets';
import { getWidgetPosition } from '../functions/configurations';
import { WidgetType } from '../types/global';
import { apiClient } from '../lib/api-client';

export function useWidgets() {
  return useQuery({
    queryKey: ['widgets'],
    queryFn: () => getWidgets(),
  });
}

export async function getWidgetsByType() {
  ///i want on process the getWidgetTypes to label and value
  const widgetTypes = getWidgetTypes().map((type) => ({
    label: type,
    value: type,
  }));

  return widgetTypes;
}

export function getWidgetTypes(): WidgetType[] {
  return [
    WidgetType.TIMESLIDER,
    WidgetType.EDIT,
    WidgetType.LEGEND,
    WidgetType.SEARCH,
    WidgetType.COORDINATES,
    WidgetType.IDENTITY,
    WidgetType.CONTEXTMENU,
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

export function useWidgetData(associationId: string) {
  console.log(associationId)
  return useQuery({
    queryKey: ['widgetData', associationId],
    queryFn: () => getWidgetData(associationId),
    enabled: !!associationId,
  });
}
