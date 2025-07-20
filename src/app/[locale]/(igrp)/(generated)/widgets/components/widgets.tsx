'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "@igrp/igrp-framework-react-design-system"
import { 
  IGRPForm,
	IGRPCard,
	IGRPCardHeader,
	IGRPCardContent,
	IGRPInputText,
	IGRPIcon,
	IGRPSwitch,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";

export default function Widgets({  } : {  }) {

  const formform1Ref = useRef<IGRPFormHandle<anyZodType> | null>(null);
  const [contentFormform1, setContentFormform1] = useState<z.infer<anyZodType>>(null);
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<IGRPForm
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  onSubmit={ (e) => {} }
  defaultValues={ contentFormform1 }
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
  name={ `inputText1` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do widget` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `inputText2` }
  label={ `Código` }
showIcon={ false }
required={ false }


placeholder={ `Código do widget` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `inputText3` }
  label={ `Pagina` }
showIcon={ false }
required={ true }


placeholder={ `Número da página` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
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