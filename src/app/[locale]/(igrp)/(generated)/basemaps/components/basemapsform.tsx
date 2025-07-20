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
	IGRPSwitch,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";

export default function Basemapsform({  } : {  }) {

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
  name={ `inputText1` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do basemap` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `inputText2` }
  label={ `Código` }
showIcon={ false }
required={ false }


placeholder={ `Código do basemap` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `inputText3` }
  label={ `Zoom` }
showIcon={ false }
required={ false }


placeholder={ `Nível do zoom` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `inputText4` }
  label={ `Link` }
showIcon={ false }
required={ false }


placeholder={ `Lind do basemap` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPSwitch
  name={ `switch1` }
  label={ `Estado do basemap` }
gridSize={ `full` }

  className={ cn('','','block','mt-',) }
  

  
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