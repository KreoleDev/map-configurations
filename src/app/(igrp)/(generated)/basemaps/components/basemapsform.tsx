'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "zod"
import { 
  IGRPForm,
	IGRPCard,
	IGRPCardHeader,
	IGRPCardContent,
	IGRPInputText,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateBasemap} from '@/app/(myapp)/functions/basemaps'
import { useRouter } from "next/navigation"

export default function Basemapsform({ initialData, isSubmitting, onAfterSubmit } : { initialData?: any, isSubmitting: boolean, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    name: z.string().nonempty(),
    link: z.string().nonempty()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    name: undefined,
    link: undefined
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  
const { igrpToast } = useIGRPToast()

async function handleSubmit (values: z.infer<any>): Promise<void  | undefined> {

  const data = { ...initialData, ...values };
try {
  await createOrUpdateBasemap(data);
  igrpToast({
    title: 'Sucesso',
    description: values.uuid
      ? 'Basemap atualizado com sucesso'
      : 'Basemap gravado com sucesso',
    type: 'success',
  });
  router.push('/basemaps');
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
  
  className={ cn('','block',) }
  
  
>
  <IGRPCardHeader
  className={ cn() }
  
>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3','grid grid grid-cols-3 grid-rows-1 gap-3 justify-items-stretch items-start','',) }
  
>
  <IGRPInputText
  name={ `name` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do basemap` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `link` }
  label={ `Link` }
showIcon={ false }
required={ true }


placeholder={ `Link do basemap` }
  className={ cn('',) }
  
  
>
</IGRPInputText>
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