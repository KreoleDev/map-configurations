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
import { 
  IGRPForm,
	IGRPFormList,
	IGRPCombobox,
	IGRPSeparator,
	IGRPInputText,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateWidgetData} from '@/app/(myapp)/hooks/widgets'
import {getDescribeLayer} from '@/app/(myapp)/functions/layers'
import {getDescribeFeatureType} from '@/app/(myapp)/functions/layers'

export default function Widgetsearch({ widget, layerOptions } : { widget: any, layerOptions: any }) {

  
  const form1 = z.object({
    layers: z.array(z.object({ layer: z.string().nonempty(), fields: z.string().optional() })).optional(),
    country: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    layers: [{ layer: undefined, fields: undefined }],
    country: undefined
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [formListlayersDefault, setFormListlayersDefault] = useState<any>({});
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  
const [currentMapLayer, setCurrentMapLayer] = useState<string>('');

const { igrpToast } = useIGRPToast()

async function handleSubmit (values: z.infer<any>): Promise<void  | undefined> {

  try {
  const data = {widget,...values}
  const response = await createOrUpdateWidgetData(data);
  igrpToast({
    title: 'Sucesso',
    description: 'Configuração adicionado com sucesso',
    type: 'success',
  });
} catch (error: any) {
  igrpToast({
    title: 'Erro',
    description: `Ocorreu um erro ao processar o formulário. [${error.message}]`,
    type: 'error',
  });
  console.log(error);
}

}

useEffect(() => {
  setSelectcombobox1Options(layerOptions||[])
},[])


useEffect(() => {
  
   if (currentMapLayer) {
    getDescribeFeatureType(currentMapLayer).then((response) => {
      setSelectcombobox2Options(response)
    })
  }

},[currentMapLayer])


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
  <IGRPFormList
  id={ `formlist_ttyaxu` }
  name={ `layers` }
  label={ `Map Layer` }
  color={ `primary` }
  variant={ `solid` }
  addButtonLabel={ `Add` }
  addButtonIconName={ `Plus` }
  dot={ true }
  badgeValue={ `Obrigatório` }
renderItem={ (_: any, index: number) => (
      <>
        <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-2 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `layers.${index}.combobox1` }
  label={ `Map Layer` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ (value) => {setCurrentMapLayer(value as string)
} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `layers.${index}.combobox2` }
  label={ `Atributos` }
variant={ `multiple` }
placeholder={ `Select an option...` }
required={ false }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectcombobox2Options }
>
</IGRPCombobox></div>
</>
    )
  }
  computeLabel={
    (item: any, index: number) => `Item ${index}`
  }
  className={ cn('gap-3',) }
  
  defaultItem={ formListlayersDefault }
>
</IGRPFormList>

  <IGRPSeparator
  name={ `separator1` }
  orientation={ `horizontal` }


  className={ cn('my-3',) }
  
  
>
</IGRPSeparator>
  <IGRPInputText
  name={ `country` }
  label={ `Pesquisar Default [Openstreet]` }
showIcon={ false }
required={ false }


placeholder={ `Definir enquandramento ex: [CV]` }
  className={ cn() }
  
  
>
</IGRPInputText>
  <div className={ cn('flex','flex flex-row flex-nowrap items-stretch justify-end gap-2',)}    >
	<IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Save` }

  className={ cn() }
  onClick={ () => formform1Ref.current?.submit() }
  
>
  Gravar
</IGRPButton></div>
</>
</IGRPForm></div>
  );
}