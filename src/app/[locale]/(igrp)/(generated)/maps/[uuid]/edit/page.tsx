'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import MapForm from '@/app/[locale]/(igrp)/(generated)/maps/components/mapform'
import Group from '@/app/[locale]/(igrp)/(generated)/maps/components/group'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useDetailMap} from '@/app/[locale]/(myapp)/hooks/maps'


export default function PageEditComponent({ params } : { params: Promise<{ uuid: string }> } ) {

  const { uuid } = use(params);

  
  
  
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

const [openGroup, setOpenGroup] = useState<boolean>(false);

const { igrpToast } = useIGRPToast()

const {data, isLoading} = useDetailMap(uuid);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Editar Mapa` }
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
showIcon={ false }
iconName={ `Layers2` }

  className={ cn() }
  onClick={ () => {setOpenGroup(!openGroup)
} }
  
>
  Grupo
</IGRPButton>
    <IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Pencil` }

  className={ cn() }
  onClick={ ()=>setIsSubmitting(!isSubmitting) }
  
>
  Editar Mapa
</IGRPButton>
</div>
</IGRPPageHeader>

<MapForm  initialData={ data } isSubmitting={ isSubmitting }  onAfterSubmit={ ()=>setIsSubmitting(!isSubmitting) } ></MapForm></div>
<Group  open={ openGroup }  setOpen={ setOpenGroup
 } ></Group></div>
  );
}
