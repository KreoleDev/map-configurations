'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import WidgetSearch from '@/app/(igrp)/(generated)/widgets/components/widgetsearch'
import WidgetEdicao from '@/app/(igrp)/(generated)/widgets/components/widgetedicao'
import { 
  IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPModalDialogDescription,
	IGRPText,
	IGRPModalDialogTrigger 
} from "@igrp/igrp-framework-react-design-system";

export default function Configurarwidgets({ open, setOpen, widget, map } : { open: boolean, setOpen: (prompt: boolean) => void, widget: any, map: any }) {

  
  
  
const [modalDialogTitle1Content, setModalDialogTitle1Content] = useState<string>('');

const [layerOptions, setLayerOptions] = useState<any>(undefined);

const { igrpToast } = useIGRPToast()

useEffect(() => {
  if (!widget || !map) return;

  setModalDialogTitle1Content(`Configurar Widget - ${widget.widgetType}`)

  const layers = map.layers.map((layer: any) => ({
    label: layer.name,
    value: layer.uuid,
  }));
  setLayerOptions(layers);

}, [widget, map])

if (!widget) return (<></>)


  return (
<div className={ cn('component',)}    >
	<IGRPModalDialog
  onOpenChange={ setOpen }
  open={ open }
>
  <IGRPModalDialogContent
  size={ `lg` }
  className={ cn() }
  
  
>
  <IGRPModalDialogHeader
  className={ cn('',) }
  
  
>
  <IGRPModalDialogTitle
  name={ `modalDialogTitle1` }
  

  
  
>
  { modalDialogTitle1Content }
</IGRPModalDialogTitle>
  <IGRPModalDialogDescription
  name={ `modalDialogDescription1` }
  

  
  
>
  Adicionar mais informações sobre o widget
</IGRPModalDialogDescription>
</IGRPModalDialogHeader>
  <     >
	{ widget.widgetType !== 'SEARCH' || widget.widgetType !== 'EDIT'  && (<IGRPText
  name={ `text1` }
  
variant={ `warning` }
weight={ `normal` }
size={ `default` }
align={ `center` }
spacing={ `loose` }
maxLines={ 3 }

animate={ true }

  className={ cn('border rounded-lg p-3',) }
  
  
>
  Widget sem configurações adicionais
</IGRPText>)}
{ widget.widgetType === 'SEARCH' && (<     >
	<WidgetSearch  widget={ widget } layerOptions={ layerOptions }   ></WidgetSearch></>)}
{ widget.widgetType === 'EDIT' && (<     >
	<WidgetEdicao  widget={ widget } layerOptions={ layerOptions }   ></WidgetEdicao></>)}</>
</IGRPModalDialogContent>
  <IGRPModalDialogTrigger
  name={ `modalDialogTrigger1` }
  variant={ `default` }
size={ `default` }


  className={ cn() }
  onClick={ () => {} }
  
>
</IGRPModalDialogTrigger>
</IGRPModalDialog></div>
  );
}