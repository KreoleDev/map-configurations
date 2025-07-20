'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import BasemapsForm from '@/app/[locale]/(igrp)/(generated)/basemaps/components/basemapsform'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useDetailBasemap} from '@/app/[locale]/(myapp)/hooks/basemaps'


export default function PageEditbasemapsComponent({ params } : { params: Promise<{ uuid: string }> } ) {

  const { uuid } = use(params);

  
  
  
const { igrpToast } = useIGRPToast()

const {data, isLoading} = useDetailBasemap(uuid);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Editar Basemap` }
  iconBackButton={ `ArrowLeft` }
  showBackButton={ true }
  urlBackButton={ `/basemaps` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Pencil` }

  className={ cn() }
  onClick={ () => {} }
  
>
  Editar Basemap
</IGRPButton>
</div>
</IGRPPageHeader>

<BasemapsForm  initialData={ data }   ></BasemapsForm></div></div>
  );
}
