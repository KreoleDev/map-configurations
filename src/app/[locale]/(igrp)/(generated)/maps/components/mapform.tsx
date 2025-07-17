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
	IGRPHeadline,
	IGRPCardContent,
	IGRPInputText,
	IGRPTextarea,
	IGRPCombobox,
	IGRPSwitch,
	IGRPCardFooter,
	IGRPText,
	IGRPTabs,
	IGRPTabItem,
	IGRPFormList 
} from "@igrp/igrp-framework-react-design-system";

export default function Mapform({  } : {  }) {

  const formform1Ref = useRef<IGRPFormHandle<anyZodType> | null>(null);
  const [contentFormform1, setContentFormform1] = useState<z.infer<anyZodType>>(null);
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  const [formListformList1Default, setFormListformList1Default] = useState<any>({});
  const [selectcombobox4Options, setSelectcombobox4Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox3Options, setSelectcombobox3Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox5Options, setSelectcombobox5Options] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<IGRPForm
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  className={ cn() }
  onSubmit={ (e) => {} }
  defaultValues={ contentFormform1 }
>
  <>
  <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-2 ',' gap-4',)}    >
	<div className={ cn('col-span-1 flex flex-col gap-6 ',)}    >
	<IGRPCard
  name={ `card1` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline1` }
  title={ `Informações Básicas` }
description={ undefined }
variant={ `h4` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }


  className={ cn('mt-6',) }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3','grid grid grid-cols-1 grid-rows-1 gap-2 justify-items-stretch items-start',) }
  
>
  <IGRPInputText
  name={ `inputText1` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do mapa` }
  className={ cn('','','mb-4',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPTextarea
  name={ `inputTextarea1` }
  
label={ `Descrição` }
rows={ 3 }
required={ false }


placeholder={ `Descrição do mapa` }
  className={ cn('','',) }
  onChange={ () => {} }
  
>
</IGRPTextarea>
  <IGRPCombobox
  name={ `combobox1` }
  label={ `Basemap` }
variant={ `single` }
placeholder={ `Seletione uma opção` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('','','',) }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
  <IGRPSwitch
  name={ `switch1` }
  label={ `Mapa ativo` }
gridSize={ `full` }

  className={ cn('','','',) }
  

  
>
</IGRPSwitch>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard></div>
<div className={ cn('col-span-1 flex flex-col gap-6 ',)}    >
	<IGRPCard
  name={ `card2` }
  
  className={ cn() }
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline2` }
  title={ `Equadramento do Mapa` }
description={ undefined }
variant={ `h4` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }


  className={ cn('mt-6','mb-4',) }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPCombobox
  name={ `combobox2` }
  label={ `Usar Enquadramento Existente` }
variant={ `single` }
placeholder={ `Selecione um enquadramento` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  onChange={ () => {} }
  options={ selectcombobox2Options }
>
</IGRPCombobox>
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
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard></div></div>
  <IGRPTabs
  variant={ `default` }
  tabContentClassName={ `border-transparent-none border rounded-lg` }
  showIcon={ true }
  iconPlacement={ `start` }
  tabListClassName={ cn() }
  items={
    [
        {
          value: `layers`,
          label: `Layers`,
          icon: `Layers`,
content: (<>
            <IGRPFormList
  id={ `formlist_r6odzx` }
  name={ `formList1` }
  label={ `Layers` }
  color={ `primary` }
  variant={ `solid` }
  addButtonLabel={ `Add` }
  addButtonIconName={ `Plus` }
  badgeValue={ `Form List` }
renderItem={ (_: any, index: number) => (
      <>
        <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `formList1.${index}.combobox4` }
  label={ `Layers` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  onChange={ () => {} }
  options={ selectcombobox4Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `formList1.${index}.combobox3` }
  label={ `Visivel` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  onChange={ () => {} }
  options={ selectcombobox3Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `formList1.${index}.combobox5` }
  label={ `Grupo` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  onChange={ () => {} }
  options={ selectcombobox5Options }
>
</IGRPCombobox></div>
</>
    )
  }
  computeLabel={
    (item: any, index: number) => `Item ${index}`
  }
  
  defaultItem={ formListformList1Default }
>
</IGRPFormList>

</>),
        },
        {
          value: `widgets`,
          label: `Widgets`,
          icon: `LocationEdit`,
content: (<>
</>),
        },
        {
          value: `outros`,
          label: `Outros`,
          icon: `Settings`,
content: (<>
            <div className={ cn('grid grid grid-cols-6 grid-rows-1 gap-2 justify-items-stretch items-start','pt-6 pr-6 pb-6 pl-6 px-6 py-6','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPSwitch
  name={ `switch2` }
  label={ `Tela Cheia` }
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
  name={ `switch3` }
  label={ `Painel de Widgets` }
gridSize={ `full` }

  className={ cn() }
  

  
>
</IGRPSwitch></div>
</>),
        },
]
  }
/>
</>
</IGRPForm></div>
  );
}