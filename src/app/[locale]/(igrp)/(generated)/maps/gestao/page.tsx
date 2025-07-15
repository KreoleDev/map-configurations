'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPHeadline,
	IGRPDataTable,
	IGRPDataTableRowAction 
} from "@igrp/igrp-framework-react-design-system";
import { useRouter } from "next/navigation";


export default function PageMapsComponent() {


  const [contentTabletable1, setContentTabletable1] = useState<any[]>([]);
  
  

  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<div className={ cn('flex flex-row flex-nowrap items-stretch justify-between gap-2',)}    >
	<div className={ cn()}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Gestão de Mapas` }
  description={ `Configure mapas, associe camadas e widgets, e gerencie as configurações de visualização.` }
  iconBackButton={ `Search` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
</div>
</IGRPPageHeader>
</div>
<IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Plus` }

  className={ cn() }
  
  
>
  Novo Mapa
</IGRPButton></div>
<div className={ cn('mr-5 ml-5 mx-5','border border-solid border-[#D3D3D3] rounded-xl',)}    >
	<IGRPHeadline
  name={ `headline1` }
  title={ `Configurações de Mapa` }
description={ undefined }
variant={ `h5` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Map` }
iconPlacement={ `start` }
iconSize={ 20 }

  className={ cn('','mt-6 mb-6 ml-5 my-6',) }
  
  
>
</IGRPHeadline>
<IGRPDataTable<any, any>
  className={ cn('','mr-8 mb-8 ml-8 mx-8','border-0 border-solid border-[#FFFFFf] rounded-bottoml-[7px]',) }
  columns={
    [
        {
          header: 'Nome'
,accessorKey: 'tableTextCell1',
          cell: ({ row }) => {
          return row.getValue("tableTextCell1")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'UUID'
,accessorKey: 'tableTextCell2',
          cell: ({ row }) => {
          return row.getValue("tableTextCell2")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Centro'
,accessorKey: 'tableTextCell3',
          cell: ({ row }) => {
          return row.getValue("tableTextCell3")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Status'
,accessorKey: 'tableTextCell4',
          cell: ({ row }) => {
          return row.getValue("tableTextCell4")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Criado em'
,accessorKey: 'tableTextCell5',
          cell: ({ row }) => {
          return row.getValue("tableTextCell5")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Ações'
,accessorKey: 'tableActionListCell1',
          enableHiding: false,cell: ({ row }) => {
          const rowData = row.original;

return (
<IGRPDataTableRowAction>
</IGRPDataTableRowAction>
);
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
]
  }
  clientFilters={
    [
    ]
  }
  
  data={ contentTabletable1 }
/></div></div></div>
  );
}
