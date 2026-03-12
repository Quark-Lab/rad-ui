"use client";

import * as React from "react";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "@/registry/web/ui";
import { Maximize, Minimize } from "lucide-react";

export const code = `import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "@/components/ui/collapsible";
import { Maximize, Minimize } from "lucide-react";

export default function CollapsibleSettingsPanel() {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>شعاع گوشه‌ها</CardTitle>
        <CardDescription>شعاع گوشه‌های المان را تنظیم کنید.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="flex items-start gap-2"
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="radius-x" className="sr-only">
                Radius X
              </FieldLabel>
              <Input id="radius-x" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="radius-y" className="sr-only">
                Radius Y
              </FieldLabel>
              <Input id="radius-y" placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel htmlFor="radius-top" className="sr-only">
                  Radius Top
                </FieldLabel>
                <Input id="radius-top" placeholder="0" defaultValue={0} />
              </Field>
              <Field>
                <FieldLabel htmlFor="radius-bottom" className="sr-only">
                  Radius Bottom
                </FieldLabel>
                <Input id="radius-bottom" placeholder="0" defaultValue={0} />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon">
              {open ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
`;

export default function CollapsibleSettingsPanel() {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>شعاع گوشه‌ها</CardTitle>
        <CardDescription>شعاع گوشه‌های المان را تنظیم کنید.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="flex items-start gap-2"
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="radius-x" className="sr-only">
                Radius X
              </FieldLabel>
              <Input id="radius-x" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="radius-y" className="sr-only">
                Radius Y
              </FieldLabel>
              <Input id="radius-y" placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel htmlFor="radius-top" className="sr-only">
                  Radius Top
                </FieldLabel>
                <Input id="radius-top" placeholder="0" defaultValue={0} />
              </Field>
              <Field>
                <FieldLabel htmlFor="radius-bottom" className="sr-only">
                  Radius Bottom
                </FieldLabel>
                <Input id="radius-bottom" placeholder="0" defaultValue={0} />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon">
              {open ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

