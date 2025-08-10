'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import MapForm from '@/app/(igrp)/(generated)/maps/components/mapform'
import Group from '@/app/(igrp)/(generated)/maps/components/group'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";


export default function PageNewComponent() {


  
  
  
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

const [openGroup, setOpenGroup] = useState<boolean>(false);

const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Novo Mapa` }
  description={ `Crie um novo mapa configurando suas propriedades básicas, centro e funcionalidades.` }
  iconBackButton={ `ArrowLeft` }
  showBackButton={ true }
  urlBackButton={ `/maps` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button2` }
  
variant={ `secondary` }
size={ `default` }
showIcon={ true }
iconName={ `Plus` }

  className={ cn() }
  onClick={ ()=>setOpenGroup(!openGroup)
 }
  
>
  Grupo
</IGRPButton>
    <IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Save` }

  className={ cn() }
  onClick={ ()=>setIsSubmitting(!isSubmitting) }
  
>
  Salvar Mapa
</IGRPButton>
</div>
</IGRPPageHeader>

<MapForm  isSubmitting={ isSubmitting }  onAfterSubmit={ ()=>setIsSubmitting(!isSubmitting) } ></MapForm></div>
<Group  open={ openGroup }  setOpen={ setOpenGroup
 } ></Group></div>
  );
}
