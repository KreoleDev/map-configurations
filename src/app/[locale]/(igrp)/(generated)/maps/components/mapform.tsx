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
	IGRPTabs,
	IGRPTabItem,
	IGRPInputText,
	IGRPTextarea,
	IGRPCombobox,
	IGRPSwitch,
	IGRPText,
	IGRPFormList 
} from "@igrp/igrp-framework-react-design-system";

export default function Mapform({  } : {  }) {

  const formform1Ref = useRef<IGRPFormHandle<anyZodType> | null>(null);
  const [contentFormform1, setContentFormform1] = useState<z.infer<anyZodType>>(null);
  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
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
  <IGRPTabs
  variant={ `default` }
  tabContentClassName={ `border-transparent-none border rounded-lg` }
  showIcon={ true }
  iconPlacement={ `start` }
  tabListClassName={ cn() }
  items={
    [
        {
          value: `informacoesBasicas`,
          label: `Informações Básicas`,
          icon: `Map`,
content: (<>
            <div className={ cn('grid','grid-cols-1 ',' gap-4',)}    >
	<IGRPInputText
  name={ `inputText1` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do mapa` }
  className={ cn('','col-span-1','mb-4',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
<IGRPTextarea
  name={ `inputTextarea1` }
  
label={ `Descrição` }
rows={ 3 }
required={ false }


placeholder={ `Descrição do mapa` }
  className={ cn('','col-span-1',) }
  onChange={ () => {} }
  
>
</IGRPTextarea>
<IGRPCombobox
  name={ `combobox1` }
  label={ `Basemap` }
variant={ `single` }
placeholder={ `Seletione uma opção` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('','col-span-1','',) }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
<IGRPSwitch
  name={ `switch1` }
  label={ `Mapa ativo` }
gridSize={ `full` }

  className={ cn('','col-span-1','',) }
  

  
>
</IGRPSwitch></div>
</>),
        },
        {
          value: `enquadramento`,
          label: `Equadramento do Mapa`,
          icon: `ArrowRight`,
content: (<>
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
  name={ `text1` }
  
variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `center` }
spacing={ `normal` }
maxLines={ 3 }


  className={ cn('mt-6',) }
  
  
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
</>),
        },
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
            <div className={ cn('grid','grid-cols-6 ','md:grid-cols-3 ','lg:grid-cols-6 ',' gap-4',)}    >
	<IGRPSwitch
  name={ `switch3` }
  label={ `Painel de Widgets` }
gridSize={ `full` }

  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch2` }
  label={ `Tela Cheia` }
gridSize={ `full` }

  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch4` }
  label={ `Escala` }
gridSize={ `full` }

  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch7` }
  label={ `Painel de Camadas` }
gridSize={ `full` }

  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch5` }
  label={ `Controles de Zoom` }
gridSize={ `full` }

  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch6` }
  label={ `Localização` }
gridSize={ `full` }

  className={ cn('col-span-1',) }
  

  
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