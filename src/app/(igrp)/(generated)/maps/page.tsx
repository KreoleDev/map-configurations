'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPDataTable,
	IGRPDataTableCellBadge,
	IGRPDataTableRowAction,
	IGRPDataTableDropdownMenu,
	IGRPDataTableDropdownMenuLink,
	IGRPDataTableDropdownMenuAlert,
	IGRPDataTableFilterInput,
	IGRPDataTableFilterDropdown 
} from "@igrp/igrp-framework-react-design-system";
import {deleteMap} from '@/app/(myapp)/functions/maps'
import {useMaps} from '@/app/(myapp)/hooks/maps'
import { useRouter } from "next/navigation"
import {useMapListConfiguration} from '@/app/(myapp)/hooks/maps'


export default function PageMapsComponent() {


  
  type Table1 = {
    name: string;
    code: string;
    uuid: string;
    center: string;
    statusDescription: string;
}

  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  const [dropdownFiltertableDropdownFilter1Options, setDropdownFiltertableDropdownFilter1Options] = useState<IGRPOptionsProps[]>([]);
  
  
const { igrpToast } = useIGRPToast()

async function handleDelete (row: any): Promise<void  | undefined> {

  
try {
  await deleteMap(row.uuid);
  igrpToast({
    type: 'success',
    title: 'Map deleted successfully',
  });
} catch (error) {
  igrpToast({
    type: 'error',
    title: 'Error deleting map',
  });
}

}

function goNewMap (): void  | undefined {

  router.push('/maps/new')

}

const router = useRouter()
const {data, isLoading} = useMaps();

const {statusOptions}= useMapListConfiguration();

useEffect(() => {
  if(isLoading || !data) return
  setContentTabletable1(data || [])
  
  setDropdownFiltertableDropdownFilter1Options(statusOptions || [])

},[data, isLoading])


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Gestão de Mapas` }
  description={ `Configure mapas, associe layers e widgets, e gerencie as configurações de visualização.` }
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
  onClick={ goNewMap }
  
>
  Novo Mapa
</IGRPButton>
</div>
</IGRPPageHeader>

<IGRPDataTable<Table1, Table1>
  showFilter={ true }
  tableClassName={ `rounded-none` }
  className={ cn('',) }
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
          header: 'Codigo'
,accessorKey: 'code',
          cell: ({ row }) => {
          return row.getValue("code")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'UUID'
,accessorKey: 'uuid',
          cell: ({ row }) => {
          return row.getValue("uuid")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Enquadramento'
,accessorKey: 'center',
          cell: ({ row }) => {
          return row.getValue("center")
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
          labelTrigger: `Editar`,icon: `SquarePen`,href: `/maps/${row.original.uuid}/edit`,          showIcon: true,          action: (e) => {},
}
      },
      {
        component: IGRPDataTableDropdownMenuAlert,
        props: {
          modalTitle: `Eliminar`,labelTrigger: `Eliminar`,icon: `Trash2`,          showIcon: true,showCancel: true,labelCancel: `Cancel`,variantCancel: `outline`,showConfirm: true,labelConfirm: `Confirm`,variantConfirm: `default`,          onClickConfirm: () => {handleDelete(rowData)},
          children: <>Deseja efectuar essa operaçāo?</>
}
      },
      {
        component: IGRPDataTableDropdownMenuLink,
        props: {
          labelTrigger: `Viewer`,icon: `Map`,href: `/maps/${row.original.uuid}/map-viewer`,          showIcon: true,          action: (e) => {},
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
        {
          columnId: `name`,
          component: (column) => (
          <IGRPDataTableFilterInput column={column} />
          )
        },
        {
          columnId: `statusDescription`,
          component: (column) => (
          <IGRPDataTableFilterDropdown
  column={column}
  placeholder={ `Filtar...` }
  
  options={ dropdownFiltertableDropdownFilter1Options }
/>
          )
        },
    ]
  }
  
  data={ contentTabletable1 }
/></div></div>
  );
}
