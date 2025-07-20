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
import {useLayersConfiguration} from '@/app/[locale]/(myapp)/functions/layers'

export default function Layerform({  } : {  }) {

  
  const form1 = z.object({
    inputText1: z.string().optional(),
    inputText4: z.string().optional(),
    combobox1: z.string().optional(),
    inputText3: z.string().optional(),
    geomType: z.string().optional(),
    inputText2: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    inputText1: ``,
    inputText4: ``,
    combobox1: ``,
    inputText3: ``,
    geomType: ``,
    inputText2: ``
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectgeomTypeOptions, setSelectgeomTypeOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

const { geometryTypeOptions, layersTypeOptions } = useLayersConfiguration();
useEffect(() => {
  setSelectcombobox1Options(layersTypeOptions || [])
  setSelectgeomTypeOptions(geometryTypeOptions || [])

}, [])


  return (
<div className={ cn('component',)}    >
	<IGRPForm
  schema={ form1 }
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  className={ cn() }
  onSubmit={ (e) => {} }
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
  name={ `inputText1` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome da camada` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `inputText4` }
  label={ `Código` }
showIcon={ false }
required={ false }


placeholder={ `Código da camada` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPCombobox
  name={ `combobox1` }
  label={ `Tipo` }
variant={ `single` }
placeholder={ `Selecione um tipo` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
  <IGRPInputText
  name={ `inputText3` }
  label={ `Nome do tipo` }
showIcon={ false }
required={ false }


placeholder={ `Nome do tipo...` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPCombobox
  name={ `geomType` }
  label={ `Tipo de Geometria` }
variant={ `single` }
placeholder={ `Selecione um tipo de geometria...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  onChange={ () => {} }
  options={ selectgeomTypeOptions }
>
</IGRPCombobox>
  <IGRPInputText
  name={ `inputText2` }
  label={ `URL` }
showIcon={ false }
required={ false }


placeholder={ `URL da camda` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPSwitch
  name={ `switch1` }
  label={ `Estado da Camda` }
gridSize={ `full` }

  className={ cn('',) }
  

  
>
</IGRPSwitch>
  <IGRPSwitch
  name={ `switch2` }
  label={ `Camada Editável` }
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