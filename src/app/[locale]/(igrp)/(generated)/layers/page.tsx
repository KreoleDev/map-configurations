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
	IGRPInputSearch,
	IGRPDataTable,
	IGRPDataTableCellBadge,
	IGRPDataTableRowAction,
	IGRPDataTableDropdownMenu,
	IGRPDataTableDropdownMenuLink,
	IGRPDataTableDropdownMenuAlert 
} from "@igrp/igrp-framework-react-design-system";
import {deleteLayer} from '@/app/[locale]/(myapp)/functions/layers'
import {useLayers} from '@/app/[locale]/(myapp)/hooks/layers'
import { useRouter } from "next/navigation"


export default function PageLayersComponent() {


  
  type Table1 = {
    uuid: string;
    name: string;
    layerTypeDescription: string;
    geometryTypeDescription: string;
    url: string;
    statusDescription: string;
}

  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
const { igrpToast } = useIGRPToast()

async function handleDelete (row: any): Promise<void  | undefined> {

  console.log(row)
try {
  await deleteLayer(row.uuid);
  igrpToast({
    type: 'success',
    title: 'Layer deleted successfully',
  });
} catch (error) {
  igrpToast({
    type: 'error',
    title: 'Error deleting layer',
  });
}

}

function goToNewLayer (): void  | undefined {

  router.push('layers/new')

}

const router = useRouter()
const {data, isLoading} = useLayers();

useEffect(() => {
  if(isLoading || !data) return
  setContentTabletable1(data || [])

},[data, isLoading])


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Gestão de Layers` }
  description={ `Configure layers, associe a mapas` }
  iconBackButton={ `Search` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Plus` }

  className={ cn() }
  onClick={ goToNewLayer }
  
>
  Nova Layer
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn('block','mr-5 ml-5 mx-5','overflow-visibleborder border-solid border-[#D3D3D3] rounded-xl',' border rounded-lg',)}    >
	<div className={ cn(' px-4 pt-2',)}    >
	<IGRPInputSearch
  name={ `inputSearch1` }
  label={ undefined }
showStartIcon={ true }
startIcon={ `Search` }
submitIcon={ `ArrowRight` }
required={ false }


placeholder={ `Search...` }
  className={ cn() }
  setValueChange={ (value) => '' }
  
>
</IGRPInputSearch></div>
<IGRPDataTable<Table1, Table1>
  tableClassName={ `rounded-none` }
  className={ cn() }
  columns={
    [
        {
          header: 'Nome'
,accessorKey: 'name',
          cell: ({ row }) => {
          return row.getValue("name")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Tipo'
,accessorKey: 'layerTypeDescription',
          cell: ({ row }) => {
          return row.getValue("layerTypeDescription")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Tipo Geomêtria'
,accessorKey: 'geometryTypeDescription',
          cell: ({ row }) => {
          return row.getValue("geometryTypeDescription")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'URL'
,accessorKey: 'url',
          cell: ({ row }) => {
          return row.getValue("url")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Estado'
,accessorKey: 'statusDescription',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.statusDescription }
  variant={ `soft` }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
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
  <IGRPDataTableDropdownMenu
  items={
    [
      {
        component: IGRPDataTableDropdownMenuLink,
        props: {
          labelTrigger: `Editar`,icon: `SquarePen`,href: `/layers/${row.original.uuid}/edit`,          showIcon: true,          action: (e) => {},
}
      },
      {
        component: IGRPDataTableDropdownMenuAlert,
        props: {
          modalTitle: `Eliminar`,labelTrigger: `Eliminar`,icon: `Trash2`,          showIcon: true,showCancel: true,labelCancel: `Cancel`,variantCancel: `outline`,showConfirm: true,labelConfirm: `Confirm`,variantConfirm: `default`,          onClickConfirm: () => {handleDelete(rowData)},
          children: <>Deseja efectuar essa operaçāo?</>
}
      },
]
  }
>
</IGRPDataTableDropdownMenu>
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
