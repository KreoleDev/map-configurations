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
	IGRPFormList,
	IGRPInputNumber,
	IGRPButton,
	IGRPInputHidden 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateMap} from '@/app/[locale]/(myapp)/functions/maps'
import {useMapConfiguration} from '@/app/[locale]/(myapp)/hooks/maps'

export default function Mapform({ initialData, isSubmitting, onAfterSubmit } : { initialData?: any, isSubmitting: boolean, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    name: z.string().optional(),
    codigo: z.string().optional(),
    description: z.string().optional(),
    combobox1: z.string().optional(),
    combobox2: z.string().optional(),
    inputText4: z.string().optional(),
    inputText2: z.string().optional(),
    inputText3: z.string().optional(),
    layers: z.array(z.object({ layerId: z.string().optional(), visible: z.string().optional(), groupId: z.string().optional(), order: z.string().optional() })).optional(),
    widgets: z.array(z.object({ widgetId: z.string().optional(), order: z.string().optional(), inputHidden1: z.string().optional() })).optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    name: ``,
    codigo: ``,
    description: ``,
    combobox1: ``,
    combobox2: ``,
    inputText4: ``,
    inputText2: ``,
    inputText3: ``,
    layers: [{ layerId: ``, visible: ``, groupId: ``, order: `` }],
    widgets: [{ widgetId: ``, order: ``, inputHidden1: `` }]
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  const [formListlayersDefault, setFormListlayersDefault] = useState<any>({});
  const [selectcombobox4Options, setSelectcombobox4Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox3Options, setSelectcombobox3Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox5Options, setSelectcombobox5Options] = useState<IGRPOptionsProps[]>([]);
  const [formListwidgetsDefault, setFormListwidgetsDefault] = useState<any>({});
  const [selectcombobox6Options, setSelectcombobox6Options] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

async function handleSubmit (values: z.infer<any>): Promise<void  | undefined> {

  try {
      await createOrUpdateMap(values);
      igrpToast({
        title: 'Sucesso',
        description: values.uuid ? 'Mapa atualizado com sucesso' : 'Mapa gravado com sucesso',
        type: 'success',
      });
    } catch (error: any) {
      igrpToast({
        title: 'Erro',
        description: `Ocorreu um erro ao processar o formulário. [${error.message}]`,
        type: 'error',
      });
      console.log(error);
    }

}

const {isLoading,basemapsOptions, widgetsOptions, layersOptions, visibilityOptions}= useMapConfiguration();
useEffect(() => {
  if(isLoading)return
  setSelectcombobox4Options(layersOptions || [])
  setSelectcombobox3Options(visibilityOptions||[])
  setSelectcombobox1Options(basemapsOptions||[]) 
setSelectcombobox6Options(widgetsOptions||[])

},[isLoading])

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
  name={ `name` }
  label={ `Nome` }
showIcon={ false }
required={ true }


placeholder={ `Nome do mapa` }
  className={ cn('','col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputText
  name={ `codigo` }
  label={ `Codigo` }
showIcon={ false }
required={ true }


placeholder={ `Codigo do mapa` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  
>
</IGRPInputText>
<IGRPTextarea
  name={ `description` }
  
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
  label={ `Basemap Inicial` }
variant={ `single` }
placeholder={ `Selecione uma opção` }
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
  name={ `layers` }
  label={ `Layers` }
  color={ `primary` }
  variant={ `solid` }
  addButtonLabel={ `Add` }
  addButtonIconName={ `Plus` }
  dot={ true }
  badgeValue={ `Obrigatório` }
renderItem={ (_: any, index: number) => (
      <>
        <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `layers.${index}.combobox4` }
  label={ `Layer` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  onChange={ () => {} }
  options={ selectcombobox4Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `layers.${index}.combobox3` }
  label={ `Visivel` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  onChange={ () => {} }
  options={ selectcombobox3Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `layers.${index}.combobox5` }
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
</IGRPCombobox>
<IGRPInputNumber
  name={ `layers.${index}.inputNumber2` }
  label={ `Order` }

max={ 9999999 }
step={ 1 }
required={ false }


  onChange={ () => {} }
  
>
</IGRPInputNumber></div>
</>
    )
  }
  computeLabel={
    (item: any, index: number) => `Item ${index}`
  }
  
  defaultItem={ formListlayersDefault }
>
</IGRPFormList>

</>),
        },
        {
          value: `widgets`,
          label: `Widgets`,
          icon: `LocationEdit`,
content: (<>
            <IGRPFormList
  id={ `formlist_9aigjs` }
  name={ `widgets` }
  label={ `Widgets` }
  color={ `primary` }
  variant={ `solid` }
  addButtonLabel={ `Add` }
  addButtonIconName={ `Plus` }
  dot={ true }
  badgeValue={ `Obrigatório` }
renderItem={ (_: any, index: number) => (
      <>
        <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `widgets.${index}.combobox6` }
  label={ `Widget` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  onChange={ () => {} }
  options={ selectcombobox6Options }
>
</IGRPCombobox>
<IGRPInputNumber
  name={ `widgets.${index}.inputNumber1` }
  label={ `Order` }

max={ 9999999 }
step={ 1 }
required={ false }


  onChange={ () => {} }
  
>
</IGRPInputNumber>
<IGRPButton
  name={ `widgets.${index}.button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Settings` }

  onClick={ () => {} }
  
>
  Configurar
</IGRPButton>
<IGRPInputHidden
  name={ `widgets.${index}.inputHidden1` }
  label={ `ID` }
required={ false }


  
  
>
</IGRPInputHidden></div>
</>
    )
  }
  computeLabel={
    (item: any, index: number) => `Item ${index}`
  }
  
  defaultItem={ formListwidgetsDefault }
>
</IGRPFormList>

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
  label={ `Painel de Layers` }
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