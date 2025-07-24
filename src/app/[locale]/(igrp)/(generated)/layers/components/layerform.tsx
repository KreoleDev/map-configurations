'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "@igrp/igrp-framework-react-design-system"
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPForm,
	IGRPCard,
	IGRPCardHeader,
	IGRPCardContent,
	IGRPInputText,
	IGRPCombobox,
	IGRPSwitch,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateLayer} from '@/app/[locale]/(myapp)/functions/layers'
import {useLayersConfiguration} from '@/app/[locale]/(myapp)/functions/layers'
import { useRouter } from "next/navigation"

export default function Layerform({ initialData, isSubmitting, onAfterSubmit } : { initialData?: any, isSubmitting: boolean, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    geomType: z.string().optional(),
    url: z.string().optional(),
    nameType: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    name: ``,
    type: ``,
    geomType: ``,
    url: ``,
    nameType: ``
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selecttypeOptions, setSelecttypeOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectgeomTypeOptions, setSelectgeomTypeOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

async function handleSubmit (values: z.infer<any>): Promise<void  | undefined> {

  try {
  const data = { ...initialData, ...values, status: 'A' }

  await createOrUpdateLayer(data);
  igrpToast({
    title: 'Sucesso',
    description: data.uuid ? 'Layer atualizado com sucesso' : 'Layer gravado com sucesso',
    type: 'success',
  });
  router.push('/layers');
} catch (error: any) {
  igrpToast({
    title: 'Erro',
    description: `Ocorreu um erro ao processar o formulário. [${error.message}]`,
    type: 'error',
  });
  console.log(error);
}

}


const router = useRouter()
const { geometryTypeOptions, layersTypeOptions } = useLayersConfiguration();
useEffect(() => {
  setSelecttypeOptions(layersTypeOptions || [])
  setSelectgeomTypeOptions(geometryTypeOptions || [])

}, [])

useEffect(() => {
  if (initialData)
    setForm1Data(initialData)
}, [initialData])

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
  <IGRPCard
  name={ `card1` }
  
  className={ cn('',) }
  
  
>
  <IGRPCardHeader
  className={ cn('',) }
  
>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3','grid grid grid-cols-2 grid-rows-1 gap-3 justify-items-stretch items-start',) }
  
>
  <IGRPInputText
  name={ `name` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do layer` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPCombobox
  name={ `type` }
  label={ `Tipo` }
variant={ `single` }
placeholder={ `Selecione um tipo` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  
  options={ selecttypeOptions }
>
</IGRPCombobox>
  <IGRPCombobox
  name={ `geomType` }
  label={ `Tipo de Geometria` }
variant={ `single` }
placeholder={ `Selecione um tipo de geometria...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  
  options={ selectgeomTypeOptions }
>
</IGRPCombobox>
  <IGRPInputText
  name={ `url` }
  label={ `URL` }
showIcon={ false }
required={ true }


placeholder={ `URL do layer` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `nameType` }
  label={ `Nome do Serviço` }
showIcon={ false }
required={ true }


placeholder={ `Nome do serviço...` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPSwitch
  name={ `switch2` }
  label={ `Layer Editável` }
gridSize={ `full` }

  className={ cn('',) }
  
  
>
</IGRPSwitch>
  <IGRPSwitch
  name={ `switch1` }
  label={ `Estado` }
gridSize={ `full` }

  className={ cn('',) }
  
  
>
</IGRPSwitch>
</IGRPCardContent>
  <IGRPCardFooter
  className={ cn() }
  
>
</IGRPCardFooter>
</IGRPCard>
</>
</IGRPForm></div>
  );
}