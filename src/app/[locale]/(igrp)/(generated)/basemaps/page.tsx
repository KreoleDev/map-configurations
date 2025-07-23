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
import {deleteBasemap} from '@/app/[locale]/(myapp)/functions/basemaps'
import {useBasemaps} from '@/app/[locale]/(myapp)/hooks/basemaps'
import { useRouter } from "next/navigation"


export default function PageBasemapsComponent() {


  
  type Table1 = {
    name: string;
    link: string;
    status: boolean;
    uuid: string;
}

  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
const { igrpToast } = useIGRPToast()

async function handleDelete (row: any): Promise<void  | undefined> {

  
try {
  await deleteBasemap(row.uuid);
  igrpToast({
    type: 'success',
    title: 'Basemap deleted successfully',
  });

router.push('/basemaps')
} catch (error) {
  igrpToast({
    type: 'error',
    title: 'Error deleting basemap',
  });
}

}

    const router = useRouter()

const {data, isLoading} = useBasemaps();

useEffect(() => {
  if(isLoading || !data) return
  setContentTabletable1(data || [])

},[data, isLoading])


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Gestão de Basemaps` }
  description={ `Configure basemaps, associe a mapas` }
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
  onClick={ () => {} }
  
>
  Novo Basemap
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn('border border-solid border-[#D3D3D3] rounded-xl',' border rounded-lg',)}    >
	<div className={ cn('mr-5 ml-5 mx-5',)}    >
	<IGRPInputSearch
  name={ `inputSearch1` }
  label={ undefined }
showStartIcon={ true }
startIcon={ `Search` }
submitIcon={ `ArrowRight` }
required={ false }


placeholder={ `Search...` }
  className={ cn('','mr- ml- mx-',) }
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
          header: 'Link'
,accessorKey: 'link',
          cell: ({ row }) => {
          return row.getValue("link")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Estado'
,accessorKey: 'status',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.status }
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
          labelTrigger: `Editar`,icon: `SquarePen`,href: `/basemaps/${row.original.uuid}/edit`,          showIcon: true,          action: (e) => {},
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
