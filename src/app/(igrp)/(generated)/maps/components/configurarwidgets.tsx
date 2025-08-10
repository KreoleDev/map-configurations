'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPModalDialogDescription,
	IGRPModalDialogFooter,
	IGRPModalDialogClose,
	IGRPButton,
	IGRPModalDialogTrigger 
} from "@igrp/igrp-framework-react-design-system";

export default function Configurarwidgets({  } : {  }) {

  
  
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<IGRPModalDialog
  
  
>
  <IGRPModalDialogContent
  size={ `md` }
  
  
>
  <IGRPModalDialogHeader
  
  
>
  <IGRPModalDialogTitle
  name={ `modalDialogTitle1` }
  

  
  
>
  Configurar Widget
</IGRPModalDialogTitle>
  <IGRPModalDialogDescription
  name={ `modalDialogDescription1` }
  

  
  
>
  Adicionar mais informações sobre o widget
</IGRPModalDialogDescription>
</IGRPModalDialogHeader>
  <     ></>
  <IGRPModalDialogFooter
  
  
>
  <IGRPModalDialogClose
  name={ `modalDialogClose1` }
  

  onClick={ () => {} }
  
>
  Fechar
</IGRPModalDialogClose>
  <IGRPButton
  name={ `button2` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Save` }

  onClick={ () => {} }
  
>
  Salvar
</IGRPButton>
</IGRPModalDialogFooter>
</IGRPModalDialogContent>
  <IGRPModalDialogTrigger
  name={ `modalDialogTrigger1` }
  variant={ `default` }
size={ `default` }


  onClick={ () => {} }
  
>
  <IGRPButton
  name={ `button1` }
  
variant={ `outline` }
size={ `default` }
showIcon={ true }
iconName={ `Settings` }

  onClick={ () => {} }
  
>
  Configurar
</IGRPButton>
</IGRPModalDialogTrigger>
</IGRPModalDialog></div>
  );
}