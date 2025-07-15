'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPPageHeader,
	IGRPHeadline,
	IGRPText 
} from "@igrp/igrp-framework-react-design-system";


export default function PageAddnewmapsComponent() {


  
  
  

  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Novo Mapa` }
  description={ `Crie um novo mapa configurando suas propriedades básicas, centro e funcionalidades.` }
  iconBackButton={ `AlarmClockOff` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
</div>
</IGRPPageHeader>

<div className={ cn('mr-5 ml-5 mx-5','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline1` }
  title={ `Templates de Mapa` }
description={ `Escolha um template pré-configurado para começar rapidamente` }
variant={ `h5` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Zap` }
iconPlacement={ `start` }
iconSize={ 20 }

  className={ cn('','mt-6 ml-5',) }
  
  
>
</IGRPHeadline>
<div className={ cn('block','mt-6 mr-5 mb-6 ml-5 mx-5 my-6','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<div className={ cn('grid grid grid-cols-2 grid-rows-1 gap-2 justify-items-stretch items-start','mr-5 ml-5 mx-5','overflow-visibleborder border-solid border-[#D3D3D3] rounded-xl',)}    >
	<div className={ cn('mt-6 mb-6 my-6 pr-50%','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline2` }
  title={ `Mapa Básico` }
description={ `Configuração simples para visualização geral` }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Map` }

  className={ cn('','ml-5',) }
  
  
>
</IGRPHeadline>
<div className={ cn('flex flex-row flex-nowrap items-stretch justify-start gap-2','mt-3 ml-10 pr-10',)}    >
	<IGRPText
  name={ `text3` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Controles básicos
</IGRPText>
<IGRPText
  name={ `text2` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','overflow-visible','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Painel de camadas
</IGRPText>
<IGRPText
  name={ `text4` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','flex flex-row flex-nowrap items-stretch justify-start gap-2','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Escala
</IGRPText></div>
<div className={ cn('ml-10',)}    >
	<IGRPText
  name={ `text6` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

truncate={ false }
  className={ cn('','mb--16',) }
  
  
>
  Centro: -3,55 , -5.44
</IGRPText>
<IGRPText
  name={ `text7` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn() }
  
  
>
  Zoom: 10
</IGRPText></div></div>
<div className={ cn('mt-6 mb-6 my-6','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline3` }
  title={ `Mapa de Análise` }
description={ `Ideal para análises detalhadas com widgets` }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Layers` }

  className={ cn('','ml-5',) }
  
  
>
</IGRPHeadline>
<div className={ cn('flex flex-row flex-nowrap items-stretch justify-start gap-2','mt-3 ml-10',)}    >
	<IGRPText
  name={ `text5` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','block','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Todos os controles
</IGRPText>
<IGRPText
  name={ `text8` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Widgets
</IGRPText>
<IGRPText
  name={ `text16` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Localização
</IGRPText>
<IGRPText
  name={ `text17` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Análise  avançada
</IGRPText></div>
<div className={ cn('mt- mb- ml-10 my-',)}    >
	<IGRPText
  name={ `text21` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','mb--16',) }
  
  
>
  Centro: -333, -555
</IGRPText>
<IGRPText
  name={ `text20` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn() }
  
  
>
  Zoom: 32
</IGRPText></div></div></div>
<div className={ cn('grid grid grid-cols-2 grid-rows-1 gap-2 justify-items-stretch items-start','mr-5 ml-5 mx-5',)}    >
	<div className={ cn('mb-6','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline4` }
  title={ `Mapa de Apresentação` }
description={ `Interface limpa para apresentações` }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Globe` }

  className={ cn('','ml-5',) }
  
  
>
</IGRPHeadline>
<div className={ cn('flex flex-row flex-nowrap items-stretch justify-start gap-2','mt-3 mb- ml-10 pr-10',)}    >
	<IGRPText
  name={ `text1` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Interface limpa
</IGRPText>
<IGRPText
  name={ `text9` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','mr- pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Tela cheia
</IGRPText>
<IGRPText
  name={ `text10` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Sem distrações
</IGRPText></div>
<div className={ cn('mt--4 ml-10',)}    >
	<IGRPText
  name={ `text12` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 2 }

  className={ cn('','mb--16',) }
  
  
>
  Centro: 3,55,  -5,98
</IGRPText>
<IGRPText
  name={ `text11` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','mb-',) }
  
  
>
  Zoom: 12
</IGRPText></div></div>
<div className={ cn('mb-6','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline5` }
  title={ `Mapa de Navegação` }
description={ `Focado em navegação e localização` }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Navigation` }

  className={ cn('','ml-5',) }
  
  
>
</IGRPHeadline>
<div className={ cn('flex flex-row flex-nowrap items-stretch justify-start gap-2','mt-3 ml-10',)}    >
	<IGRPText
  name={ `text13` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Localização
</IGRPText>
<IGRPText
  name={ `text14` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Navegaçã0
</IGRPText>
<IGRPText
  name={ `text15` }
  
variant={ `primary` }
weight={ `bold` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','pr-2 pl-2 px-2','border border-solid border-[#D3D3D3] rounded-xl',) }
  
  
>
  Widgets úteis
</IGRPText></div>
<div className={ cn('ml-10',)}    >
	<IGRPText
  name={ `text19` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn('','mb--16',) }
  
  
>
  Centro: -444, -444
</IGRPText>
<IGRPText
  name={ `text18` }
  
variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 1 }

  className={ cn() }
  
  
>
  Zoom: 21
</IGRPText></div></div></div></div></div></div></div>
  );
}
