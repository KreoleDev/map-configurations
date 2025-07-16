'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPHeadline,
	IGRPInputText,
	IGRPTextarea,
	IGRPCombobox,
	IGRPSwitch,
	IGRPText 
} from "@igrp/igrp-framework-react-design-system";

export default function Mapform({  } : {  }) {

  
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<     >
	<div className={ cn('grid grid grid-cols-2 grid-rows-1 gap-2 justify-items-stretch items-start','overflow-visible',)}    >
	<div className={ cn('pt-6 pr-6 pb-6 pl-6 px-6 py-6','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline1` }
  title={ `Informações Básicas` }
description={ undefined }
variant={ `h4` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }

  className={ cn('','mb-4',) }
  
  
>
</IGRPHeadline>
<IGRPInputText
  name={ `inputText1` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do mapa` }
  className={ cn('','mb-4',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
<IGRPTextarea
  name={ `inputTextarea1` }
  
label={ `Descrição` }
rows={ 3 }
required={ false }


placeholder={ `Descrição do mapa` }
  className={ cn('','mt-',) }
  onChange={ () => {} }
  
>
</IGRPTextarea>
<div className={ cn('mt-4 mb-6',)}    >
	<IGRPCombobox
  name={ `combobox1` }
  label={ `Basemap` }
variant={ `single` }
placeholder={ `Seletione uma opção` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('','',) }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox></div>
<IGRPSwitch
  name={ `switch1` }
  label={ `Mapa ativo` }
gridSize={ `full` }

  className={ cn('','',) }
  

  
>
</IGRPSwitch></div>
<div className={ cn('block','pt-6 pr-6 pb-6 pl-6 px-6 py-6','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline2` }
  title={ `Centro do Mapa` }
description={ undefined }
variant={ `h4` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }

  className={ cn('','mb-4',) }
  
  
>
</IGRPHeadline>
<div className={ cn('border-0 border-solid border-[#D3D3D3]',)}    >
	<IGRPCombobox
  name={ `combobox2` }
  label={ `Usar Enquadramento Existente` }
variant={ `single` }
placeholder={ `Selecione um enquadramento` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn() }
  onChange={ () => {} }
  options={ selectcombobox2Options }
>
</IGRPCombobox></div>
<IGRPText
  name={ `text3` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `center` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','mt-3 mb-3 my-3',) }
  
  
>
  ou configure manualmente
</IGRPText>
<div className={ cn('grid grid grid-cols-3 grid-rows-1 gap-2 justify-items-stretch items-start',)}    >
	<IGRPInputText
  name={ `inputText4` }
  label={ `Latitude` }
showIcon={ false }
required={ false }


placeholder={ -23.55505 }
  className={ cn() }
  onChange={ () => {} }
  
>
</IGRPInputText>
<IGRPInputText
  name={ `inputText2` }
  label={ `Longitude` }
showIcon={ false }
required={ false }


placeholder={ -46.765 }
  className={ cn() }
  onChange={ () => {} }
  
>
</IGRPInputText>
<IGRPInputText
  name={ `inputText3` }
  label={ `Zoom` }
showIcon={ false }
required={ false }


placeholder={ 12 }
  className={ cn() }
  onChange={ () => {} }
  
>
</IGRPInputText></div>
<IGRPHeadline
  name={ `headline4` }
  title={ `Configurações do Mapa` }
description={ undefined }
variant={ `h4` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }

  className={ cn('','block','pt-4',) }
  
  
>
</IGRPHeadline>
<div className={ cn('grid grid grid-cols-3 grid-rows-2 gap-3 justify-items-stretch items-stretch','mt-4',)}    >
	<IGRPSwitch
  name={ `switch2` }
  label={ `Tela Cheia` }
gridSize={ `full` }

  className={ cn() }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch4` }
  label={ `Escala` }
gridSize={ `full` }

  className={ cn() }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch5` }
  label={ `Controles de Zoom` }
gridSize={ `full` }

  className={ cn() }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch6` }
  label={ `Localização` }
gridSize={ `full` }

  className={ cn() }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch7` }
  label={ `Painel de Camadas` }
gridSize={ `full` }

  className={ cn() }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch3` }
  label={ `Painel de Widgets` }
gridSize={ `full` }

  className={ cn() }
  

  
>
</IGRPSwitch></div></div></div></></div>
  );
}