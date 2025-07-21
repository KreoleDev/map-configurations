'use client';

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from '@igrp/igrp-framework-react-design-system';
import { z } from '@igrp/igrp-framework-react-design-system';
import {
  IGRPModalDialog,
  IGRPModalDialogContent,
  IGRPModalDialogHeader,
  IGRPModalDialogTitle,
  IGRPModalDialogDescription,
  IGRPForm,
  IGRPFormList,
  IGRPInputText,
  IGRPModalDialogFooter,
  IGRPModalDialogClose,
  IGRPButton,
} from '@igrp/igrp-framework-react-design-system';

export default function Group({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (prompt: boolean) => void;
}) {
  const form1 = z.object({
    groups: z.array(z.object({ name: z.string().optional() })).optional(),
  });

  type Form1ZodType = typeof form1;

  const initForm1: z.infer<Form1ZodType> = {
    groups: [{ name: `` }],
  };

  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [formListgroupsDefault, setFormListgroupsDefault] = useState<any>({});

  const { igrpToast } = useIGRPToast();

  return (
    <div className={cn('component')}>
      <IGRPModalDialog onOpenChange={setOpen} open={open}>
        <IGRPModalDialogContent size={`lg`} className={cn()}>
          <IGRPModalDialogHeader className={cn('')}>
            <IGRPModalDialogTitle name={`modalDialogTitle1`}>Grupo</IGRPModalDialogTitle>
            <IGRPModalDialogDescription name={`modalDialogDescription1`}>
              Criar grupo para agrupamento dos layers
            </IGRPModalDialogDescription>
          </IGRPModalDialogHeader>
          <IGRPForm
            schema={form1}
            validationMode={`onBlur`}
            formRef={formform1Ref}
            className={cn('')}
            onSubmit={(e) => {}}
            defaultValues={form1Data}
          >
            <>
              <IGRPFormList
                id={`formlist_j5gvl7`}
                name={`groups`}
                label={`Grupo`}
                color={`primary`}
                variant={`solid`}
                addButtonLabel={`Add`}
                addButtonIconName={`Plus`}
                badgeValue={`Form List`}
                renderItem={(_: any, index: number) => (
                  <>
                    <IGRPInputText
                      name={`groups.${index}.inputText1`}
                      label={`Grupo`}
                      showIcon={false}
                      required={false}
                      placeholder={`Nome do grupo`}
                      className={cn()}
                      onChange={() => {}}
                    ></IGRPInputText>
                  </>
                )}
                computeLabel={(item: any, index: number) => `Item ${index}`}
                className={cn()}
                defaultItem={formListgroupsDefault}
              ></IGRPFormList>
            </>
          </IGRPForm>
          <IGRPModalDialogFooter className={cn('')}>
            <IGRPModalDialogClose name={`modalDialogClose1`} onClick={() => {}}>
              Close
            </IGRPModalDialogClose>
            <IGRPButton
              name={`button1`}
              variant={`default`}
              size={`default`}
              showIcon={true}
              iconName={`Save`}
              onClick={() => {}}
            >
              Salvar
            </IGRPButton>
          </IGRPModalDialogFooter>
        </IGRPModalDialogContent>
      </IGRPModalDialog>
    </div>
  );
}
