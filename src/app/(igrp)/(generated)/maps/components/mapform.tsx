'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "zod"
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import {MapGetCoordinants} from '@/app/(myapp)/components/MapGetCoordinants'
import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";
import ConfigurarWidgets from '@/app/(igrp)/(generated)/maps/components/configurarwidgets'
import { 
  IGRPForm,
	IGRPTabs,
	IGRPTabItem,
	IGRPInputText,
	IGRPTextarea,
	IGRPCombobox,
	IGRPSwitch,
	IGRPInputNumber,
	IGRPText,
	IGRPFormList,
	IGRPInputHidden,
	IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPModalDialogDescription,
	IGRPRepetitiveComponent,
	IGRPButton,
	IGRPModalDialogFooter,
	IGRPModalDialogTrigger,
	IGRPBadge,
	IGRPDataTable,
	IGRPDataTableRowAction,
	IGRPDataTableDropdownMenu,
	IGRPDataTableDropdownMenuCustom,
	IGRPDataTableDropdownMenuAlert 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateMap} from '@/app/(myapp)/functions/maps'
import {Widget} from '@/app/(myapp)/types/global'
import {WidgetMap} from '@/app/(myapp)/types/global'
import {useMapConfiguration} from '@/app/(myapp)/hooks/maps'
import { useRouter } from "next/navigation";

export default function Mapform({ initialData, isSubmitting, onAfterSubmit } : { initialData?: any, isSubmitting: boolean, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    name: z.string().nonempty(),
    code: z.string().nonempty(),
    description: z.string().optional(),
    basemapId: z.string().optional(),
    latitude: z.number(),
    longitude: z.number(),
    zoom: z.number(),
    layers: z.array(z.object({ layerId: z.string().optional(), visibility: z.string().optional(), groupId: z.string().optional(), order: z.number().optional(), associationId: z.string().optional() })).optional(),
    widgetType: z.string().optional(),
    associationId: z.string().optional(),
    showHeader: z.boolean().optional(),
    showLayers: z.boolean().optional(),
    showZoom: z.boolean().optional(),
    showLocation: z.boolean().optional(),
    showHome: z.boolean().optional(),
    showFullscreen: z.boolean().optional(),
    showWidgets: z.boolean().optional(),
    showScale: z.boolean().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    name: undefined,
    code: undefined,
    description: ``,
    basemapId: undefined,
    latitude: 0,
    longitude: 0,
    zoom: 0,
    layers: [{ layerId: ``, visibility: ``, groupId: ``, order: undefined, associationId: undefined }],
    widgetType: undefined,
    associationId: undefined,
    showHeader: true,
    showLayers: true,
    showZoom: true,
    showLocation: true,
    showHome: true,
    showFullscreen: true,
    showWidgets: true,
    showScale: true
}


  type Table1 = {
    widgetType: string;
    associationId: string;
}

  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  const [selectbasemapIdOptions, setSelectbasemapIdOptions] = useState<IGRPOptionsProps[]>([]);
  const [formListlayersDefault, setFormListlayersDefault] = useState<any>({});
  const [selectlayerIdOptions, setSelectlayerIdOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectvisibilityOptions, setSelectvisibilityOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectgroupIdOptions, setSelectgroupIdOptions] = useState<IGRPOptionsProps[]>([]);
  const [repetitiveListrepetitiveList1, setRepetitiveListrepetitiveList1] = useState<any[]>([]);
  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
const [widgets, setWidgets] = useState<any>([]);

const [openConfig, setOpenConfig] = useState<boolean>(false);

const [currentWidget, setCurrentWidget] = useState<any>(undefined);

const [widgetTypes, setWidgetTypes] = useState<any>([]);

const { igrpToast } = useIGRPToast()

async function handleSubmit (values: z.infer<any>): Promise<void  | undefined> {

  try {
  const response = await createOrUpdateMap({ uuid: initialData?.uuid, ...values, widgets });
  igrpToast({
    title: 'Sucesso',
    description: values.uuid ? 'Mapa atualizado com sucesso' : 'Mapa gravado com sucesso',
    type: 'success',
  });
  router.push(`/maps/${response.uuid}/edit`)
} catch (error: any) {
  igrpToast({
    title: 'Erro',
    description: `Ocorreu um erro ao processar o formulário. [${error.message}]`,
    type: 'error',
  });
  console.log(error);
}

}

function handleChangeCoord (coords: any): void  | undefined {

   formform1Ref.current?.setValue('latitude', coords.lat);
formform1Ref.current?.setValue('longitude', coords.lng);
formform1Ref.current?.setValue('zoom', coords.zoom); 

}

function associarWidget (item: any): void  | undefined {

    setWidgets((prev: any[]) => {
     const exists = prev.find(w => w.widgetType === item.value);
     if (exists) return prev;
     return [...prev, {widgetType: item.value, order: prev.length}];
   });

}

function handleDeleteWidget (widgetName: string): void  | undefined {

  setWidgets((prev: any[]) => {
    return prev.filter(w => w.widgetType !== widgetName);
  });

}

const router = useRouter()
useEffect(() => {
  const load = async () => {
    const { basemapsOptions, widgetsOptions, layersOptions, visibilityOptions, groupsOptions } =
      await useMapConfiguration();
    setSelectlayerIdOptions(layersOptions || []);
    setSelectvisibilityOptions(visibilityOptions || []);
    setSelectbasemapIdOptions(basemapsOptions || []);
    setSelectgroupIdOptions(groupsOptions || []);

    setWidgetTypes(widgetsOptions || [])

  };
  load();
}, []);


useEffect(() => {
  if (!initialData) return
  setForm1Data({
    ...initialData, description: initialData.description === null ? "" : initialData.description,
    layers: initialData.layers.map((layer: any) => ({
      layerId: layer.uuid,
      visibility: layer.visibility,
      groupId: layer.groupId === null ? "" : layer.groupId,
      order: layer.order,
      associationId: layer.associationId
    })),
  })
  setWidgets(initialData.widgets)

}, [initialData])

useEffect(() => {
    setContentTabletable1(widgets || []);

  const selectedWidgetTypes = new Set(widgets.map((w: any) => w.widgetType));
  const availableWidgets =
    widgetTypes.filter((option: any) => !selectedWidgetTypes.has(option.value))
      .map((widget: any) => ({
        ...widget,
      }));

  setRepetitiveListrepetitiveList1(availableWidgets || []);
}, [initialData, widgets, widgetTypes])

useEffect(() => {
  if (isSubmitting) {
    formform1Ref.current?.submit();
    onAfterSubmit?.();
  }
}, [isSubmitting, onAfterSubmit]);


  return (
<div className={ cn('component',)}    >
	<IGRPForm
  schema={ form1 }
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  className={ cn() }
  onSubmit={ handleSubmit }
  defaultValues={ form1Data }
>
  <>
  <IGRPTabs
  variant={ `default` }
  tabContentClassName={ `border-transparent-none border rounded-lg space-y-3` }
  showIcon={ true }
  iconPlacement={ `start` }
  tabListClassName={ cn() }
  items={
    [
        {
          value: `informacoesBasicas`,
          label: `Informações Básicas`,
          icon: `Map`,
content: (<>
            <div className={ cn('grid','grid-cols-1 ',' gap-4',)}    >
	<IGRPInputText
  name={ `name` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do mapa` }
  className={ cn('','col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputText
  name={ `code` }
  label={ `Codigo` }
showIcon={ false }
required={ true }


placeholder={ `Codigo do mapa` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPTextarea
  name={ `description` }
  
label={ `Descrição` }
rows={ 3 }
required={ false }


placeholder={ `Descrição do mapa` }
  className={ cn('','col-span-1',) }
  
  
>
</IGRPTextarea>
<IGRPCombobox
  name={ `basemapId` }
  label={ `Basemap Inicial` }
variant={ `single` }
placeholder={ `Selecione uma opção` }
required={ false }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('','col-span-1','',) }
  
  options={ selectbasemapIdOptions }
>
</IGRPCombobox>
<IGRPSwitch
  name={ `status` }
  label={ `Mapa ativo` }
gridSize={ `full` }


  className={ cn('','col-span-1','',) }
  

  
>
</IGRPSwitch></div>
</>),
        },
        {
          value: `enquadramento`,
          label: `Equadramento do Mapa`,
          icon: `MapPinned`,
content: (<>
            <div className={ cn('grid grid grid-cols-3 grid-rows-1 gap-2 justify-items-stretch items-start',)}    >
	<IGRPInputNumber
  name={ `latitude` }
  label={ `Latitude` }

max={ 9999999 }
step={ 1 }
required={ true }


  className={ cn() }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `longitude` }
  label={ `Longitude` }

max={ 9999999 }
step={ 1 }
required={ true }


  className={ cn() }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `zoom` }
  label={ `Zoom` }

max={ 9999999 }
step={ 1 }
required={ true }


  className={ cn() }
  
  
>
</IGRPInputNumber></div>
            <IGRPText
  name={ `text1` }
  
variant={ `primary` }
weight={ `medium` }
size={ `sm` }
align={ `center` }
spacing={ `tight` }
maxLines={ 3 }

animate={ true }
  
  
>
  ou click no mapa e preenche automaticamente as coordinadas
</IGRPText>
            <MapGetCoordinants  onCoordinatesChange={ handleChangeCoord }   ></MapGetCoordinants>
</>),
        },
        {
          value: `layers`,
          label: `Layers`,
          icon: `Layers`,
content: (<>
            <IGRPFormList
  id={ `formlist_r6odzx` }
  name={ `layers` }
  label={ `Layers` }
  color={ `primary` }
  variant={ `solid` }
  addButtonLabel={ `Add` }
  addButtonIconName={ `Plus` }
  dot={ true }
  badgeValue={ `Obrigatório` }
renderItem={ (_: any, index: number) => (
      <>
        <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `layers.${index}.layerId` }
  label={ `Layer` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  
  options={ selectlayerIdOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `layers.${index}.visibility` }
  label={ `Visivel` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  
  options={ selectvisibilityOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `layers.${index}.groupId` }
  label={ `Grupo` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  
  options={ selectgroupIdOptions }
>
</IGRPCombobox>
<IGRPInputNumber
  name={ `layers.${index}.order` }
  label={ `Ordem` }

max={ 9999999 }
step={ 1 }
required={ false }


  
  
>
</IGRPInputNumber>
<IGRPInputHidden
  name={ `layers.${index}.associationId` }
  label={ `associationId` }
required={ false }


  
  
>
</IGRPInputHidden></div>
</>
    )
  }
  computeLabel={
    (item: any, index: number) => `Item ${index}`
  }
  
  defaultItem={ formListlayersDefault }
>
</IGRPFormList>

</>),
        },
        {
          value: `widgets`,
          label: `Widgets`,
          icon: `Settings2`,
content: (<>
            <IGRPModalDialog
  
  
>
  <IGRPModalDialogContent
  size={ `sm` }
  
  
>
  <IGRPModalDialogHeader
  className={ cn('',) }
  
  
>
  <IGRPModalDialogTitle
  name={ `modalDialogTitle1` }
  

  
  
>
  Widgets
</IGRPModalDialogTitle>
  <IGRPModalDialogDescription
  name={ `modalDialogDescription1` }
  

  
  
>
  Associar os widgets ao mapa
</IGRPModalDialogDescription>
</IGRPModalDialogHeader>
  <IGRPRepetitiveComponent<any>
  keyExtractor={ (item) => item.id }
  items={ repetitiveListrepetitiveList1 }
>
{ (item) =>
  <>
  <div className={ cn('flex','justify-between',)}    >
	<IGRPText
  name={ `text2` }
  
variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }

  className={ cn() }
  
  
>
  { item.label }
</IGRPText>
<IGRPButton
  name={ `button1` }
  
variant={ `outline` }
size={ `sm` }
showIcon={ true }
iconName={ `CirclePlus` }

  className={ cn() }
  onClick={ () => {associarWidget(item)} }
  
>
  Associar
</IGRPButton></div>
</>
}
</IGRPRepetitiveComponent>

  <IGRPModalDialogFooter
  className={ cn('',) }
  
  
>
</IGRPModalDialogFooter>
</IGRPModalDialogContent>
  <IGRPModalDialogTrigger
  name={ `modalDialogTrigger1` }
  variant={ `default` }
size={ `default` }
showIcon={ false }

  onClick={ () => {} }
  
>
  <IGRPBadge
  name={ `badge1` }
  color={ `primary` }
variant={ `solid` }
size={ `md` }

showIcon={ true }
iconName={ `Plus` }
iconPlacement={ `start` }

  badgeClassName={ cn() }
  
  
>
  Associar widgets
</IGRPBadge>
</IGRPModalDialogTrigger>
</IGRPModalDialog>
            <IGRPDataTable<Table1, Table1>
  columns={
    [
        {
          header: 'Widget'
,accessorKey: 'widgetType',
          cell: ({ row }) => {
          return row.getValue("widgetType")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          id: 'tableActionListCell1',
          enableHiding: false,cell: ({ row }) => {
          const rowData = row.original;

return (
<IGRPDataTableRowAction>
  <IGRPDataTableDropdownMenu
  items={
    [
      {
        component: IGRPDataTableDropdownMenuCustom,
        props: {
          labelTrigger: `Configurar Widget`,icon: `Settings2`,          showIcon: true,          action: () => {setOpenConfig(!openConfig); setCurrentWidget(rowData)

},
}
      },
      {
        component: IGRPDataTableDropdownMenuAlert,
        props: {
          modalTitle: `Eliminar`,labelTrigger: `Eliminar`,icon: `Trash`,          showIcon: true,showCancel: true,labelCancel: `Cancel`,variantCancel: `outline`,showConfirm: true,labelConfirm: `Confirm`,variantConfirm: `default`,          onClickConfirm: () => {handleDeleteWidget(rowData.widgetType);},
          children: <>Deseja confirmar essa operaçāo?</>
}
      },
]
  }
>
</IGRPDataTableDropdownMenu>
</IGRPDataTableRowAction>
);
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
]
  }
  clientFilters={
    [
    ]
  }
  
  data={ contentTabletable1 }
/>
            <ConfigurarWidgets  open={ openConfig } widget={ currentWidget } map={ initialData }  setOpen={ ()=>{setOpenConfig(!openConfig)
} } ></ConfigurarWidgets>
</>),
        },
        {
          value: `outros`,
          label: `Outros`,
          icon: `Settings`,
content: (<>
            <div className={ cn('grid','grid-cols-1 ',' gap-4',)}    >
	<IGRPSwitch
  name={ `showHeader` }
  label={ `Show Header` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `showLayers` }
  label={ `Show Zoom` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `showZoom` }
  label={ `Show Layers` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `showLocation` }
  label={ `Show Home` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `showHome` }
  label={ `Show Location` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `showFullscreen` }
  label={ `Show Fullscreen` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `showWidgets` }
  label={ `Show Widgets` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `showScale` }
  label={ `Show Scale` }
gridSize={ `full` }


  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch></div>
</>),
        },
]
  }
/>
</>
</IGRPForm></div>
  );
}