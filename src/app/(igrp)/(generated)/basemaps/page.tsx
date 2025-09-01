'use client';

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import {
  IGRPDataTableFacetedFilterFn,
  IGRPDataTableDateRangeFilterFn,
} from '@igrp/igrp-framework-react-design-system';
import {
  IGRPDataTableHeaderSortToggle,
  IGRPDataTableHeaderSortDropdown,
  IGRPDataTableHeaderRowsSelect,
} from '@igrp/igrp-framework-react-design-system';
import { IGRPOptionsProps } from '@igrp/igrp-framework-react-design-system';
import {
  IGRPPageHeader,
  IGRPButton,
  IGRPDataTable,
  IGRPDataTableRowAction,
  IGRPDataTableDropdownMenu,
  IGRPDataTableDropdownMenuLink,
  IGRPDataTableDropdownMenuAlert,
  IGRPDataTableFilterInput,
  IGRPDataTableFilterDropdown,
} from '@igrp/igrp-framework-react-design-system';
import { deleteBasemap } from '@/app/(myapp)/functions/basemaps';
import { useBasemaps } from '@/app/(myapp)/hooks/basemaps';
import { useBasemapsConfiguration } from '@/app/(myapp)/hooks/basemaps';
import { useRouter } from 'next/navigation';

export default function PageBasemapsComponent() {
  type Table1 = {
    name: string;
    link: string;
    status: string;
    statusDescription: string;
    uuid: string;
  };

  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  const [dropdownFiltertableDropdownFilter1Options, setDropdownFiltertableDropdownFilter1Options] =
    useState<IGRPOptionsProps[]>([]);

  const { igrpToast } = useIGRPToast();

  const router = useRouter();

  async function handleDelete(row: any): Promise<void | undefined> {
    try {
      await deleteBasemap(row.uuid);
      igrpToast({
        type: 'success',
        title: 'Basemap deleted successfully',
      });

      router.push('/basemaps');
    } catch (error) {
      igrpToast({
        type: 'error',
        title: 'Error deleting basemap',
      });
    }
  }

  function goNewMap(): void | undefined {
    router.push('basemaps/new');
  }

  const { statusOptions } = useBasemapsConfiguration();

  const { data, isLoading } = useBasemaps();

  useEffect(() => {
    if (isLoading || !data) return;
    setContentTabletable1(data || []);
  }, [data, isLoading]);

  useEffect(() => {
    setDropdownFiltertableDropdownFilter1Options(statusOptions || []);
  }, []);

  function goTonewBasemaps(row?: any): void {
    router.push(`/basemaps/new`);
  }

  return (
    <div className={cn('page', 'space-y-6')}>
      <div className={cn('section', ' space-x-6 space-y-6')}>
        <IGRPPageHeader
          name={`pageHeader1`}
          title={`Gestão de Basemaps`}
          description={`Configure basemaps, associe a mapas`}
          iconBackButton={`Search`}
          variant={`h3`}
        >
          <div className="flex items-center gap-2">
            <IGRPButton
              name={`button1`}
              variant={`default`}
              size={`default`}
              showIcon={true}
              iconName={`Plus`}
              className={cn()}
              onClick={() => goTonewBasemaps()}
            >
              Novo Basemap
            </IGRPButton>
          </div>
        </IGRPPageHeader>

        <IGRPDataTable<Table1, Table1>
          showFilter={true}
          columns={[
            {
              header: 'Nome',
              accessorKey: 'name',
              cell: ({ row }) => {
                return row.getValue('name');
              },
              filterFn: IGRPDataTableFacetedFilterFn,
            },
            {
              header: 'Link',
              accessorKey: 'link',
              cell: ({ row }) => {
                return row.getValue('link');
              },
              filterFn: IGRPDataTableFacetedFilterFn,
            },
            {
              id: 'tableActionListCell1',
              enableHiding: false,
              cell: ({ row }) => {
                const rowData = row.original;

                return (
                  <IGRPDataTableRowAction>
                    <IGRPDataTableDropdownMenu
                      items={[
                        {
                          component: IGRPDataTableDropdownMenuLink,
                          props: {
                            labelTrigger: `Editar`,
                            icon: `SquarePen`,
                            href: `/basemaps/${row.original.uuid}/edit`,
                            showIcon: true,
                          },
                        },
                        {
                          component: IGRPDataTableDropdownMenuAlert,
                          props: {
                            modalTitle: `Eliminar`,
                            labelTrigger: `Eliminar`,
                            icon: `Trash2`,
                            showIcon: true,
                            showCancel: true,
                            labelCancel: `Cancel`,
                            variantCancel: `outline`,
                            showConfirm: true,
                            labelConfirm: `Confirm`,
                            variantConfirm: `default`,
                            onClickConfirm: () => {
                              handleDelete(rowData);
                            },
                            children: <>Deseja efectuar essa operaçāo?</>,
                          },
                        },
                      ]}
                    ></IGRPDataTableDropdownMenu>
                  </IGRPDataTableRowAction>
                );
              },
              filterFn: IGRPDataTableFacetedFilterFn,
            },
          ]}
          clientFilters={[
            {
              columnId: `name`,
              component: (column) => <IGRPDataTableFilterInput column={column} />,
            },
            {
              columnId: `statusDescription`,
              component: (column) => (
                <IGRPDataTableFilterDropdown
                  column={column}
                  placeholder={`Filtar...`}
                  options={dropdownFiltertableDropdownFilter1Options}
                />
              ),
            },
          ]}
          data={contentTabletable1}
        />
      </div>
    </div>
  );
}
