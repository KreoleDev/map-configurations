'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPFormList,
	IGRPCombobox,
	IGRPSeparator,
	IGRPInputText 
} from "@igrp/igrp-framework-react-design-system";

export default function Widgetsearch({  } : {  }) {

  
  const [formListformList1Default, setFormListformList1Default] = useState<any>({});
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<IGRPFormList
  id={ `formlist_ttyaxu` }
  name={ `formList1` }
  label={ `Separator List` }
  color={ `primary` }
  variant={ `solid` }
  addButtonLabel={ `Add` }
  addButtonIconName={ `Plus` }
  badgeValue={ `Form List` }
renderItem={ (_: any, index: number) => (
      <>
        <IGRPCombobox
  name={ `formList1.${index}.combobox1` }
  label={ `Map Layer` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn() }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
        <IGRPCombobox
  name={ `formList1.${index}.combobox2` }
  label={ `Atributos` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn() }
  onChange={ () => {} }
  options={ selectcombobox2Options }
>
</IGRPCombobox>
</>
    )
  }
  computeLabel={
    (item: any, index: number) => `Item ${index}`
  }
  className={ cn('gap-3',) }
  
  defaultItem={ formListformList1Default }
>
</IGRPFormList>

<IGRPSeparator
  name={ `separator1` }
  orientation={ `horizontal` }


  className={ cn('my-3',) }
  
  
>
</IGRPSeparator>
<IGRPInputText
  name={ `inputText1` }
  label={ `Pesquisar Default [Country Code]` }
showIcon={ false }
required={ false }


  
  
>
</IGRPInputText></div>
  );
}