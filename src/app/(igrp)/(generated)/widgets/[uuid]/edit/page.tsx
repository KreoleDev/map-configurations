'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import Widgets from '@/app/(igrp)/(generated)/widgets/components/widgets'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useWidgets} from '@/app/(myapp)/hooks/widgets'
import {useDetailWidget} from '@/app/(myapp)/hooks/widgets'


export default function PageEditwidgetsComponent({ params } : { params: Promise<{ uuid: string }> } ) {

  const { uuid } = use(params);

  
  
  
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

const { igrpToast } = useIGRPToast()

const {data, isLoading} = useDetailWidget(uuid);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Editar Widget` }
  iconBackButton={ `ArrowLeft` }
  showBackButton={ true }
  urlBackButton={ `/widgets` }
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
  onClick={ ()=>setIsSubmitting(!isSubmitting) }
  
>
  Editar Widget
</IGRPButton>
</div>
</IGRPPageHeader>

<Widgets  initialData={ data } isSubmitting={ isSubmitting }  onAfterSubmit={ ()=>setIsSubmitting(!isSubmitting)
 } ></Widgets></div></div>
  );
}
