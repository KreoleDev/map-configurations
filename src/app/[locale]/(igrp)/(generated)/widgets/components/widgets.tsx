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
	IGRPTextarea,
	IGRPCombobox,
	IGRPSwitch,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";

export default function Widgets({  } : {  }) {

  
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<     >
	<div className={ cn()}    >
	<IGRPCard
  name={ `card1` }
  
  className={ cn() }
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline1` }
  title={ `Informação Básica` }
description={ undefined }
variant={ `h4` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }

  className={ cn('','pt-6',) }
  
  
>
</IGRPHeadline>
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
  <IGRPTextarea
  name={ `inputTextarea1` }
  
label={ `ToolTip` }
rows={ 3 }
required={ false }


helperText={ undefined }
placeholder={ `Descrição do widget` }
  className={ cn('',) }
  onChange={ () => {} }
  
>
</IGRPTextarea>
  <IGRPCombobox
  name={ `combobox1` }
  label={ `Posição` }
variant={ `single` }
placeholder={ `Selecione uma posição...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
  <IGRPCombobox
  name={ `combobox2` }
  label={ `ícone` }
variant={ `single` }
placeholder={ `Selecione um ícone...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('',) }
  onChange={ () => {} }
  options={ selectcombobox2Options }
>
</IGRPCombobox>
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
</IGRPCard></div></></div>
  );
}