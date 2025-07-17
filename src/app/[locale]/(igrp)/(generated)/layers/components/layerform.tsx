'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPCard,
	IGRPCardHeader,
	IGRPHeadline,
	IGRPCardContent,
	IGRPInputText,
	IGRPCombobox,
	IGRPSwitch,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";

export default function Layerform({  } : {  }) {

  
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<     >
	<IGRPCard
  name={ `card1` }
  
  className={ cn('','pt-6',) }
  
  
>
  <IGRPCardHeader
  className={ cn() }
  
>
  <IGRPHeadline
  name={ `headline1` }
  title={ `Informação Básica` }
description={ undefined }
variant={ `h4` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }

  
  
>
</IGRPHeadline>
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
  name={ `combobox2` }
  label={ `Tipo de Geometria` }
variant={ `single` }
placeholder={ `Selecione um tipo de geometria...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  onChange={ () => {} }
  options={ selectcombobox2Options }
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
</IGRPCard></></div>
  );
}