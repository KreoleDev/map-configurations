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
	IGRPIcon,
	IGRPSwitch,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateWidget} from '@/app/[locale]/(myapp)/functions/widgets'

export default function Widgets({ initialData, isSubmitting, onAfterSubmit } : { initialData?: any, isSubmitting: boolean, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    label: z.string().optional(),
    tooltip: z.string().optional(),
    code: z.string().optional(),
    page: z.number().optional(),
    position: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    label: ``,
    tooltip: ``,
    code: ``,
    page: undefined,
    position: `maptools`
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selectpositionOptions, setSelectpositionOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

async function handleSubmit (values: z.infer<any>): Promise<void  | undefined> {

  try {
  const data = {...initialData, ...values}
    await createOrUpdateWidget(data);
  igrpToast({
    title: 'Sucesso',
    description: data.uuid ? 'Widget atualizado com sucesso' : 'Widget gravado com sucesso',
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
  
  className={ cn() }
  
  
>
  <IGRPCardHeader
  
>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3','grid grid grid-cols-3 grid-rows-1 gap-3 justify-items-stretch items-start',) }
  
>
  <IGRPInputText
  name={ `label` }
  label={ `Label` }
showIcon={ false }
required={ true }


placeholder={ `Nome do widget` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `tooltip` }
  label={ `Tooltip` }
showIcon={ false }
required={ true }


  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `code` }
  label={ `Código` }
showIcon={ false }
required={ true }


placeholder={ `Código do widget` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `page` }
  label={ `Pagina` }
showIcon={ false }
required={ false }


placeholder={ `Número da página` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPCombobox
  name={ `position` }
  label={ `Posiçāo` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  onChange={ () => {} }
  options={ selectpositionOptions }
>
</IGRPCombobox>
  <IGRPIcon
  name={ `icon1` }
  iconName={ `Heart` }
size={ 24 }

  className={ cn('',) }
  
  
>
</IGRPIcon>
  <IGRPSwitch
  name={ `switch1` }
  label={ `Estado do Widget` }
gridSize={ `full` }

  className={ cn('',) }
  

  
>
</IGRPSwitch>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>
</IGRPForm></div>
  );
}